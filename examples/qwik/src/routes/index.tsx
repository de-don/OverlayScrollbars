import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { OverlayScrollbarsComponent, useOverlayScrollbars } from 'overlayscrollbars-qwik';
import type { OverlayScrollbarsComponentRef } from 'overlayscrollbars-qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

const content = (
  <div class="logo">
    <img alt="qwik logo" src="logo.svg" />
  </div>
);

export default component$(() => {
  const contentHidden = useSignal(false);
  const elementHidden = useSignal(false);
  const overlayScrollbarsApplied = useSignal(true);
  const bodyOverlayScrollbarsApplied = useSignal<boolean | null>(null);
  const osRef = useSignal<OverlayScrollbarsComponentRef | null>(null);
  // const [activeEvents, activateEvent] = useEventObserver();
  const [initBodyOverlayScrollbars, getBodyOverlayScrollbarsInstance] = useOverlayScrollbars({
    defer: true,
    // events: {
    //   initialized: () => {
    //     overlayScrollbarsApplied.value = true;
    //   },
    //   destroyed: () => {
    //     overlayScrollbarsApplied.value = false;
    //   },
    // },
    options: {
      scrollbars: {
        theme: 'os-theme-light',
      },
    },
  });

  const scrollContent = $(() => {
    const { value } = osRef;
    const osInstance = value?.osInstance();

    if (!osInstance) {
      return;
    }

    const { overflowAmount } = osInstance.state();
    const { scrollOffsetElement } = osInstance.elements();
    const { scrollLeft, scrollTop } = scrollOffsetElement;

    scrollOffsetElement.scrollTo({
      behavior: 'smooth',
      left: Math.round((overflowAmount.x - scrollLeft) / overflowAmount.x) * overflowAmount.x,
      top: Math.round((overflowAmount.y - scrollTop) / overflowAmount.y) * overflowAmount.y,
    });
  });
  const toggleContent = $(() => {
    contentHidden.value = !contentHidden.value;
  });
  const toggleElement = $(() => {
    elementHidden.value = !elementHidden.value;
  });
  const toggleBodyOverlayScrollbars = $(() => {
    const bodyOsInstance = getBodyOverlayScrollbarsInstance.value?.();

    if (bodyOsInstance && !bodyOsInstance.state().destroyed) {
      bodyOsInstance.destroy();
    } else {
      initBodyOverlayScrollbars.value?.({
        target: document.body,
        cancel: {
          body: false,
        },
      });
    }
  });

  useVisibleTask$(({ track }) => {
    track(() => initBodyOverlayScrollbars.value?.(document.body));
  });

  return (
    <>
      <main>
        <h1>
          <a
            href="https://www.npmjs.com/package/overlayscrollbars-qwik"
            target="_blank"
            rel="noreferrer"
          >
            OverlayScrollbars Qwik
          </a>
        </h1>
        <section class="slot">
          {overlayScrollbarsApplied.value ? (
            <OverlayScrollbarsComponent
              class="overlayscrollbars-qwik"
              style={elementHidden.value ? 'border: 1px solid red' : undefined}
              // ref={$((ref) => {
              //   console.log('ref', ref);
              //   osRef.value = ref;
              // })}
              options={{ scrollbars: { theme: 'os-theme-light' } }}
              // events={{
              //   initialized: () => activateEvent('initialized'),
              //   destroyed: () => activateEvent('destroyed'),
              //   updated: () => activateEvent('updated'),
              //   scroll: () => activateEvent('scroll'),
              // }}
              defer
            >
              {!contentHidden.value && content}
            </OverlayScrollbarsComponent>
          ) : (
            <div class="overlayscrollbars-qwik">{content}</div>
          )}
        </section>
        <section>
          <p class="title">Actions:</p>
          <div class="items">
            {overlayScrollbarsApplied.value && (
              <>
                <button onClick$={scrollContent}>Scroll</button>
                <button onClick$={toggleContent}>
                  {contentHidden.value ? 'Show' : 'Hide'} Content
                </button>
                <button onClick$={toggleElement}>
                  {elementHidden.value ? 'Show' : 'Hide'} Element
                </button>
              </>
            )}
            <button
              onClick$={() => {
                overlayScrollbarsApplied.value = !overlayScrollbarsApplied.value;
              }}
            >
              {overlayScrollbarsApplied.value ? 'Destroy' : 'Initialize'} OverlayScrollbars
            </button>
          </div>
        </section>
        {/*
        <section>
          <p class="title">Events:</p>
          <div class="items">
            {Object.entries(activeEvents).map(([eventName, event]) => (
              <div key={eventName} class={`event ${event.active ? 'active' : ''}`}>
                {eventName} ({event.count})
              </div>
            ))}
          </div>
        </section>
          */}
      </main>
      <footer>
        {bodyOverlayScrollbarsApplied.value !== null && (
          <section>
            <div class="items">
              <button onClick$={toggleBodyOverlayScrollbars}>
                {bodyOverlayScrollbarsApplied.value ? 'Destroy' : 'Initialize'} Body
                OverlayScrollbars
              </button>
            </div>
          </section>
        )}
        <a
          href="https://github.com/KingSora/OverlayScrollbars/tree/master/examples/qwik"
          target="_blank"
          rel="noreferrer"
        >
          Open source code of this example.
        </a>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: 'OverlayScrollbars & Qwik',
  meta: [],
};

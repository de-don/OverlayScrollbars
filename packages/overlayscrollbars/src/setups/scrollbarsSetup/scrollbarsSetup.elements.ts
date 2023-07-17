import {
  addClass,
  appendChildren,
  createDiv,
  directionIsRTL,
  each,
  isBoolean,
  isEmptyArray,
  parent,
  push,
  removeClass,
  removeElements,
  runEachAndClear,
  scrollLeft,
  scrollT,
  scrollTop,
  setT,
  style,
} from '~/support';
import {
  classNameScrollbar,
  classNameScrollbarHorizontal,
  classNameScrollbarVertical,
  classNameScrollbarTrack,
  classNameScrollbarHandle,
  classNameScrollbarTransitionless,
  classNameScrollbarNoCssCustomProps,
} from '~/classnames';
import { getEnvironment } from '~/environment';
import { dynamicInitializationElement as generalDynamicInitializationElement } from '~/initialization';
import {
  getScrollbarHandleLengthRatio,
  getScrollbarHandleOffsetRatio,
} from '~/setups/scrollbarsSetup/scrollbarsSetup.calculations';
import type {
  InitializationTarget,
  InitializationTargetElement,
  InitializationTargetObject,
} from '~/initialization';
import type { StructureSetupElementsObj } from '~/setups/structureSetup/structureSetup.elements';
import type { ScrollbarsSetupEvents } from '~/setups/scrollbarsSetup/scrollbarsSetup.events';
import type { StyleObject } from '~/typings';
import type { StructureSetupState } from '~/setups';

export interface ScrollbarStructure {
  _scrollbar: HTMLElement;
  _track: HTMLElement;
  _handle: HTMLElement;
}

export interface ScrollbarsSetupElement {
  _scrollTimeline: AnimationTimeline | null;
  _scrollbarStructures: ScrollbarStructure[];
  _clone: () => ScrollbarStructure;
  _style: (
    elmStyle: (
      scrollbarStructure: ScrollbarStructure
    ) => [HTMLElement | false | null | undefined, StyleObject]
  ) => void;
}

export interface ScrollbarsSetupElementsObj {
  _scrollbarsAddRemoveClass: (
    classNames: string | false | null | undefined,
    add?: boolean,
    isHorizontal?: boolean
  ) => void;
  _refreshScrollbarsHandleLength: (structureSetupState: StructureSetupState) => void;
  _refreshScrollbarsHandleOffset: (structureSetupState: StructureSetupState) => void;
  _refreshScrollbarsScrollbarOffsetTimeline: (structureSetupState: StructureSetupState) => void;
  _refreshScrollbarsScrollbarOffset: () => void;
  _horizontal: ScrollbarsSetupElement;
  _vertical: ScrollbarsSetupElement;
}

export type ScrollbarsSetupElements = [
  elements: ScrollbarsSetupElementsObj,
  appendElements: () => void,
  destroy: () => void
];

export const createScrollbarsSetupElements = (
  target: InitializationTarget,
  structureSetupElements: StructureSetupElementsObj,
  scrollbarsSetupEvents: ScrollbarsSetupEvents
): ScrollbarsSetupElements => {
  const { _getDefaultInitialization, _cssCustomProperties } = getEnvironment();
  const { scrollbars: defaultInitScrollbars } = _getDefaultInitialization();
  const { slot: defaultInitScrollbarsSlot } = defaultInitScrollbars;
  const {
    _documentElm,
    _target,
    _host,
    _viewport,
    _targetIsElm,
    _scrollOffsetElement,
    _scrollEventElement,
    _isBody,
    _viewportIsTarget,
  } = structureSetupElements;
  const { scrollbars: scrollbarsInit } = (_targetIsElm ? {} : target) as InitializationTargetObject;
  const { slot: initScrollbarsSlot } = scrollbarsInit || {};
  const scrollbarsOffsetAnimations = new Map<HTMLElement, Animation[]>();
  const scrollTimelineX = scrollT
    ? new scrollT({
        source: _scrollEventElement,
        axis: 'x',
      })
    : null;
  const scrollTimelineY = scrollT
    ? new scrollT({
        source: _scrollEventElement,
        axis: 'y',
      })
    : null;

  const evaluatedScrollbarSlot = generalDynamicInitializationElement<
    [InitializationTargetElement, HTMLElement, HTMLElement]
  >(
    [_target, _host, _viewport],
    () => (_viewportIsTarget && _isBody ? _target : _host),
    defaultInitScrollbarsSlot,
    initScrollbarsSlot
  );
  const doRefreshScrollbarOffset = (scrollbar: HTMLElement) =>
    _viewportIsTarget && !_isBody && parent(scrollbar) === _viewport;
  const cancelScrollbarsOffsetAnimations = () => {
    scrollbarsOffsetAnimations.forEach((animations) => {
      if (animations) {
        animations.forEach((animation) => animation.cancel());
      }
    });
  };
  const scrollbarStructureAddRemoveClass = (
    scrollbarStructures: ScrollbarStructure[],
    classNames: string | false | null | undefined,
    add?: boolean
  ) => {
    const action = add ? addClass : removeClass;
    each(scrollbarStructures, (scrollbarStructure) => {
      action(scrollbarStructure._scrollbar, classNames);
    });
  };
  const scrollbarStyle = (
    scrollbarStructures: ScrollbarStructure[],
    elmStyle: (
      scrollbarStructure: ScrollbarStructure
    ) => [HTMLElement | false | null | undefined, StyleObject]
  ) => {
    each(scrollbarStructures, (scrollbarStructure) => {
      const [elm, styles] = elmStyle(scrollbarStructure);
      style(elm, styles);
    });
  };
  const scrollbarStructureRefreshHandleLength = (
    scrollbarStructures: ScrollbarStructure[],
    structureSetupState: StructureSetupState,
    isHorizontal?: boolean
  ) => {
    scrollbarStyle(scrollbarStructures, (structure) => {
      const { _handle, _track } = structure;
      return [
        _handle,
        {
          [isHorizontal ? 'width' : 'height']: `${(
            getScrollbarHandleLengthRatio(_handle, _track, isHorizontal, structureSetupState) * 100
          ).toFixed(3)}%`,
        },
      ];
    });
  };
  const scrollbarStructureRefreshHandleOffset = (
    scrollbarStructures: ScrollbarStructure[],
    structureSetupState: StructureSetupState,
    isHorizontal?: boolean
  ) => {
    if (!scrollTimelineY && !scrollTimelineY) {
      const translateAxis = isHorizontal ? 'X' : 'Y';
      scrollbarStyle(scrollbarStructures, (structure) => {
        const { _handle, _track, _scrollbar } = structure;
        const offsetRatio = getScrollbarHandleOffsetRatio(
          _handle,
          _track,
          _scrollOffsetElement,
          structureSetupState,
          directionIsRTL(_scrollbar),
          isHorizontal
        );
        // eslint-disable-next-line no-self-compare
        const validOffsetRatio = offsetRatio === offsetRatio; // is false when offset is NaN
        return [
          _handle,
          {
            transform: validOffsetRatio
              ? `translate${translateAxis}(${(offsetRatio * 100).toFixed(3)}%)`
              : '',
          },
        ];
      });
    }
  };
  const styleScrollbarPosition = (structure: ScrollbarStructure) => {
    const { _scrollbar } = structure;
    const elm = doRefreshScrollbarOffset(_scrollbar) && _scrollbar;
    return [
      elm,
      {
        transform: elm
          ? `translate(${scrollLeft(_scrollOffsetElement)}px, ${scrollTop(_scrollOffsetElement)}px)`
          : '',
      },
    ] as [HTMLElement | false, StyleObject];
  };

  const destroyFns: (() => void)[] = [];
  const horizontalScrollbars: ScrollbarStructure[] = [];
  const verticalScrollbars: ScrollbarStructure[] = [];

  const scrollbarsAddRemoveClass = (
    className: string | false | null | undefined,
    add?: boolean,
    onlyHorizontal?: boolean
  ) => {
    const singleAxis = isBoolean(onlyHorizontal);
    const runHorizontal = singleAxis ? onlyHorizontal : true;
    const runVertical = singleAxis ? !onlyHorizontal : true;
    runHorizontal && scrollbarStructureAddRemoveClass(horizontalScrollbars, className, add);
    runVertical && scrollbarStructureAddRemoveClass(verticalScrollbars, className, add);
  };
  const refreshScrollbarsHandleLength = (structureSetupState: StructureSetupState) => {
    scrollbarStructureRefreshHandleLength(horizontalScrollbars, structureSetupState, true);
    scrollbarStructureRefreshHandleLength(verticalScrollbars, structureSetupState);
  };
  const refreshScrollbarsHandleOffset = (structureSetupState: StructureSetupState) => {
    scrollbarStructureRefreshHandleOffset(horizontalScrollbars, structureSetupState, true);
    scrollbarStructureRefreshHandleOffset(verticalScrollbars, structureSetupState);
  };
  const refreshScrollbarsScrollbarOffset = () => {
    if (!scrollTimelineY && !scrollTimelineY) {
      _viewportIsTarget && scrollbarStyle(horizontalScrollbars, styleScrollbarPosition);
      _viewportIsTarget && scrollbarStyle(verticalScrollbars, styleScrollbarPosition);
    }
  };
  const refreshScrollbarsScrollbarOffsetTimeline = ({ _overflowAmount }: StructureSetupState) => {
    cancelScrollbarsOffsetAnimations();
    verticalScrollbars.concat(horizontalScrollbars).forEach(({ _scrollbar }) => {
      if (doRefreshScrollbarOffset(_scrollbar)) {
        scrollbarsOffsetAnimations.set(_scrollbar, [
          _scrollbar.animate(
            {
              transform: ['translateX(0)', `translateX(${_overflowAmount.x}px)`],
            },
            {
              // @ts-ignore
              timeline: scrollTimelineX,
              composite: 'add',
            }
          ),
          _scrollbar.animate(
            {
              transform: ['translateY(0)', `translateY(${_overflowAmount.y}px)`],
            },
            {
              // @ts-ignore
              timeline: scrollTimelineY,
              composite: 'add',
            }
          ),
        ]);
      }
    });
  };
  const generateScrollbarDOM = (isHorizontal?: boolean): ScrollbarStructure => {
    const scrollbarClassName = isHorizontal
      ? classNameScrollbarHorizontal
      : classNameScrollbarVertical;
    const arrToPush = isHorizontal ? horizontalScrollbars : verticalScrollbars;
    const transitionlessClass = isEmptyArray(arrToPush) ? classNameScrollbarTransitionless : '';
    const scrollbar = createDiv(
      `${classNameScrollbar} ${scrollbarClassName} ${transitionlessClass}`
    );
    const track = createDiv(classNameScrollbarTrack);
    const handle = createDiv(classNameScrollbarHandle);
    const result = {
      _scrollbar: scrollbar,
      _track: track,
      _handle: handle,
    };

    if (!_cssCustomProperties) {
      addClass(scrollbar, classNameScrollbarNoCssCustomProps);
    }

    appendChildren(scrollbar, track);
    appendChildren(track, handle);

    push(arrToPush, result);
    push(destroyFns, [
      () => {
        cancelScrollbarsOffsetAnimations();
        scrollbarsOffsetAnimations.clear();
      },
      removeElements.bind(0, scrollbar),
      scrollbarsSetupEvents(
        result,
        scrollbarsAddRemoveClass,
        _documentElm,
        _host,
        _scrollOffsetElement,
        isHorizontal ? scrollTimelineX : scrollTimelineY,
        isHorizontal
      ),
    ]);

    return result;
  };
  const generateHorizontalScrollbarStructure = generateScrollbarDOM.bind(0, true);
  const generateVerticalScrollbarStructure = generateScrollbarDOM.bind(0, false);
  const appendElements = () => {
    appendChildren(evaluatedScrollbarSlot, horizontalScrollbars[0]._scrollbar);
    appendChildren(evaluatedScrollbarSlot, verticalScrollbars[0]._scrollbar);

    setT(() => {
      scrollbarsAddRemoveClass(classNameScrollbarTransitionless);
    }, 300);
  };

  generateHorizontalScrollbarStructure();
  generateVerticalScrollbarStructure();

  return [
    {
      _refreshScrollbarsHandleLength: refreshScrollbarsHandleLength,
      _refreshScrollbarsHandleOffset: refreshScrollbarsHandleOffset,
      _refreshScrollbarsScrollbarOffsetTimeline: refreshScrollbarsScrollbarOffsetTimeline,
      _refreshScrollbarsScrollbarOffset: refreshScrollbarsScrollbarOffset,
      _scrollbarsAddRemoveClass: scrollbarsAddRemoveClass,
      _horizontal: {
        _scrollTimeline: scrollTimelineX,
        _scrollbarStructures: horizontalScrollbars,
        _clone: generateHorizontalScrollbarStructure,
        _style: scrollbarStyle.bind(0, horizontalScrollbars),
      },
      _vertical: {
        _scrollTimeline: scrollTimelineY,
        _scrollbarStructures: verticalScrollbars,
        _clone: generateVerticalScrollbarStructure,
        _style: scrollbarStyle.bind(0, verticalScrollbars),
      },
    },
    appendElements,
    runEachAndClear.bind(0, destroyFns),
  ];
};

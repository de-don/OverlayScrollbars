import {
  addClass,
  appendChildren,
  createDiv,
  getDirectionIsRTL,
  each,
  getTrasformTranslateValue,
  isBoolean,
  isEmptyArray,
  parent,
  push,
  removeClass,
  removeElements,
  runEachAndClear,
  scrollT,
  setT,
  bind,
  getElmentScroll,
  inArray,
  strWidth,
  strHeight,
  concat,
  assignDeep,
  ratioToCssPercent,
  numberToCssPx,
  setStyles,
  createOrKeepArray,
} from '~/support';
import {
  classNameScrollbar,
  classNameScrollbarHorizontal,
  classNameScrollbarVertical,
  classNameScrollbarTrack,
  classNameScrollbarHandle,
  classNameScrollbarTransitionless,
} from '~/classnames';
import { getEnvironment } from '~/environment';
import { dynamicInitializationElement as generalDynamicInitializationElement } from '~/initialization';
import type {
  InitializationTarget,
  InitializationTargetElement,
  InitializationTargetObject,
} from '~/initialization';
import type { StructureSetupElementsObj } from '../structureSetup/structureSetup.elements';
import type { ScrollbarsSetupEvents } from './scrollbarsSetup.events';
import type { StyleObject } from '~/typings';
import type { StructureSetupState } from '../structureSetup';
import {
  getScrollbarHandleLengthRatio,
  getScrollbarHandleOffsetPercent,
  getScrollbarHandleOffsetRatio,
} from './scrollbarsSetup.calculations';

export interface ScrollbarStructure {
  _scrollbar: HTMLElement;
  _track: HTMLElement;
  _handle: HTMLElement;
}

export interface ScrollbarsSetupElement {
  _scrollTimeline: AnimationTimeline | undefined;
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
  _refreshScrollbarsHandleLength: () => void;
  _refreshScrollbarsHandleOffset: () => void;
  _refreshScrollbarsScrollbarOffset: () => void;
  _horizontal: ScrollbarsSetupElement;
  _vertical: ScrollbarsSetupElement;
}

export type ScrollbarsSetupElements = [
  elements: ScrollbarsSetupElementsObj,
  appendElements: () => () => void
];

type PotentialAnimation = Animation | false | null | undefined;

export const createScrollbarsSetupElements = (
  target: InitializationTarget,
  structureSetupElements: StructureSetupElementsObj,
  structureSetupState: StructureSetupState,
  scrollbarsSetupEvents: ScrollbarsSetupEvents
): ScrollbarsSetupElements => {
  const { _getDefaultInitialization } = getEnvironment();
  const { scrollbars: defaultInitScrollbars } = _getDefaultInitialization();
  const { slot: defaultInitScrollbarsSlot } = defaultInitScrollbars;
  const {
    _target,
    _host,
    _viewport,
    _targetIsElm,
    _scrollOffsetElement,
    _isBody,
    _viewportIsTarget,
  } = structureSetupElements;
  const { scrollbars: scrollbarsInit } = (_targetIsElm ? {} : target) as InitializationTargetObject;
  const { slot: initScrollbarsSlot } = scrollbarsInit || {};
  const elementAnimations = new Map<HTMLElement, PotentialAnimation[]>();
  const initScrollTimeline = (axis: 'x' | 'y') =>
    scrollT &&
    new scrollT({
      source: _scrollOffsetElement,
      axis,
    });
  const scrollTimelineX = initScrollTimeline('x');
  const scrollTimelineY = initScrollTimeline('y');

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
  const getScrollbarOffsetKeyframes = (
    overflowAmount: number,
    isHorizontal?: boolean,
    directionRTL?: boolean
  ) => {
    const cushion = 0.5 * (directionRTL ? 1 : -1);
    const directionRTLMultiplicator = isHorizontal && directionRTL ? -1 : 1;
    return {
      transform: [
        getTrasformTranslateValue(numberToCssPx(0 + cushion), isHorizontal),
        getTrasformTranslateValue(
          numberToCssPx(overflowAmount * directionRTLMultiplicator + cushion),
          isHorizontal
        ),
      ],
    };
  };
  const addDirectionRTLKeyframes = (
    keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
    directionRTL?: boolean
  ) =>
    assignDeep(
      keyframes,
      directionRTL
        ? {
            clear: ['left'], // dummy keyframe for direction rtl animation because of chrome bug
          }
        : {}
    );
  const cancelElementAnimations = (elements?: HTMLElement | HTMLElement[]) => {
    elementAnimations.forEach((currAnimations, element) => {
      const doCancel = elements ? inArray(createOrKeepArray(elements), element) : true;
      if (doCancel) {
        each(currAnimations || [], (animation) => {
          animation && animation.cancel();
        });
        elementAnimations.delete(element);
      }
    });
  };
  const setElementAnimation = (
    element: HTMLElement,
    timeline: AnimationTimeline,
    keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
    composite?: CompositeOperation
  ) => {
    const activeAnimations = elementAnimations.get(element) || [];
    const activeAnimation = activeAnimations.find(
      (animation) => animation && animation.timeline === timeline
    );

    if (activeAnimation) {
      activeAnimation.effect = new KeyframeEffect(element, keyframes, { composite });
    } else {
      elementAnimations.set(
        element,
        concat(activeAnimations, [
          element.animate(keyframes, {
            timeline,
            composite,
          }),
        ])
      );
    }
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
      setStyles(elm, styles);
    });
  };
  const scrollbarStructureRefreshHandleLength = (
    scrollbarStructures: ScrollbarStructure[],
    isHorizontal?: boolean
  ) => {
    scrollbarStyle(scrollbarStructures, (structure) => {
      const { _handle } = structure;
      return [
        _handle,
        {
          [isHorizontal ? strWidth : strHeight]: ratioToCssPercent(
            getScrollbarHandleLengthRatio(structureSetupState, isHorizontal)
          ),
        },
      ];
    });
  };
  const scrollbarStructureRefreshHandleOffset = (
    scrollbarStructures: ScrollbarStructure[],
    isHorizontal?: boolean
  ) => {
    if (scrollTimelineX && scrollTimelineY) {
      each(scrollbarStructures, (structure: ScrollbarStructure) => {
        const { _scrollbar, _handle } = structure;
        const getRatio = bind(getScrollbarHandleOffsetRatio, structureSetupState, structure);
        const directionRTL = isHorizontal && getDirectionIsRTL(_scrollbar);
        const start = getRatio(directionRTL ? 1 : 0, isHorizontal);
        const end = getRatio(directionRTL ? 0 : 1, isHorizontal);
        setElementAnimation(
          _handle,
          isHorizontal ? scrollTimelineX : scrollTimelineY,
          addDirectionRTLKeyframes(
            {
              transform: [
                getTrasformTranslateValue(ratioToCssPercent(start), isHorizontal),
                getTrasformTranslateValue(ratioToCssPercent(end), isHorizontal),
              ],
            },
            directionRTL
          )
        );
      });
    } else {
      scrollbarStyle(scrollbarStructures, (structure) => {
        const { _handle, _scrollbar } = structure;
        const { _rtlScrollBehavior } = getEnvironment();
        const axis = isHorizontal ? 'x' : 'y';
        const { _overflowAmount } = structureSetupState;
        const isRTL = getDirectionIsRTL(_scrollbar);

        const offsetRatio = getScrollbarHandleOffsetRatio(
          structureSetupState,
          structure,
          getScrollbarHandleOffsetPercent(
            getElmentScroll(_scrollOffsetElement)[axis],
            _overflowAmount[axis],
            isHorizontal && isRTL && _rtlScrollBehavior
          ),
          isHorizontal
        );

        return [
          _handle,
          {
            transform: getTrasformTranslateValue(ratioToCssPercent(offsetRatio), isHorizontal),
          },
        ];
      });
    }
  };
  const styleScrollbarPosition = (structure: ScrollbarStructure) => {
    const { _scrollbar } = structure;
    const elm = doRefreshScrollbarOffset(_scrollbar) && _scrollbar;
    const { x, y } = getElmentScroll(_scrollOffsetElement);
    return [
      elm,
      {
        transform: elm
          ? getTrasformTranslateValue({ x: numberToCssPx(x), y: numberToCssPx(y) })
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
  const refreshScrollbarsHandleLength = () => {
    scrollbarStructureRefreshHandleLength(horizontalScrollbars, true);
    scrollbarStructureRefreshHandleLength(verticalScrollbars);
  };
  const refreshScrollbarsHandleOffset = () => {
    scrollbarStructureRefreshHandleOffset(horizontalScrollbars, true);
    scrollbarStructureRefreshHandleOffset(verticalScrollbars);
  };
  const refreshScrollbarsScrollbarOffset = () => {
    if (_viewportIsTarget) {
      if (scrollTimelineX && scrollTimelineY) {
        const { _overflowAmount } = structureSetupState;
        const directionRTL = !!horizontalScrollbars.find(({ _scrollbar }) =>
          getDirectionIsRTL(_scrollbar)
        );
        const setScrollbarElementAnimation = (
          scrollbar: HTMLElement,
          timeline: AnimationTimeline,
          overflowAmount: number,
          isHorizontal?: boolean,
          rtl?: boolean
        ) =>
          setElementAnimation(
            scrollbar,
            timeline,
            addDirectionRTLKeyframes(
              getScrollbarOffsetKeyframes(overflowAmount, isHorizontal, rtl),
              directionRTL
            ),
            'add'
          );

        each(concat(verticalScrollbars, horizontalScrollbars), ({ _scrollbar }) => {
          if (doRefreshScrollbarOffset(_scrollbar)) {
            setScrollbarElementAnimation(
              _scrollbar,
              scrollTimelineX,
              _overflowAmount.x,
              true,
              directionRTL
            );
            setScrollbarElementAnimation(_scrollbar, scrollTimelineY, _overflowAmount.y);
          } else {
            cancelElementAnimations(_scrollbar);
          }
        });
      } else {
        scrollbarStyle(horizontalScrollbars, styleScrollbarPosition);
        scrollbarStyle(verticalScrollbars, styleScrollbarPosition);
      }
    }
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

    push(arrToPush, result);
    push(destroyFns, [
      appendChildren(scrollbar, track),
      appendChildren(track, handle),
      bind(removeElements, scrollbar),
      cancelElementAnimations,
      scrollbarsSetupEvents(
        result,
        scrollbarsAddRemoveClass,
        scrollbarStructureRefreshHandleOffset,
        isHorizontal
      ),
    ]);

    return result;
  };
  const generateHorizontalScrollbarStructure = bind(generateScrollbarDOM, true);
  const generateVerticalScrollbarStructure = bind(generateScrollbarDOM, false);
  const appendElements = () => {
    appendChildren(evaluatedScrollbarSlot, horizontalScrollbars[0]._scrollbar);
    appendChildren(evaluatedScrollbarSlot, verticalScrollbars[0]._scrollbar);

    setT(() => {
      scrollbarsAddRemoveClass(classNameScrollbarTransitionless);
    }, 300);

    return bind(runEachAndClear, destroyFns);
  };

  generateHorizontalScrollbarStructure();
  generateVerticalScrollbarStructure();

  return [
    {
      _refreshScrollbarsHandleLength: refreshScrollbarsHandleLength,
      _refreshScrollbarsHandleOffset: refreshScrollbarsHandleOffset,
      _refreshScrollbarsScrollbarOffset: refreshScrollbarsScrollbarOffset,
      _scrollbarsAddRemoveClass: scrollbarsAddRemoveClass,
      _horizontal: {
        _scrollTimeline: scrollTimelineX,
        _scrollbarStructures: horizontalScrollbars,
        _clone: generateHorizontalScrollbarStructure,
        _style: bind(scrollbarStyle, horizontalScrollbars),
      },
      _vertical: {
        _scrollTimeline: scrollTimelineY,
        _scrollbarStructures: verticalScrollbars,
        _clone: generateVerticalScrollbarStructure,
        _style: bind(scrollbarStyle, verticalScrollbars),
      },
    },
    appendElements,
  ];
};

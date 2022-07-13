import { createEventListenerHub } from 'support';
import { createState, createOptionCheck } from 'setups/setups';
import { createStructureSetupElements } from 'setups/structureSetup/structureSetup.elements';
import { createStructureSetupUpdate } from 'setups/structureSetup/structureSetup.update';
import { createStructureSetupObservers } from 'setups/structureSetup/structureSetup.observers';
import type { StructureSetupUpdateHints } from 'setups/structureSetup/structureSetup.update';
import type { StructureSetupElementsObj } from 'setups/structureSetup/structureSetup.elements';
import type { TRBL, XY, EventListener } from 'support';
import type { Options, ReadonlyOSOptions } from 'options';
import type { Setup } from 'setups';
import type { InitializationTarget } from 'initialization';
import type { PartialOptions, StyleObject, OverflowStyle } from 'typings';

export interface StructureSetupState {
  _padding: TRBL;
  _paddingAbsolute: boolean;
  _viewportPaddingStyle: StyleObject;
  _overflowEdge: XY<number>;
  _overflowAmount: XY<number>;
  _overflowStyle: XY<OverflowStyle>;
  _hasOverflow: XY<boolean>;
  _heightIntrinsic: boolean;
  _directionIsRTL: boolean;
}

export interface StructureSetupStaticState {
  _elements: StructureSetupElementsObj;
  _appendElements: () => void;
  _addOnUpdatedListener: (listener: EventListener<StructureSetupEventMap, 'u'>) => void;
}

type StructureSetupEventMap = {
  u: [
    updateHints: StructureSetupUpdateHints,
    changedOptions: PartialOptions<Options>,
    force: boolean
  ];
};

const initialXYNumber = { x: 0, y: 0 };
const initialStructureSetupUpdateState: StructureSetupState = {
  _padding: {
    t: 0,
    r: 0,
    b: 0,
    l: 0,
  },
  _paddingAbsolute: false,
  _viewportPaddingStyle: {
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  _overflowEdge: initialXYNumber,
  _overflowAmount: initialXYNumber,
  _overflowStyle: {
    x: 'hidden',
    y: 'hidden',
  },
  _hasOverflow: {
    x: false,
    y: false,
  },
  _heightIntrinsic: false,
  _directionIsRTL: false,
};

export const createStructureSetup = (
  target: InitializationTarget,
  options: ReadonlyOSOptions
): Setup<StructureSetupState, StructureSetupStaticState> => {
  const checkOptionsFallback = createOptionCheck(options, {});
  const state = createState(initialStructureSetupUpdateState);
  const [addEvent, removeEvent, triggerEvent] = createEventListenerHub<StructureSetupEventMap>();
  const [getState] = state;
  const [elements, appendElements, destroyElements] = createStructureSetupElements(target);
  const updateStructure = createStructureSetupUpdate(elements, state);
  const [updateObservers, destroyObservers] = createStructureSetupObservers(
    elements,
    state,
    (updateHints) => {
      triggerEvent('u', [updateStructure(checkOptionsFallback, updateHints), {}, false]);
    }
  );

  const structureSetupState = getState.bind(0) as (() => StructureSetupState) &
    StructureSetupStaticState;
  structureSetupState._addOnUpdatedListener = (listener) => {
    addEvent('u', listener);
  };
  structureSetupState._appendElements = appendElements;
  structureSetupState._elements = elements;

  return [
    (changedOptions, force?) => {
      const checkOption = createOptionCheck(options, changedOptions, force);
      updateObservers(checkOption);
      triggerEvent('u', [updateStructure(checkOption, {}, force), changedOptions, !!force]);
    },
    structureSetupState,
    () => {
      removeEvent();
      destroyObservers();
      destroyElements();
    },
  ];
};

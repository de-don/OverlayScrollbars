import { CacheValues, OptionsValidated, hasOwnProperty } from 'support';
import { Options } from 'options';
import { LifecycleHub } from 'lifecycles/lifecycleHub';

export interface LifecycleAdaptiveUpdateHints {
  _sizeChanged: boolean;
  _hostMutation: boolean;
  _contentMutation: boolean;
}

export interface LifecycleUpdateHints extends LifecycleAdaptiveUpdateHints {
  _directionIsRTL: CacheValues<boolean>;
  _heightIntrinsic: CacheValues<boolean>;
}

export type LifecycleUpdateFunction = (
  updateHints: LifecycleUpdateHints,
  changedOptions?: OptionsValidated<Options> | null,
  force?: boolean
) => Partial<LifecycleAdaptiveUpdateHints>;

export interface LifecycleOptionInfo<T> {
  readonly _value: T;
  _changed: boolean;
}

export type LifecycleCheckOption = <T>(path: string) => LifecycleOptionInfo<T>;

const getPropByPath = <T>(obj: any, path: string): T =>
  obj && path.split('.').reduce((o, prop) => (o && hasOwnProperty(o, prop) ? o[prop] : undefined), obj);

/**
 * Creates a update function for a lifecycle.
 * @param lifecycleHub The LifecycleHub which is managing this lifecylce.
 * @param updateFunction The update function where cache and options updates are handled. Has two arguments which are the changedOptions and the changedCache objects.
 */
export const createLifecycleUpdateFunction = (
  lifecycleHub: LifecycleHub,
  updateFunction: (
    force: boolean,
    updateHints: LifecycleUpdateHints,
    checkOption: LifecycleCheckOption
  ) => Partial<LifecycleAdaptiveUpdateHints> | void
): LifecycleUpdateFunction => {
  return (updateHints: LifecycleUpdateHints, changedOptions?: OptionsValidated<Options> | null, force?: boolean) => {
    const checkOption: LifecycleCheckOption = (path) => ({
      _value: getPropByPath(lifecycleHub._options, path),
      _changed: force || getPropByPath(changedOptions, path) !== undefined,
    });
    return updateFunction(!!force, updateHints, checkOption) || {};
  };
};

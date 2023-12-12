import { setStyles, strHeight } from '~/support';
import { getEnvironment } from '~/environment';
import type { CreateStructureUpdateSegment } from '../structureSetup';

/**
 * Lifecycle with the responsibility to adjust the trinsic behavior of the content element.
 * @param structureUpdateHub
 * @returns
 */
export const createTrinsicUpdateSegment: CreateStructureUpdateSegment =
  ({ _content }) =>
  ({ _observersUpdateHints, _observersState, _force }) => {
    const { _flexboxGlue } = getEnvironment();
    const { _heightIntrinsicChanged } = _observersUpdateHints || {};
    const { _heightIntrinsic } = _observersState;
    const heightIntrinsicChanged =
      (_content || !_flexboxGlue) && (_heightIntrinsicChanged || _force);

    if (heightIntrinsicChanged) {
      setStyles(_content, {
        [strHeight]: _heightIntrinsic ? '' : '100%',
      });
    }
  };

import { connect } from 'react-redux';
import { operations, selectors } from '../common/duck';
import TapToBeginComponent from './TapToBeginComponent';

export const mapStateToProps = (
  state,
  versions = selectors.getVersionsState(state),
) => ({
  versions,
});

export const mapDispatchToProps = (dispatch) => ({
  getVersions: (getVersions = operations.getVersions) => {
    dispatch(getVersions());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TapToBeginComponent);

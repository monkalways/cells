import { connect } from 'react-redux';
import { operations, selectors } from './duck';
import HomeComponent from './HomeComponent';

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
)(HomeComponent);

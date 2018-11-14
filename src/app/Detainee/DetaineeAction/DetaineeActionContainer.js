import { connect } from 'react-redux';
import { selectors } from '../duck';
import DetaineeActionComponent from './DetaineeActionComponent';

export const mapStateToProps = (
  state,
  isMedicalRoomOptionAvailable = selectors.isMedicalRoomOptionAvailableState(state),
) => ({
  isMedicalRoomOptionAvailable,
});

export const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetaineeActionComponent);

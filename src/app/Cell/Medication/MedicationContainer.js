import { connect } from 'react-redux';
import { operations, selectors } from '../duck';
import { selectors as authenticationSelectors } from '../../Authentication/duck';
import MedicationComponent from './MedicationComponent';

export const mapStateToProps = (
  state,
  cellDetainees = selectors.getCellDetaineesState(state),
  cellName = selectors.getCellNameState(state),
  isCellDetaineesLoaded = selectors.isCellDetaineesLoadedState(state),
  isAuthenticated = authenticationSelectors.isAuthenticatedState(state),
  medication = selectors.getMedicationState(state),
  isSavingMedication = selectors.isSavingMedicationState(state),
) => ({
  cellDetainees,
  cellName,
  isAuthenticated,
  isCellDetaineesLoaded,
  medication,
  isSavingMedication,
});

export const mapDispatchToProps = (dispatch) => ({
  getCellDetainees: (
    name,
    getCellDetainees = operations.getCellDetaineesForMedication,
  ) => {
    dispatch(getCellDetainees(name));
  },
  acceptMedication: (
    detainee,
    acceptMedication = operations.acceptMedication,
  ) => {
    dispatch(acceptMedication(detainee));
  },
  rejectMedication: (
    detainee,
    rejectMedication = operations.rejectMedication,
  ) => {
    dispatch(rejectMedication(detainee));
  },
  notApplicableMedication: (
    detainee,
    notApplicableMedication = operations.notApplicableMedication,
  ) => {
    dispatch(notApplicableMedication(detainee));
  },
  acceptMedicationAll: (
    detainees,
    acceptMedication = operations.acceptMedication,
  ) => {
    detainees.forEach((detainee) => dispatch(acceptMedication(detainee)));
  },
  rejectMedicationAll: (
    detainees,
    rejectMedication = operations.rejectMedication,
  ) => {
    detainees.forEach((detainee) => dispatch(rejectMedication(detainee)));
  },
  notApplicableMedicationAll: (
    detainees,
    notApplicableMedication = operations.notApplicableMedication,
  ) => {
    detainees.forEach((detainee) => dispatch(notApplicableMedication(detainee)));
  },
  onSave: (meal, cellName, saveMedication = operations.saveMedication) => {
    dispatch(saveMedication(meal, cellName));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MedicationComponent);

import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Loading from '../../common/Loading';
import DetaineeGrid from '../DetaineeGrid';
import PersonalInformation from '../PersonalInformation';
import Location from '../Location';
import Notice from '../Notice';
import ProvidedWelfare from '../ProvidedWelfare';
import Activities from '../Activities';
import DetaineeAction from '../DetaineeAction';

const propTypes = {
  detainee: PropTypes.shape({
    bailHearingCount: PropTypes.number.isRequired,
    breathTestCount: PropTypes.number.isRequired,
    cautionsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
    detentionUnitName: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    fingerPrintCount: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    hasWarning: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    intakePhotoResourceUri: PropTypes.string,
    interviewCount: PropTypes.number.isRequired,
    isContagious: PropTypes.bool.isRequired,
    isSuicidal: PropTypes.bool.isRequired,
    isUnderMedication: PropTypes.bool.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    medicalCount: PropTypes.number.isRequired,
    mustBeKeptAlone: PropTypes.bool.isRequired,
    propertyBagNumber: PropTypes.string,
    telephoneAcceptedCount: PropTypes.number.isRequired,
    telephoneDeclinedCount: PropTypes.number.isRequired,
    withCaution: PropTypes.bool.isRequired,
  }),
  isDetaineeProfileLoaded: PropTypes.bool.isRequired,
};

const defaultProps = {
  detainee: null,
};

export const DetaineeDetailsComponent = ({
  detainee,
  isDetaineeProfileLoaded,
}) => (
  <React.Fragment>
    <DetaineeGrid>
      {isDetaineeProfileLoaded ? (
        <Grid container>
          <Grid item sm={10}>
            <PersonalInformation detainee={detainee} />
          </Grid>
          <Grid item sm={2}>
            <Location detainee={detainee} />
          </Grid>
          <Grid item sm={12}>
            <Notice detainee={detainee} />
          </Grid>
          <Grid item sm={12}>
            <ProvidedWelfare detainee={detainee} />
          </Grid>
          <Grid item sm={12}>
            <Activities detainee={detainee} />
          </Grid>
          <Grid item sm={12}>
            <DetaineeAction detainee={detainee} />
          </Grid>
        </Grid>
      ) : (
        <Loading />
      )}
    </DetaineeGrid>
  </React.Fragment>
);

DetaineeDetailsComponent.propTypes = propTypes;
DetaineeDetailsComponent.defaultProps = defaultProps;

export default DetaineeDetailsComponent;

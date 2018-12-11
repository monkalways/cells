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
    bailHearingCount: PropTypes.number,
    breathTestCount: PropTypes.number,
    cautionsArray: PropTypes.arrayOf(PropTypes.string),
    detentionUnitName: PropTypes.string,
    dob: PropTypes.string,
    firstName: PropTypes.string,
    fingerPrintCount: PropTypes.number,
    gender: PropTypes.string,
    hasWarning: PropTypes.bool,
    id: PropTypes.string,
    intakePhotoResourceUri: PropTypes.string,
    interviewCount: PropTypes.number,
    isContagious: PropTypes.bool,
    isSuicidal: PropTypes.bool,
    isUnderMedication: PropTypes.bool,
    lastName: PropTypes.string,
    location: PropTypes.string,
    medicalCount: PropTypes.number,
    mustBeKeptAlone: PropTypes.bool,
    propertyBagNumber: PropTypes.string,
    telephoneAcceptedCount: PropTypes.number,
    telephoneDeclinedCount: PropTypes.number,
    withCaution: PropTypes.bool,
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

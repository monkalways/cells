import React from 'react';
import { PropTypes } from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Tile from '../Common/Tile/Tile';
import FooterContainer from '../Common/Footer';
import HeaderContainer from '../Common/Header';

class CellManagementComponent extends React.PureComponent {
  static defaultProps = {
    cell: {},
    cellDetainees: [],
    cellWelfareData: [],
  };

  componentDidMount() {
    const { match, getCellInfo, getCellDetainees } = this.props;
    const { cellName } = match.params;

    getCellInfo(cellName);
    getCellDetainees(cellName);
  }

  saveWelfareData = () => {
    const { cellWelfareData, saveCellWelfare } = this.props;

    if (cellWelfareData.length > 0) {
      saveCellWelfare(cellWelfareData);
    }
  };

  handleConfirm = (/* modalConfirmData */) => {
    const { deleteCellWelfareData, resetCellWelfare } = this.props;

    // if (modalConfirmData.caseflow === CaseFlow.WarningWelfareDataNotSaved) {
    deleteCellWelfareData();
    resetCellWelfare();
    // }
  };

  exitWelfare = () => {
    const {
      cellWelfareData,
      deleteCellWelfareData,
      resetCellWelfare,
    } = this.props;

    if (cellWelfareData.length > 0) {
      // this.showModal(CaseFlow.WarningWelfareDataNotSaved);
      deleteCellWelfareData();
      resetCellWelfare();
    } else {
      resetCellWelfare();
    }
  };

  render() {
    const {
      cell,
      cellDetainees,
      isMeal,
      isMedication,
      isCellCheck,
      isAuthenticated,
    } = this.props;

    return (
      <div className="container">
        <HeaderContainer cell={cell} isUsedOn="cell" />

        <div className="divGridList">
          <GridList cellHeight="auto" className="gridList" cols={3}>
            {cellDetainees !== undefined
              && cellDetainees.map((detainee) => (
                <GridListTile key={detainee.id} cols={1}>
                  <Tile
                    detainee={detainee}
                    isAuthenticated={isAuthenticated}
                    isUsedOn="cell"
                    isMeal={isMeal}
                    isMedication={isMedication}
                    isCellCheck={isCellCheck}
                  />
                </GridListTile>
              ))}
          </GridList>
        </div>

        <FooterContainer
          isUsedOn="cell"
          saveWelfareData={this.saveWelfareData}
          navigateBack={this.exitWelfare}
        />
      </div>
    );
  }
}

CellManagementComponent.propTypes = {
  cell: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    occupancyLabel: PropTypes.string,
    genderLabel: PropTypes.string,
    cellStatus: PropTypes.string,
    isActivityRoom: PropTypes.bool,
    usage: PropTypes.string,
  }),
  cellDetainees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    arrestId: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    division: PropTypes.arrayOf(PropTypes.string).isRequired,
    detentionUnitName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    intakePhotoResourceUri: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    withCaution: PropTypes.bool.isRequired,
    cautionsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
    mustBeKeptAlone: PropTypes.bool.isRequired,
    isSuicidal: PropTypes.bool.isRequired,
    isContagious: PropTypes.bool.isRequired,
    hasWarning: PropTypes.bool.isRequired,
    isUnderMedication: PropTypes.bool.isRequired,
  })),
  isMeal: PropTypes.bool.isRequired,
  isMedication: PropTypes.bool.isRequired,
  isCellCheck: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      cellName: PropTypes.string,
    }).isRequired,
  }).isRequired,
  getCellInfo: PropTypes.func.isRequired,
  getCellDetainees: PropTypes.func.isRequired,
  cellWelfareData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    arrestId: PropTypes.string.isRequired,
    detentionLogType: PropTypes.string.isRequired,
    detentionLogAction: PropTypes.string,
  })),
  saveCellWelfare: PropTypes.func.isRequired,
  deleteCellWelfareData: PropTypes.func.isRequired,
  resetCellWelfare: PropTypes.func.isRequired,
};

export default CellManagementComponent;

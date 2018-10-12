import React from "react";
import Tile from "app/common/tile/tile";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { Footer } from "app/common/footer";
import { Header } from "app/common/header";

class CellManagementComponent extends React.PureComponent {
  componentDidMount() {
    const cellName = this.props.match.params.cellName;

    this.props.getCellInfo(cellName);
    this.props.getCellDetainees(cellName);

    if (this.props.location && this.props.location.state) {
      const { prevLocation, currentLocation } = this.props.location.state;
      //     this.props.setPreviousLocation(prevLocation);
      //     this.props.setCurrentLocation(currentLocation);
    }
  }

  saveWelfareData = () => {
    if (this.props.cellWelfareData.length > 0) {
      this.props.saveCellWelfare(this.props.cellWelfareData);
    }
  }

  handleConfirm = (modalConfirmData) => {
    //if (modalConfirmData.caseflow === CaseFlow.WarningWelfareDataNotSaved) {
    this.props.deleteCellWelfareData();
    this.props.resetCellWelfare();
    //}
  }

  exitWelfare = () => {
    if (this.props.cellWelfareData.length > 0) {
      //this.showModal(CaseFlow.WarningWelfareDataNotSaved);
      this.props.deleteCellWelfareData();
      this.props.resetCellWelfare();
    } else {
      this.props.resetCellWelfare();
    }
  }

  render() {
    const { cell, cellDetainees } = this.props;
    const { isMeal, isMedication, isCellCheck, isAuthenticated } = this.props;

    return (
      <div className="container">
        <Header cell={cell} isUsedOn="cell" />

        <div className="divGridList">
          <GridList cellHeight="auto" className="gridList" cols={3}>
            {cellDetainees !== undefined && cellDetainees.map((detainee) => (
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

        <Footer
          isUsedOn="cell"
          saveWelfareData={this.saveWelfareData}
          navigateBack={this.exitWelfare}
        />

      </div>
    );
  }
}

export default CellManagementComponent
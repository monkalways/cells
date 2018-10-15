import { selectors } from "../../duck";

describe("cell management selectors", () => {
  const state = {
    cellManagementData: {
      cellInfo: {
        id: "holding cell id",
        name: "holding cell name",
        cellStatus: "available"
      },
      cellDetainees: [
        {
          id: "detainee1 id",
          arrestId: "detainee1 arrestId",
          firstName: "detainee1 first name",
          lastName: "detainee1 last name"
        },
        {
          id: "detainee2 id",
          arrestId: "detainee2 arrestId",
          firstName: "detainee2 first name",
          lastName: "detainee2 last name"
        }
      ]
    }
  };

  it("should retrieve cell info from the store", () => {
    expect(selectors.getCellInfo(state)).toEqual(state.cellManagementData.cellInfo);
  });

  it("should retrieve cell detainees from the store", () => {
    expect(selectors.getCellDetainees(state)).toEqual(state.cellManagementData.cellDetainees);
  });

  it("should retrieve cell detainee by id from the store", () => {
    expect(selectors.getCellDetaineeById(state, "detainee2 id")).toEqual(state.cellManagementData.cellDetainees[1]);
  });

});
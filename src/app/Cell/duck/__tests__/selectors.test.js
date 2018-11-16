import selectors from '../selectors';

describe('Cell selectors', () => {
  it('should select getCellDetailsState', () => {
    const state = {
      cell: {
        details: {},
      },
    };
    const result = selectors.getCellDetailsState(state);
    expect(result).toBe(state.cell.details);
  });

  it('should select getCellNameState', () => {
    const state = {
      cell: {
        details: {
          name: 'c1',
        },
      },
    };
    const result = selectors.getCellNameState(state);
    expect(result).toBe(state.cell.details.name);
  });

  it('should select getCellDetaineesState', () => {
    const state = {
      cell: {
        detainees: {
          data: [],
        },
      },
    };
    const result = selectors.getCellDetaineesState(state);
    expect(result).toBe(state.cell.detainees.data);
  });

  it('should select isCellDetaineesLoadedState', () => {
    const state = {
      cell: {
        detainees: {
          loaded: false,
        },
      },
    };
    const result = selectors.isCellDetaineesLoadedState(state);
    expect(result).toBe(state.cell.detainees.loaded);
  });

  it('should select getCellCheckState', () => {
    const state = {
      cell: {
        cellCheck: {
          data: {},
        },
      },
    };
    const result = selectors.getCellCheckState(state);
    expect(result).toBe(state.cell.cellCheck.data);
  });

  it('should select isSavingCellCheckState', () => {
    const state = {
      cell: {
        cellCheck: {
          saving: false,
        },
      },
    };
    const result = selectors.isSavingCellCheckState(state);
    expect(result).toBe(state.cell.cellCheck.saving);
  });

  it('should select getMealState', () => {
    const state = {
      cell: {
        meal: {
          data: {},
        },
      },
    };
    const result = selectors.getMealState(state);
    expect(result).toBe(state.cell.meal.data);
  });

  it('should select isSavingMealState', () => {
    const state = {
      cell: {
        meal: {
          saving: false,
        },
      },
    };
    const result = selectors.isSavingMealState(state);
    expect(result).toBe(state.cell.meal.saving);
  });

  it('should select getMedicationState', () => {
    const state = {
      cell: {
        medication: {
          data: {},
        },
      },
    };
    const result = selectors.getMedicationState(state);
    expect(result).toBe(state.cell.medication.data);
  });

  it('should select isSavingMedicationState', () => {
    const state = {
      cell: {
        medication: {
          saving: false,
        },
      },
    };
    const result = selectors.isSavingMedicationState(state);
    expect(result).toBe(state.cell.medication.saving);
  });
});

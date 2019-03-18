import operations from '../operations';

describe('Cell operations', () => {
  describe('getCellDetails', () => {
    it('should getCellDetails successfully when service returns data', async () => {
      const name = 'c1';
      const cellDetails = {};

      const getCellDetailsService = jest.fn();
      getCellDetailsService.mockReturnValue(cellDetails);
      const getCellDetailsSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getCellDetails(
        name,
        getCellDetailsService,
        getCellDetailsSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getCellDetailsService).toBeCalledWith(name);
      expect(getCellDetailsSuccessAction).toBeCalledWith(cellDetails);
      expect(dispatch).toBeCalledTimes(1);
    });

    it('should notify error when service returns errors', async () => {
      const name = 'c1';

      const getCellDetailsService = jest.fn();
      getCellDetailsService.mockImplementation(() => {
        const error = new Error('500');
        error.response = { status: 500 };
        throw error;
      });
      const getCellDetailsSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getCellDetails(
        name,
        getCellDetailsService,
        getCellDetailsSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getCellDetailsService).toBeCalledWith(name);
      expect(getCellDetailsSuccessAction).not.toBeCalled();
      expect(sendErrorMessage).toBeCalledTimes(1);
    });
  });

  describe('getCellDetaineesForOverview', () => {
    it('should getCellDetaineesForOverview successfully when service returns data', async () => {
      const authenticated = false;
      const name = 'c1';
      const cellDetainees = [];

      const getCellDetaineesService = jest.fn();
      getCellDetaineesService.mockReturnValue(cellDetainees);
      const getCellDetaineesAction = jest.fn();
      const getCellDetaineesSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getCellDetaineesForOverview(
        name,
        authenticated,
        getCellDetaineesService,
        getCellDetaineesAction,
        getCellDetaineesSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getCellDetaineesAction).toBeCalled();
      expect(getCellDetaineesService).toBeCalledWith(name, authenticated);
      expect(getCellDetaineesSuccessAction).toBeCalledWith(cellDetainees);
      expect(dispatch).toBeCalledTimes(2);
    });

    it('should notify error when service returns errors', async () => {
      const authenticated = false;
      const name = 'c1';

      const getCellDetaineesService = jest.fn();
      getCellDetaineesService.mockImplementation(() => {
        const error = new Error('500');
        error.response = { status: 500 };
        throw error;
      });
      const getCellDetaineesAction = jest.fn();
      const getCellDetaineesSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getCellDetaineesForOverview(
        name,
        authenticated,
        getCellDetaineesService,
        getCellDetaineesAction,
        getCellDetaineesSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getCellDetaineesAction).toBeCalled();
      expect(getCellDetaineesService).toBeCalledWith(name, authenticated);
      expect(getCellDetaineesSuccessAction).not.toBeCalled();
      expect(sendErrorMessage).toBeCalled();
      expect(dispatch).toBeCalledTimes(1);
    });
  });

  describe('getCellDetaineesForCellCheck', () => {
    it('should getCellDetaineesForCellCheck successfully when service returns data', async () => {
      const name = 'c1';
      const inCellDetainee = {
        location: '',
      };
      const outOfCellDetainee = {
        location: 'Phone - In Transit',
      };
      const cellDetainees = [inCellDetainee, outOfCellDetainee];

      const getCellDetaineesService = jest.fn();
      getCellDetaineesService.mockReturnValue(cellDetainees);
      const getCellDetaineesAction = jest.fn();
      const getCellDetaineesSuccessAction = jest.fn();
      const visualCheckAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getCellDetaineesForCellCheck(
        name,
        getCellDetaineesService,
        getCellDetaineesAction,
        getCellDetaineesSuccessAction,
        visualCheckAction,
        sendErrorMessage,
      )(dispatch);

      expect(getCellDetaineesAction).toBeCalled();
      expect(getCellDetaineesService).toBeCalledWith(name);
      expect(visualCheckAction).toBeCalledWith(inCellDetainee);
      expect(visualCheckAction).toBeCalledTimes(1);
      expect(getCellDetaineesSuccessAction).toBeCalledWith(cellDetainees);
      expect(dispatch).toBeCalledTimes(3);
    });

    it('should notify error when service returns errors', async () => {
      const name = 'c1';

      const getCellDetaineesService = jest.fn();
      getCellDetaineesService.mockImplementation(() => {
        const error = new Error('500');
        error.response = { status: 500 };
        throw error;
      });
      const getCellDetaineesAction = jest.fn();
      const getCellDetaineesSuccessAction = jest.fn();
      const visualCheckAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getCellDetaineesForCellCheck(
        name,
        getCellDetaineesService,
        getCellDetaineesAction,
        getCellDetaineesSuccessAction,
        visualCheckAction,
        sendErrorMessage,
      )(dispatch);

      expect(getCellDetaineesAction).toBeCalled();
      expect(getCellDetaineesService).toBeCalledWith(name);
      expect(visualCheckAction).not.toBeCalled();
      expect(getCellDetaineesSuccessAction).not.toBeCalled();
      expect(sendErrorMessage).toBeCalled();
      expect(dispatch).toBeCalledTimes(1);
    });
  });

  describe('getCellDetaineesForMeal', () => {
    it('should getCellDetaineesForMeal successfully when service returns data', async () => {
      const name = 'c1';
      const inCellDetainee = {
        location: '',
      };
      const outOfCellDetainee = {
        location: 'Phone - In Transit',
      };
      const cellDetainees = [inCellDetainee, outOfCellDetainee];

      const getCellDetaineesService = jest.fn();
      getCellDetaineesService.mockReturnValue(cellDetainees);
      const getCellDetaineesAction = jest.fn();
      const getCellDetaineesSuccessAction = jest.fn();
      const acceptMealAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getCellDetaineesForMeal(
        name,
        getCellDetaineesService,
        getCellDetaineesAction,
        getCellDetaineesSuccessAction,
        acceptMealAction,
        sendErrorMessage,
      )(dispatch);

      expect(getCellDetaineesAction).toBeCalled();
      expect(getCellDetaineesService).toBeCalledWith(name);
      expect(acceptMealAction).toBeCalledWith(inCellDetainee);
      expect(acceptMealAction).toBeCalledTimes(1);
      expect(getCellDetaineesSuccessAction).toBeCalledWith(cellDetainees);
      expect(dispatch).toBeCalledTimes(3);
    });

    it('should notify error when service returns errors', async () => {
      const name = 'c1';

      const getCellDetaineesService = jest.fn();
      getCellDetaineesService.mockImplementation(() => {
        const error = new Error('500');
        error.response = { status: 500 };
        throw error;
      });
      const getCellDetaineesAction = jest.fn();
      const getCellDetaineesSuccessAction = jest.fn();
      const acceptMealAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getCellDetaineesForMeal(
        name,
        getCellDetaineesService,
        getCellDetaineesAction,
        getCellDetaineesSuccessAction,
        acceptMealAction,
        sendErrorMessage,
      )(dispatch);

      expect(getCellDetaineesAction).toBeCalled();
      expect(getCellDetaineesService).toBeCalledWith(name);
      expect(acceptMealAction).not.toBeCalled();
      expect(getCellDetaineesSuccessAction).not.toBeCalled();
      expect(sendErrorMessage).toBeCalled();
      expect(dispatch).toBeCalledTimes(1);
    });
  });

  describe('getCellDetaineesForMedication', () => {
    it('should getCellDetaineesForMedication successfully when service returns data', async () => {
      const name = 'c1';
      const inCellDetainee = {
        location: '',
        isUnderMedication: true,
      };
      const outOfCellDetainee = {
        location: 'Phone - In Transit',
      };
      const cellDetainees = [inCellDetainee, outOfCellDetainee];

      const getCellDetaineesService = jest.fn();
      getCellDetaineesService.mockReturnValue(cellDetainees);
      const getCellDetaineesAction = jest.fn();
      const getCellDetaineesSuccessAction = jest.fn();
      const acceptMedicationAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getCellDetaineesForMedication(
        name,
        getCellDetaineesService,
        getCellDetaineesAction,
        getCellDetaineesSuccessAction,
        acceptMedicationAction,
        sendErrorMessage,
      )(dispatch);

      expect(getCellDetaineesAction).toBeCalled();
      expect(getCellDetaineesService).toBeCalledWith(name);
      expect(acceptMedicationAction).toBeCalledWith(inCellDetainee);
      expect(acceptMedicationAction).toBeCalledTimes(1);
      expect(getCellDetaineesSuccessAction).toBeCalledWith(cellDetainees);
      expect(dispatch).toBeCalledTimes(3);
    });

    it('should notify error when service returns errors', async () => {
      const name = 'c1';

      const getCellDetaineesService = jest.fn();
      getCellDetaineesService.mockImplementation(() => {
        const error = new Error('500');
        error.response = { status: 500 };
        throw error;
      });
      const getCellDetaineesAction = jest.fn();
      const getCellDetaineesSuccessAction = jest.fn();
      const acceptMedicationAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getCellDetaineesForMedication(
        name,
        getCellDetaineesService,
        getCellDetaineesAction,
        getCellDetaineesSuccessAction,
        acceptMedicationAction,
        sendErrorMessage,
      )(dispatch);

      expect(getCellDetaineesAction).toBeCalled();
      expect(getCellDetaineesService).toBeCalledWith(name);
      expect(acceptMedicationAction).not.toBeCalled();
      expect(getCellDetaineesSuccessAction).not.toBeCalled();
      expect(sendErrorMessage).toBeCalled();
      expect(dispatch).toBeCalledTimes(1);
    });
  });

  describe('saveCellCheck', () => {
    it('should saveCellCheck successfully when service returns ok', async () => {
      const cellCheck = {};
      const cellName = 'c1';
      const userName = 'test';

      const saveCellCheckService = jest.fn();
      saveCellCheckService.mockReturnValue(null);
      const saveCellCheckAction = jest.fn();
      const saveCellCheckSuccessAction = jest.fn();
      const pushAction = jest.fn();
      const sendSuccessMessage = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.saveCellCheck(
        cellCheck,
        cellName,
        userName,
        saveCellCheckService,
        saveCellCheckAction,
        saveCellCheckSuccessAction,
        pushAction,
        sendSuccessMessage,
        sendErrorMessage,
      )(dispatch);

      expect(saveCellCheckAction).toBeCalled();
      expect(saveCellCheckService).toBeCalledWith(cellCheck, userName);
      expect(saveCellCheckSuccessAction).toBeCalled();
      expect(pushAction).toBeCalledWith('/cells/c1/home/');
      expect(sendSuccessMessage).toBeCalled();
      expect(dispatch).toBeCalledTimes(3);
    });

    it('should notify error when service returns errors', async () => {
      const cellCheck = {};
      const cellName = 'c1';
      const userName = 'test';

      const saveCellCheckService = jest.fn();
      saveCellCheckService.mockImplementation(() => {
        const error = new Error('500');
        error.response = { status: 500 };
        throw error;
      });
      const saveCellCheckAction = jest.fn();
      const saveCellCheckSuccessAction = jest.fn();
      const pushAction = jest.fn();
      const sendSuccessMessage = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.saveCellCheck(
        cellCheck,
        cellName,
        userName,
        saveCellCheckService,
        saveCellCheckAction,
        saveCellCheckSuccessAction,
        pushAction,
        sendSuccessMessage,
        sendErrorMessage,
      )(dispatch);

      expect(saveCellCheckAction).toBeCalled();
      expect(saveCellCheckService).toBeCalledWith(cellCheck, userName);
      expect(saveCellCheckSuccessAction).not.toBeCalled();
      expect(sendErrorMessage).toBeCalled();
      expect(dispatch).toBeCalledTimes(1);
    });
  });

  describe('saveMeal', () => {
    it('should saveMeal successfully when service returns true', async () => {
      const meal = {};
      const cellName = 'c1';
      const userName = 'test';

      const saveMealService = jest.fn();
      saveMealService.mockReturnValue(true);
      const saveMealAction = jest.fn();
      const saveMealSuccessAction = jest.fn();
      const pushAction = jest.fn();
      const sendSuccessMessage = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.saveMeal(
        meal,
        cellName,
        userName,
        saveMealService,
        saveMealAction,
        saveMealSuccessAction,
        pushAction,
        sendSuccessMessage,
        sendErrorMessage,
      )(dispatch);

      expect(saveMealAction).toBeCalled();
      expect(saveMealService).toBeCalledWith(meal, userName);
      expect(saveMealSuccessAction).toBeCalled();
      expect(pushAction).toBeCalledWith('/cells/c1/home/');
      expect(sendSuccessMessage).toBeCalled();
      expect(dispatch).toBeCalledTimes(3);
    });

    it('should not send success message when service returns false', async () => {
      const meal = {};
      const cellName = 'c1';
      const userName = 'test';

      const saveMealService = jest.fn();
      saveMealService.mockReturnValue(false);
      const saveMealAction = jest.fn();
      const saveMealSuccessAction = jest.fn();
      const pushAction = jest.fn();
      const sendSuccessMessage = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.saveMeal(
        meal,
        cellName,
        userName,
        saveMealService,
        saveMealAction,
        saveMealSuccessAction,
        pushAction,
        sendSuccessMessage,
        sendErrorMessage,
      )(dispatch);

      expect(saveMealAction).toBeCalled();
      expect(saveMealService).toBeCalledWith(meal, userName);
      expect(saveMealSuccessAction).toBeCalled();
      expect(pushAction).toBeCalledWith('/cells/c1/home/');
      expect(sendSuccessMessage).not.toBeCalled();
      expect(dispatch).toBeCalledTimes(3);
    });

    it('should notify error when service returns errors', async () => {
      const cellCheck = {};
      const cellName = 'c1';
      const userName = 'test';

      const saveMealService = jest.fn();
      saveMealService.mockImplementation(() => {
        const error = new Error('500');
        error.response = { status: 500 };
        throw error;
      });
      const saveMealAction = jest.fn();
      const saveMealSuccessAction = jest.fn();
      const pushAction = jest.fn();
      const sendSuccessMessage = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.saveMeal(
        cellCheck,
        cellName,
        userName,
        saveMealService,
        saveMealAction,
        saveMealSuccessAction,
        pushAction,
        sendSuccessMessage,
        sendErrorMessage,
      )(dispatch);

      expect(saveMealAction).toBeCalled();
      expect(saveMealService).toBeCalledWith(cellCheck, userName);
      expect(saveMealSuccessAction).not.toBeCalled();
      expect(sendErrorMessage).toBeCalled();
      expect(dispatch).toBeCalledTimes(1);
    });
  });

  describe('saveMedication', () => {
    it('should saveMedication successfully when service returns true', async () => {
      const meal = {};
      const cellName = 'c1';
      const userName = 'test';

      const saveMedicationService = jest.fn();
      saveMedicationService.mockReturnValue(true);
      const saveMedicationAction = jest.fn();
      const saveMedicationSuccessAction = jest.fn();
      const pushAction = jest.fn();
      const sendSuccessMessage = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.saveMedication(
        meal,
        cellName,
        userName,
        saveMedicationService,
        saveMedicationAction,
        saveMedicationSuccessAction,
        pushAction,
        sendSuccessMessage,
        sendErrorMessage,
      )(dispatch);

      expect(saveMedicationAction).toBeCalled();
      expect(saveMedicationService).toBeCalledWith(meal, userName);
      expect(saveMedicationSuccessAction).toBeCalled();
      expect(pushAction).toBeCalledWith('/cells/c1/home/');
      expect(sendSuccessMessage).toBeCalled();
      expect(dispatch).toBeCalledTimes(3);
    });

    it('should not send success message when service returns false', async () => {
      const meal = {};
      const cellName = 'c1';
      const userName = 'test';

      const saveMedicationService = jest.fn();
      saveMedicationService.mockReturnValue(false);
      const saveMedicationAction = jest.fn();
      const saveMedicationSuccessAction = jest.fn();
      const pushAction = jest.fn();
      const sendSuccessMessage = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.saveMedication(
        meal,
        cellName,
        userName,
        saveMedicationService,
        saveMedicationAction,
        saveMedicationSuccessAction,
        pushAction,
        sendSuccessMessage,
        sendErrorMessage,
      )(dispatch);

      expect(saveMedicationAction).toBeCalled();
      expect(saveMedicationService).toBeCalledWith(meal, userName);
      expect(saveMedicationSuccessAction).toBeCalled();
      expect(pushAction).toBeCalledWith('/cells/c1/home/');
      expect(sendSuccessMessage).not.toBeCalled();
      expect(dispatch).toBeCalledTimes(3);
    });

    it('should notify error when service returns errors', async () => {
      const cellCheck = {};
      const cellName = 'c1';
      const userName = 'test';

      const saveMedicationService = jest.fn();
      saveMedicationService.mockImplementation(() => {
        const error = new Error('500');
        error.response = { status: 500 };
        throw error;
      });
      const saveMedicationAction = jest.fn();
      const saveMedicationSuccessAction = jest.fn();
      const pushAction = jest.fn();
      const sendSuccessMessage = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.saveMedication(
        cellCheck,
        cellName,
        userName,
        saveMedicationService,
        saveMedicationAction,
        saveMedicationSuccessAction,
        pushAction,
        sendSuccessMessage,
        sendErrorMessage,
      )(dispatch);

      expect(saveMedicationAction).toBeCalled();
      expect(saveMedicationService).toBeCalledWith(cellCheck, userName);
      expect(saveMedicationSuccessAction).not.toBeCalled();
      expect(sendErrorMessage).toBeCalled();
      expect(dispatch).toBeCalledTimes(1);
    });
  });

  describe('toggleMenuOpen', () => {
    it('should toggleMenuOpen', () => {
      const menuButtonTargetElement = {};
      const toggleMenuOpenAction = jest.fn();
      const dispatch = jest.fn();

      operations.toggleMenuOpen(
        menuButtonTargetElement,
        toggleMenuOpenAction,
      )(dispatch);

      expect(toggleMenuOpenAction).toBeCalledWith(menuButtonTargetElement);
      expect(dispatch).toBeCalledTimes(1);
    });
  });

  describe('getCellHistoryReport', () => {
    it('should getCellHistoryReport successfully when there is no error', async () => {
      const cellName = 'c1';
      const startTime = new Date();
      const endTime = new Date();
      const report = {
        userLabel: 'Doe. J',
        lastOccupantName: 'Test User 1',
        movementHistories: [
          {
            time: new Date(Date.UTC(2019, 2, 11, 0)),
            detaineeName: 'Test User 2',
            sourceCellName: 'c1',
            detinationCellName: 'c2',
          },
        ],
      }

      const getCellHistoryReportService = jest.fn();
      getCellHistoryReportService.mockReturnValue(report);
      const getCellHistoryReportAction = jest.fn();
      const getCellHistoryReportSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getCellHistoryReport(
        cellName,
        startTime,
        endTime,
        getCellHistoryReportService,
        getCellHistoryReportAction,
        getCellHistoryReportSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getCellHistoryReportAction).toBeCalled();
      expect(getCellHistoryReportService).toBeCalledWith(cellName, startTime, endTime);
      expect(getCellHistoryReportSuccessAction).toBeCalledWith({
        ...report,
        cellName,
        startTime,
        endTime,
      });
      expect(dispatch).toBeCalledTimes(2);
    });

    it('should notify error when service returns errors', async () => {
      const cellName = 'c1';
      const startTime = new Date();
      const endTime = new Date();
      const report = {
        userLabel: 'Doe. J',
        lastOccupantName: 'Test User 1',
        movementHistories: [
          {
            time: new Date(Date.UTC(2019, 2, 11, 0)),
            detaineeName: 'Test User 2',
            sourceCellName: 'c1',
            detinationCellName: 'c2',
          },
        ],
      }

      const getCellHistoryReportService = jest.fn();
      getCellHistoryReportService.mockImplementation(() => {
        const error = new Error('500');
        error.response = { status: 500 };
        throw error;
      });
      const getCellHistoryReportAction = jest.fn();
      const getCellHistoryReportSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getCellHistoryReport(
        cellName,
        startTime,
        endTime,
        getCellHistoryReportService,
        getCellHistoryReportAction,
        getCellHistoryReportSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getCellHistoryReportAction).toBeCalled();
      expect(getCellHistoryReportService).toBeCalledWith(cellName, startTime, endTime);
      expect(sendErrorMessage).toBeCalled();
      expect(dispatch).toBeCalledTimes(1);
    });
  });
});

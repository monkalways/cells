import { actions as toastrActions } from 'react-redux-toastr';

const sendSuccessMessage = ({ dispatch, message }) => dispatch(toastrActions.add({
  type: 'success',
  title: 'Success',
  message,
}));

const sendErrorMessage = ({ dispatch, error }) => {
  const { message, response } = error;
  let errorMessage = message;
  if (response && response.data && response.data.Message) {
    errorMessage = response.data.Message;
  }
  dispatch(toastrActions.add({
    type: 'error',
    title: 'Oops!',
    attention: true,
    message: `Something went wrong. ${errorMessage}.`,
    timeOut: 10000,
  }));
};

export default { sendSuccessMessage, sendErrorMessage };

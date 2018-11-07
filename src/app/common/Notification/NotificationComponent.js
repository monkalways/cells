import React from 'react';
import ReduxToastr from 'react-redux-toastr';

const NotificationComponent = () => (
  <ReduxToastr
    timeOut={5000}
    newestOnTop
    preventDuplicates
    position="top-right"
    transitionIn="fadeIn"
    transitionOut="fadeOut"
    progressBar={false}
    closeOnToastrClick
  />
);

export default NotificationComponent;

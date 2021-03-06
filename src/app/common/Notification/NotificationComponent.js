import React from 'react';
import ReduxToastr from 'react-redux-toastr';

const NotificationComponent = () => (
  <ReduxToastr
    timeOut={10000}
    newestOnTop
    preventDuplicates={false}
    position="top-right"
    transitionIn="fadeIn"
    transitionOut="fadeOut"
    progressBar={false}
    closeOnToastrClick
  />
);

export default NotificationComponent;

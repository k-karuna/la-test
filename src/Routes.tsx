import React from 'react';
import { Switch, Route } from 'react-router-dom';

import InfoPage from '@/views/InfoPage';

/**
 * Component which contains a routes of the application.
 */
const Routes = () => {
  return (
    <Switch>
      <Route component={InfoPage} exact={true} path="/:name?" />
    </Switch>
  );
};

// Export.
export default Routes;

import React from 'react';
import withDashboard from '../shared/DashboardLayout/DashboardLayout';

const NotFound = () => {
    return (
        <div>
            <h1>Page not Found</h1>
        </div>
    );
};

export default withDashboard(NotFound);
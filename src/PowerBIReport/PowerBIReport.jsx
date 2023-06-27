import React, { useEffect } from 'react';
import * as powerbi from 'powerbi-client';

const PowerBIReport = () => {
  useEffect(() => {
    // Load the Power BI report
    const embedConfiguration = {
      type: 'report',
      id: 'your-report-id', // Replace with your Power BI report ID
      embedUrl: 'https://app.powerbi.com/reportEmbed', // Replace with your Power BI report embed URL
      accessToken: 'your-access-token', // Replace with your Power BI access token
      tokenType: powerbi.models.TokenType.Embed,
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false
      }
    };

    const reportContainer = document.getElementById('reportContainer');
    const report = powerbi.embed(reportContainer, embedConfiguration);

    return () => {
      // Clean up resources when the component is unmounted
      report.off('loaded');
      report.destroy();
    };
  }, []);

  return <div id="reportContainer" />;
};

export default PowerBIReport;

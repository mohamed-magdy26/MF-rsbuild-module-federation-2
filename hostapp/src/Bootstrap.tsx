import React from 'react';
import ReactDOM from 'react-dom/client';
import InternalExposedApp from 'InternalRemoteName/InternalExposedName';
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <InternalExposedApp />
    </React.StrictMode>,
  );
}

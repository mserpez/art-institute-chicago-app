import React from 'react';
import {RootNavigator} from './src/navigation';
import {ReactQueryProvider} from './src/providers';

function App(): React.JSX.Element {
  return (
    <ReactQueryProvider>
      <RootNavigator />
    </ReactQueryProvider>
  );
}

export default App;

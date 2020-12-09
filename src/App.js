import React from 'react';

import Container from './components/Container';
import Counter from './components/Counter';
import Mirror from './components/Mirror';
import CountProvider from './context/Counts';
import ThemeProvider from './context/Theme';

function App() {
  return (
    <div className="App">
    <ThemeProvider>
      <CountProvider>
        <Container>
          <Counter />

          <hr/>

          <Mirror />
        </Container>
      </CountProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;

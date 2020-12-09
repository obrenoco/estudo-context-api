import React from 'react';
import {useTheme,themes} from '../../context/Theme'

function Container({children}) {
  const {theme, setTheme} = useTheme();
  return (
    <div style={{ 
            background: theme.colors.background,
            color: theme.colors.text
        }}>
        {children}
        <br/>
        <br/>
        <button onClick={() => setTheme(theme.name === 'dark' ? themes[1] : themes[0])}>Tema</button>
    </div>
  );
}

export default Container;

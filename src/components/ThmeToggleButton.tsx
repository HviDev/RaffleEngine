import React, { useState, useEffect } from 'react';
import { getPreferredTheme, applyTheme } from '../utils/themeUtils';
import MoonIcon from '../assets/icons/moonIcon.svg?react';
import SunIcon from '../assets/icons/sunIcon.svg?react';

const ThemeToggleButton: React.FC = () => {
  const [theme, setTheme] = useState(getPreferredTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      {theme === 'light' ? <MoonIcon className='buttonIcon'/> : <SunIcon className='buttonIcon' />}
    </button>
  );
};

export default ThemeToggleButton;

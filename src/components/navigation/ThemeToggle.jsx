import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className={`theme-toggle-icon ${theme === 'light' ? 'show-sun' : 'show-moon'}`}>
        <Sun className="icon-sun" size={20} />
        <Moon className="icon-moon" size={20} />
      </div>
    </button>
  );
};

export default ThemeToggle;

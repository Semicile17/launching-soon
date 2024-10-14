"use-client"

import { useTheme } from '@/contexts/ThemeContext';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2">
      {theme === 'light' ? (
        <MdDarkMode size={25} />
      ) : (
        <MdLightMode size={25} className='text-white'/>
      )}
    </button>
  );
};

export default ThemeToggle;

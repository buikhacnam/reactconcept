import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ThemeToggle() {
    const context = useContext(ThemeContext);
    const { toggleTheme } = context;

    return (
        <button onClick={toggleTheme}>Toggle Theme</button>
    )
}

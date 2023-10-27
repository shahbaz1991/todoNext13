'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from "@nextui-org/react";
import { SunIcon } from '../../public/SunIcon';
import { MoonIcon } from '../../public/MoonIcon';

function ThemeToggler() {
    // const { toggleTheme } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme()
    const [darkTheme, setDark] = useState(true);

    useEffect(() => {
        setTheme(darkTheme ? 'dark' : 'light')
    }, [darkTheme]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div>
            <Button size='sm' isIconOnly onClick={() => setDark(!darkTheme)}>
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </Button>
        </div>
    );
};

export default ThemeToggler;
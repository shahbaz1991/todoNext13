'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'
import { NextUIProvider } from "@nextui-org/react";

function ThemeProviders({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <ThemeProvider attribute="class">
                {children}
            </ThemeProvider>
        </NextUIProvider>
    )
}

export default ThemeProviders;
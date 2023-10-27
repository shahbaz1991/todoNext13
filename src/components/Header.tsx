import React from 'react'
import ThemeToggler from './ThemeToggler'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Logout from './Logout';

function Header() {
    return (
        <>
            <Navbar className='h-[50px]' maxWidth={'full'} isBordered isBlurred={false}>
                <NavbarBrand>
                    <p className="font-bold text-inherit">TODO APP <span className='font-normal text-xs'>(Next.js 13)</span></p>
                </NavbarBrand>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Logout />
                    </NavbarItem>
                    <NavbarItem>
                        <ThemeToggler />
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    )
}

export default Header
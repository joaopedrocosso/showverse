'use client'
import { UserButton } from '@clerk/nextjs'
import { Menu, Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'

const Header = () => {
  return (
    <header className='flex justify-between items-center fixed w-full z-50 py-2 px-4 border-b border-primary/10 bg-secondary'>
        <div className='flex items-center'>
            <Menu className='block md:hidden'/>
            <Link href={'/'}>
                <h1 className='hidden md:block text-xl md:text-3xl font-bold text-primary'>
                    Showverse
                </h1>
            </Link>
        </div>

        <div className='flex items-center gap-x-3'>
            <Button variant='premium' size='sm'>
                Upgrade
                <Sparkles className='h-4 w-4 fill-white text-white ml-2'/>
            </Button>
            <ModeToggle />
            <UserButton afterSwitchSessionUrl='/'/>
        </div>
    </header>
  )
}

export default Header
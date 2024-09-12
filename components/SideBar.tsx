'use client'
import { routes } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'

const SideBar = () => {

    const pathName = usePathname()
    const router = useRouter()

    const navigate = (url: string) => {
        return router.push(url);
    }

    return (
        <div className='space-y-4 flex flex-col h-full text-primary bg-secondary'>
            <div className='p-3 flex flex-1 justify-center'>
                <div className='space-y-2'>
                    {routes.map((route) => (
                        <div
                            onClick={() => navigate(route.href)}
                            key={route.href}
                            className={cn(
                                'text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition-all',
                                pathName === route.href && 'bg-primary/10 text-primary'
                            )}
                        >
                            <div className='flex flex-col gap-y-2 items-center flex-1'>
                                <route.icon className='h-5 w-5'/>
                                {route.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideBar
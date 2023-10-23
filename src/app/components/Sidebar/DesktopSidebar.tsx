'use client'
import { HomeIcon, FormIcon } from '@/app/icons'
import React, { useRef } from 'react'

const DesktopSidebar = () => {
    const sidebarRef = useRef(null)
    return (
        <aside
            id="desktopSidebar"
            ref={sidebarRef}
            className="z-30 flex-shrink-0 hidden w-64 h-screen pt-8 overflow-y-auto bg-white dark:bg-gray-800 lg:block"
        >
            <div className="text-gray-500 dark:text-gray-400">
                <ul>
                    <li className='relative px-6 py-3'>
                        <a href="/dashboard" className='inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100'>
                            <HomeIcon width={20} height={20} />
                            <span className='ml-4'>Dashboard</span>
                        </a>
                    </li>
                    <li className='relative px-6 py-3'>
                        <a href="/profiles" className='inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100'>
                            <FormIcon width={20} height={20} />
                            <span className='ml-4'>Profiles</span>
                        </a>
                    </li>
                </ul>
                <div className="px-6 my-6">
                    <button className='inline-flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-white align-bottom transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg cursor-pointer focus:outline-none active:bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-300' type='button'>
                        Create profile
                        <span className="ml-2" aria-hidden="true">
                            +
                        </span>
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default DesktopSidebar
'use client'
import { UserButton } from '@clerk/nextjs';
import { Popover } from '@headlessui/react'
import {
    SearchIcon,
    MoonIcon,
    SunIcon,
    BellIcon,
} from '@/app/icons'
import { ThemeContext } from '@/app/context/ThemeContext'
import { useContext } from 'react';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
            <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                {/* <!-- Mobile hamburger --> */}
                <button
                    className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
                    aria-label="Menu"
                >
                </button>
                {/* <!-- Search input --> */}
                <div className="flex justify-center flex-1 lg:mr-32">
                    <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                        <div className="absolute inset-y-0 flex items-center pl-2">
                            <SearchIcon className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <input
                            className="block w-full pl-8 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-9 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700"
                            type="text"
                            placeholder="Search for profiles"
                            aria-label="Search"
                            data-form-type
                        />
                    </div>
                </div>
                <ul className="flex items-center flex-shrink-0 space-x-6">
                    {/* <!-- Theme toggler --> */}
                    <li className="flex">
                        <button
                            className="rounded-md focus:outline-none focus:shadow-outline-purple"
                            aria-label="Toggle color mode"
                            onClick={toggleTheme}
                        >
                            {theme === 'light' ? <MoonIcon className="w-5 h-5" aria-hidden="true" /> : <SunIcon className="w-5 h-5" aria-hidden="true" />}
                        </button>

                    </li>
                    {/* <!-- Notifications menu --> */}
                    <li className="relative">
                        <Popover className="relative">
                            <Popover.Button className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple">
                                <BellIcon className="w-5 h-5" aria-hidden="true" />
                                {/* <!-- Notification badge --> */}
                                <span
                                    aria-hidden="true"
                                    className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                                ></span>
                            </Popover.Button>

                            <Popover.Panel className="absolute right-0 z-10 w-56 p-2 mt-2 text-gray-600 bg-white border border-gray-100 rounded-lg shadow-md min-w-max-content dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700">
                                <div className="grid grid-cols-1">
                                    <a href="/analytics" className='inline-flex items-center justify-between w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md cursor-pointer hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200'>
                                        Analytics
                                        <span className="inline-flex items-center px-2 text-xs font-medium leading-5 text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">13</span>
                                    </a>
                                    <a href="/engagement">Engagement</a>
                                    <a href="/security">Security</a>
                                    <a href="/integrations">Integrations</a>
                                </div>

                            </Popover.Panel>
                        </Popover>
                    </li>
                    {/* <!-- Profile menu --> */}
                    <li className="relative flex">
                        <UserButton afterSignOutUrl='/' />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
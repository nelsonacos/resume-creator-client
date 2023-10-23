"use client"
import { useState } from 'react';
import { Disclosure } from '@headlessui/react'
import { DropdownIcon } from '@/app/icons'
import { type Language } from '@/app/components/Resume/types'
import { useResume } from '@/app/components/Resume'

const LanguageForm = ({ language }: { language: Language }) => {
    const [item, setItem] = useState(language);
    const { handleInputChange } = useResume();
    return (
        <div className='mt-2 border rounded-md dark:border-gray-800'>
            <Disclosure>
                <Disclosure.Button className="flex items-center justify-between w-full px-3 py-2 dark:text-white">
                    <div className='flex flex-col items-start text-sm'>
                        <h4>{item.name}</h4>
                        <span className='text-xs dark:text-gray-500'>{item.proficiency}</span>
                    </div>
                    <DropdownIcon />
                </Disclosure.Button>
                <Disclosure.Panel className="pb-4">
                    <form action="">
                        <div className='flex'>
                            <div className='w-1/2 mx-4 mt-2'>
                                <label htmlFor={`name-${item.id}`} className='text-xs'>Name</label>
                                <input id={`name-${item.id}`} name="name" value={item.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof Language, e.target.value, setItem)} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='text'></input>
                            </div>
                            <div className='w-1/2 mx-4 mt-2'>
                                <label htmlFor={`proficiency-${item.id}`} className='text-xs'>Proficiency</label>
                                <select id={`proficiency-${item.id}`} name="proficiency" value={item.proficiency} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange(e.target.name as keyof Language, e.target.value, setItem)} className='block w-full px-4 mt-1 text-sm leading-5 border-gray-300 rounded-md h-7 dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:ring focus:ring-purple-300 dark:focus:ring-gray-300 dark:focus:border-gray-600'>
                                    <option value="nativo">Nativo</option>
                                    <option value="principiante">Principiante</option>
                                    <option value="basico">Basico</option>
                                    <option value="avanzado">Avanzado</option>
                                    <option value="fluido">Fluido</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </Disclosure.Panel>
            </Disclosure>
        </div>
    )
}

export default LanguageForm
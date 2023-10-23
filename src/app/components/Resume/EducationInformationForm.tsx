"use client"
import { useState } from 'react';
import { Disclosure } from '@headlessui/react'
import { DropdownIcon } from '@/app/icons'
import { type EducationInformation } from '@/app/components/Resume/types'
import { useResume } from '@/app/components/Resume'

const EducationInformationForm = ({ education }: { education: EducationInformation }) => {
    const [item, setItem] = useState(education);
    const { handleInputChange } = useResume();
    return (
        <div className='mt-2 border rounded-md dark:border-gray-800'>
            <Disclosure>
                <Disclosure.Button className="flex items-center justify-between w-full px-3 py-2 dark:text-white">
                    <div className='flex flex-col items-start text-sm'>
                        <h4>{item.degree} en {item.institution}</h4>
                        <span className='text-xs dark:text-gray-500'>{item.start_date} - {item.end_date}</span>
                    </div>
                    <DropdownIcon />
                </Disclosure.Button>
                <Disclosure.Panel className="pb-4">
                    <form action="">
                        <div className='flex'>
                            <div className='w-1/2 mx-4 mt-2'>
                                <label htmlFor={`institution-${item.id}`} className='text-xs'>Institution</label>
                                <input id={`institution-${item.id}`} name="institution" value={item.institution} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof EducationInformation, e.target.value, setItem)} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='text'></input>
                            </div>
                            <div className='w-1/2 mx-4 mt-2'>
                                <label htmlFor={`degree-${item.id}`} className='text-xs'>Degree</label>
                                <input id={`degree-${item.id}`} name="degree" value={item.degree} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof EducationInformation, e.target.value, setItem)} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='text'></input>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-1/2 mx-4 mt-2'>
                                <label htmlFor={`start-date-${item.id}`} className='text-xs'>Start Date </label>
                                <input id={`start-date-${item.id}`} name="start_date" value={item.start_date} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof EducationInformation, e.target.value, setItem)} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='date'></input>
                            </div>
                            <div className='w-1/2 mx-4 mt-2'>
                                <label htmlFor={`end-date-${item.id}`} className='text-xs'>End Date </label>
                                <input id={`end-date-${item.id}`} name="end_date" value={item.end_date} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof EducationInformation, e.target.value, setItem)} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='date'></input>
                            </div>
                        </div>
                    </form>
                </Disclosure.Panel>
            </Disclosure>
        </div >
    )
}

export default EducationInformationForm
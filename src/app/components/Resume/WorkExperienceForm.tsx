"use client"
import { useState } from 'react';
import { Disclosure } from '@headlessui/react'
import { DropdownIcon } from '@/app/icons'
import { type WorkExperience } from '@/app/components/Resume/types'
import { useResume } from '@/app/components/Resume'

const WorkExpirenceForm = ({ work }: { work: WorkExperience }) => {
    const [item, setItem] = useState(work);
    const { handleInputChange } = useResume()
    return (
        <div className='mt-2 border rounded-md dark:border-gray-800' >
            <Disclosure>
                <Disclosure.Button className="flex items-center justify-between w-full px-3 py-2 dark:text-white">
                    <div className='flex flex-col items-start text-sm'>
                        <h4>{item.position} en {item.company}</h4>
                        <span className='text-xs dark:text-gray-500'>{item.start_date} - {item.end_date}</span>
                    </div>
                    <DropdownIcon />
                </Disclosure.Button>
                <Disclosure.Panel className="pb-4">
                    <form action="">
                        <div className='flex'>
                            <div className='w-1/2 mx-4 mt-2'>
                                <label htmlFor={`company-${item.id}`} className='text-xs dark:text-white'>Company</label>
                                <input id={`company-${item.id}`} name="company" value={item.company} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof WorkExperience, e.target.value, setItem)} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='text'></input>
                            </div>
                            <div className='w-1/2 mx-4 mt-2'>
                                <label htmlFor={`position-${item.id}`} className='text-xs dark:text-white'>Position </label>
                                <input id={`position-${item.id}`} name="position" value={item.position} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof WorkExperience, e.target.value, setItem)} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='text'></input>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-1/2 mx-4 mt-2'>
                                <label htmlFor={`start_date-${item.id}`} className='text-xs dark:text-white'>Start Date </label>
                                <input id={`start_date-${item.id}`} name="start_date" value={item.start_date} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof WorkExperience, e.target.value, setItem)} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='date'></input>
                            </div>
                            <div className='w-1/2 mx-4 mt-2'>
                                <label htmlFor={`end_date-${item.id}`} className='text-xs dark:text-white'>End Date </label>
                                <input id={`end_date-${item.id}`} name="end_date" value={item.end_date} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof WorkExperience, e.target.value, setItem)} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='date'></input>
                            </div>
                        </div>
                        <div className='mx-4 mt-2'>
                            <label htmlFor={`companyDescription-${item.id}`} className='text-xs dark:text-white'>Company Description </label>
                            <input id={`companyDescription-${item.id}`} name="company_description" value={item.company_description} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof WorkExperience, e.target.value, setItem)} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='text'></input>
                        </div>
                        <div className='mx-4 mt-2'>
                            <label htmlFor={`responsibility-${item.id}`} className='text-xs dark:text-white'>Responsibility </label>
                            <input id={`responsibility-${item.id}`} name="responsibility" value={item.responsibility} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof WorkExperience, e.target.value, setItem)} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='text'></input>
                        </div>
                        <div className='mx-4 mt-2'>
                            <label htmlFor={`achievements-${item.id}`} className='text-xs dark:text-white'>Achievements </label>
                            <input id={`achievements-${item.id}`} name="achievements" value={item.achievements} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof WorkExperience, e.target.value, setItem)} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='text'></input>
                        </div>
                        <div className='mx-4 mt-2'>
                            <label htmlFor={`skills-${item.id}`} className='text-xs dark:text-white'>Skills </label>
                            <input id={`skills-${item.id}`} name="skills" value={item.skills} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof WorkExperience, e.target.value, setItem)} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='text'></input>
                        </div>
                    </form>
                </Disclosure.Panel>
            </Disclosure>
        </div>
    )
}

export default WorkExpirenceForm
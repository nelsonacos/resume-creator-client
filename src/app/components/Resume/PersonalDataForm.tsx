"use client"
import { useState } from 'react'
import { type PersonalData } from '@/app/components/Resume/types'
import { useResume } from '@/app/components/Resume'

const PersonalDataForm = ({ personalData }: { personalData: PersonalData }) => {
    const [profile, setProfile] = useState(personalData);
    const { handleInputChange } = useResume()
    return (
        <div>
            <form>
                <div className='flex'>
                    <div className='w-1/2 mx-4 mt-2'>
                        <label htmlFor="first_name" className='text-xs dark:text-white'>First Name</label>
                        <input id="first_name" name="first_name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof PersonalData, e.target.value, setProfile)} value={profile.first_name} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='text'></input>
                    </div>
                    <div className='w-1/2 mx-4 mt-2'>
                        <label htmlFor="last_name" className='text-xs dark:text-white'>Last Name</label>
                        <input id="last_name" name="last_name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof PersonalData, e.target.value, setProfile)} value={profile.last_name} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='text'></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PersonalDataForm
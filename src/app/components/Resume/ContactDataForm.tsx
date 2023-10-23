"use client"
import { useState } from 'react'
import { type ContactData } from '@/app/components/Resume/types'
import { useResume } from '@/app/components/Resume'

const ContactDataForm = ({ contactData }: { contactData: ContactData }) => {
    const [profile, setProfile] = useState(contactData);
    const { handleInputChange } = useResume();
    return (
        <div className='mt-4'>
            <h3 className='text-sm font-medium dark:text-white'>Contact Data</h3>
            <form action="">
                <div className='flex w-full'>
                    <div className='w-1/2 mx-4 mt-2'>
                        <label htmlFor="email" className='text-xs dark:text-white'>Email</label>
                        <input id='email' name="email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof ContactData, e.target.value, setProfile)} value={profile.email} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='email'></input>
                    </div>
                    <div className='w-1/2 mx-4 mt-2'>
                        <label htmlFor="phone_number" className='text-xs dark:text-white'>Phone</label>
                        <input id='phone_number' name="phone_number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof ContactData, e.target.value, setProfile)} value={profile.phone_number} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='tel'></input>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2 mx-4 mt-2'>
                        <label htmlFor="linkedin" className='text-xs dark:text-white'>Linkedin</label>
                        <input id='linkedin' name="linkedin" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof ContactData, e.target.value, setProfile)} value={profile.linkedin} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='url'></input>
                    </div>
                    <div className='w-1/2 mx-4 mt-2'>
                        <label htmlFor="github" className='text-xs dark:text-white'>Github</label>
                        <input id='github' name="github" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof ContactData, e.target.value, setProfile)} value={profile.github} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='url'></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactDataForm
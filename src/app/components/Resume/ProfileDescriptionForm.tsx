"use client"
import { useState } from 'react'
import { type ProfileDescription } from '@/app/components/Resume/types'
import { useResume } from '@/app/components/Resume'

const ProfileDescriptionForm = ({ profileDescription }: { profileDescription: ProfileDescription }) => {
    const [profile, setProfile] = useState(profileDescription);
    const { handleInputChange } = useResume();
    return (
        <div className='mt-4'>
            <h3 className='text-sm font-medium dark:text-white'>Profile Description</h3>
            <form action="">
                <div className='mx-4 mt-2'>
                    <label htmlFor="summary" className='text-xs dark:text-white'>Description</label>
                    <textarea id="summary" name="summary" onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange(e.target.name as keyof ProfileDescription, e.target.value, setProfile)} value={profile.summary} className='block w-full px-4 py-2 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-36 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' placeholder="+4 years as a Developer with experience in modern web applications. competent in ..."></textarea>
                </div>
            </form>
        </div>
    )
}

export default ProfileDescriptionForm
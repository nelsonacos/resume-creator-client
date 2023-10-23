"use client"
import { useState } from 'react'
import Image from "next/image"
import { EditIcon, TrashIcon } from '@/app/icons'
import { type Profile } from '@/app/components/Resume/types'
import { useResume } from '@/app/components/Resume'

const DEFAULT_PROFILE_IMAGE = 'https://randomuser.me/api/portraits/men/75.jpg';

const ProfileForm = ({ profileData }: { profileData: Profile }) => {
    const [profile, setProfile] = useState(profileData);
    const { handleInputChange, deleteProfilePhoto } = useResume();
    return (
        <div>
            <h3 className='text-sm font-medium dark:text-white'>Profile</h3>
            <form>
                <div className='flex'>
                    <div className='w-1/2 mx-4 mt-2'>
                        <label htmlFor="title" className='text-xs dark:text-white'>Wanted Job Title</label>
                        <input id="title" name="title" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.name as keyof Profile, e.target.value, setProfile)} value={profile.title} className='block w-full px-4 py-3 mt-1 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md h-7 focus:outline-none dark:text-gray-300 focus:border-purple-400 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700' type='text'></input>
                    </div>
                    <div className='flex w-1/2 mx-4 mt-2'>
                        <div className='w-[60px] aspect-[1/1] object-cover'>
                            <Image
                                src={`${profile.photo_url ?? DEFAULT_PROFILE_IMAGE}`}
                                alt="Imagen de perfil"
                                width={60}
                                height={60}
                            />
                        </div>
                        <div className='flex flex-col justify-center gap-1 ml-2 text-sm dark:text-white'>
                            <button className='flex items-center w-full gap-2 hover:text-purple-600'>
                                <EditIcon className='text-lg' />
                                Edit photo
                            </button>
                            <button
                                type='button'
                                onClick={deleteProfilePhoto}
                                className='flex items-center w-full gap-2 dark:text-gray-500 hover:text-red-500'
                            >
                                <TrashIcon className='text-lg' />
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProfileForm
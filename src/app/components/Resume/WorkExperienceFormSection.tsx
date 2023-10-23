import { PlusIcon } from '@/app/icons'
import { WorkExperienceForm } from '@/app/components/Resume'
import { type WorkExperience } from './types'

const WorkExperienceFormSection = ({ workExperiences }:
    { workExperiences: WorkExperience[] }) => {
    return (
        <div className='mt-4'>
            <h3 className='text-sm font-medium dark:text-white'>Work Experience</h3>
            {workExperiences && workExperiences.map((item: WorkExperience) => (
                <WorkExperienceForm key={item.id} work={item} />
            ))
            }
            <div className='flex items-center justify-center w-full mt-2'>
                <button className='flex items-center justify-center bg-gray-600 border rounded-full w-9 h-9 dark:bg-gray-700'>
                    <PlusIcon fill='white' className='text-xs' />
                </button>
            </div>
        </div >
    )
}

export default WorkExperienceFormSection
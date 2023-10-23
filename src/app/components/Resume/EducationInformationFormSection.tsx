import { PlusIcon } from '@/app/icons'
import { EducationInformationForm } from '@/app/components/Resume'
import { type EducationInformation } from '@/app/components/Resume/types'

const EducationInformationFormSection = ({ educationInformation }:
    { educationInformation: EducationInformation[] }) => {
    return (
        <div className='mt-4'>
            <h3 className='text-sm font-medium'>Education Information</h3>
            {educationInformation && educationInformation.map((item: EducationInformation) => (
                <EducationInformationForm key={item.id} education={item} />
            ))}
            <div className='flex items-center justify-center mt-2'>
                <button className='flex items-center justify-center bg-gray-600 border rounded-full w-9 h-9 dark:bg-gray-700'>
                    <PlusIcon fill='white' className='text-xs' />
                </button>
            </div>
        </div>
    )
}

export default EducationInformationFormSection
import { PlusIcon } from '@/app/icons'
import { LanguageForm } from '@/app/components/Resume'
import { type Language } from '@/app/components/Resume/types.d'

const LanguageFormSection = ({ languages }: { languages: Language[] }) => {
    return (
        <div className='mt-4'>
            <h3 className='text-sm font-medium'>Language</h3>
            {languages && languages.map((item: Language) => (
                <LanguageForm key={item.id} language={item} />
            ))}
            <div className='flex items-center justify-center w-full mt-2'>
                <button className='flex items-center justify-center bg-gray-600 border rounded-full w-9 h-9 dark:bg-gray-700'>
                    <PlusIcon fill='white' className='text-xs' />
                </button>
            </div>
        </div>
    )
}

export default LanguageFormSection
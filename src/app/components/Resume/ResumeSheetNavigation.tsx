import { DropdownIcon } from '@/app/icons'

const ResumeSheetNavigation = () => {
    return (
        <div className='flex gap-2'>
            <button>
                <DropdownIcon className='text-sm rotate-90' />
            </button>
            <span>1/2</span>
            <button>
                <DropdownIcon className='rotate-[270deg] text-sm' />
            </button>
        </div>
    )
}

export default ResumeSheetNavigation
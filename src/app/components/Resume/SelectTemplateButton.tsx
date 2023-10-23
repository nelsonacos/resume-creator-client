import { SelectIcon } from '@/app/icons'

const SelectTemplateButton = () => {
    return (
        <button className='inline-flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium leading-5 text-white align-bottom transition-colors duration-150 border border-white rounded-lg cursor-pointer dark:border-white focus:outline-none dark:text-white active:bg-transparent hover:border-gray-300 hover:text-gray-300 focus:border-gray-500 active:text-gray-500 focus:ring focus:ring-gray-300'>
            <SelectIcon />
            Select template
        </button>
    )
}

export default SelectTemplateButton
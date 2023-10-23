import Image from "next/image"
import { Badge } from '@/app/components/Ui'
import { EditIcon, TrashIcon } from '@/app/icons'

const ProfileViewInTable = () => {
    return (
        <tbody className='text-gray-700 bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400'>
            <tr>
                <th scope="row" className="px-4 py-3">
                    <div className="flex items-center text-sm">
                        <div className="relative inline-block w-8 h-8 mr-3 rounded-full md:block">
                            <Image className="object-cover w-full h-full rounded-full" src="https://randomuser.me/api/portraits/men/64.jpg" width={50} height={50} alt="User avatar" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true">
                            </div>
                        </div>
                        <div className='text-left'>
                            <p className="font-semibold">Chandler Jacobi</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Direct Security Executive</p>
                        </div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <Badge
                            badgeContent='completed'
                            max={99}
                            color='red-600'
                            showZero={true}
                        >

                        </Badge>
                    </div>
                </td>
                <td className="px-4 py-3">
                    <span className="text-sm">03-02-2020</span>
                </td>
                <td className="px-4 py-3">
                    <span className="text-sm">03-02-2020</span>
                </td>
                <td className="px-4 py-3">
                    <div className="flex items-center space-x-4">
                        <button className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium leading-5 text-gray-600 align-bottom transition-colors duration-150 border border-transparent rounded-md cursor-pointer focus:outline-none dark:text-gray-400 active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10" type="button" aria-label="Edit">
                            <EditIcon width={20} height={20} />
                        </button>
                        <button className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium leading-5 text-gray-600 align-bottom transition-colors duration-150 border border-transparent rounded-md cursor-pointer focus:outline-none dark:text-gray-400 active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10" type="button" aria-label="Delete">
                            <TrashIcon width={20} height={20} />
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    )
}

export default ProfileViewInTable
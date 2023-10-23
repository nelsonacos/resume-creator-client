import { Pagination } from '@/app/components/Ui'
import { ProfileViewInTable } from '@/app/components/Resume'


const ProfilesPage = () => {
    return (
        <>
            <h2 className='my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>Profiles</h2>

            <div className="w-full mb-8 overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5">
                <div className='w-full overflow-x-auto'>
                    <table className="w-full whitespace-nowrap">
                        <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="px-4 py-3">
                                    Profile
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    Created
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    Updated
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <ProfileViewInTable />
                    </table>
                </div>
                <div className="px-4 py-3 text-gray-500 border-t dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <Pagination />
                </div>
            </div>
        </>
    )
}

export default ProfilesPage
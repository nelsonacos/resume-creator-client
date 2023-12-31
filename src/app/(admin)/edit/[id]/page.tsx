import { ResumeSheet, ResumeSheetForm, SelectTemplateButton, DownloadPdfButton, MoreActionsButton, ResumeStatusView, ResumeSheetNavigation } from '@/app/components/Resume'
import { getProfileById } from '@/app/components/Resume/services'

interface Params {
    id: string;
}

const ProfilePage = async ({ params }: { params: Params }) => {
    const profile = await getProfileById(parseInt(params.id))
    return (
        <div className="grid grid-cols-2 gap-1">
            <div className='w-full p-10'>
                <ResumeSheetForm {...profile} />
            </div>
            <div className='relative py-6 bg-gray-600 dark:bg-gray-900'>
                <div className='fixed'>
                    <div className='flex items-center justify-around w-full'>
                        <SelectTemplateButton />
                        <div className='flex gap-3'>
                            <DownloadPdfButton />
                            <MoreActionsButton />
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-full mt-6 mb-0.5 overflow-hidden'>
                        <ResumeSheet />
                    </div>
                    <div className='flex items-center justify-around px-4 text-xs text-white dark:text-white'>
                        <ResumeStatusView />
                        <ResumeSheetNavigation />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage
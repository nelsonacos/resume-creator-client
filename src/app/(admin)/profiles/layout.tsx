import Header from '@/app/components/Header'
import { DesktopSidebar } from '@/app/components/Sidebar'

const DashboardLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='h-srceen'>
            <Header />
            <div className='flex w-full'>
                <DesktopSidebar />
                <main className=''>
                    <div className="container grid px-6 mx-auto">{children}</div>
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout
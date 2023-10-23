import { SignIn } from "@clerk/nextjs";
import Logo from '@/app/icons/logo'

export default function SignInPage() {
    return (
        <main className="grid grid-cols-2">
            <div className="flex flex-col items-center justify-center w-full h-screen">
                <Logo className="mb-4" />
                <SignIn />
            </div>
            <div className="flex flex-col items-end justify-start w-full h-screen bg-[#bfdbfe]">
                <div className="w-2/4">
                    <h3 className="pt-10 text-[#171722] text-lg font-medium">
                        Find a job now
                    </h3>
                    <p className="pt-4 pr-8 text-right text-[#7E848C] font-medium" >
                        Looking for a job is complicated but it shouldn`&apos;`t be
                    </p>
                </div>
            </div>
        </main>
    )
}
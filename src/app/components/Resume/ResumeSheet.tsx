import { Profile, ContactData, ProfileDescription, WorkExperience, EducationInformation, Language } from '.'

const ResumeSheet = () => {
    return (
        <div className='text-xs border dark:border-none bg-white dark:bg-gray-700 leading-tight dark:text-gray-300 rounded p-4 w-[58%] aspect-[8.5/11] overflow-hidden'>
            <Profile />
            <ContactData />
            <ProfileDescription />
            <WorkExperience />
            <EducationInformation />
            <Language />
        </div>
    )
}

export default ResumeSheet
import { ProfileForm, PersonalDataForm, ContactDataForm, ProfileDescriptionForm, WorkExperienceFormSection, EducationInformationFormSection, LanguageFormSection } from "."
import { type Profile } from './types'

const ResumeSheetForm = (props: Profile) => {
    return (
        <>
            <ProfileForm profileData={props} />
            <PersonalDataForm personalData={props.personal_data} />
            <ContactDataForm contactData={props.contact_data} />
            <ProfileDescriptionForm profileDescription={props.profile_description} />
            <WorkExperienceFormSection workExperiences={props.work_experiences} />
            <EducationInformationFormSection educationInformation={props.education_information} />
            <LanguageFormSection languages={props.languages} />
        </>
    )
}

export default ResumeSheetForm
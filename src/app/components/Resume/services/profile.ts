import {type Profile} from '@/app/components/Resume/types'
import { API_BASE_URL } from '@/app/components/Resume'
import { createPersonalData, createContactData, createProfileDescription, createWorkExperience, createEducationInformation, createLanguage } from '@/app/components/Resume/services'
  
export const createProfile = async (): Promise<number> => {
    const defaultProfileData = {
      title: 'Engineer', // Default Title
    };
  
    try {
      const response = await fetch(`${API_BASE_URL}/resume/api/v1/profiles/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(defaultProfileData),
      });
  
      if (!response.ok) {
        // Handle API errors
        throw new Error(`Error al crear el perfil: ${response.statusText}`);
      }
  
      const data: Profile = await response.json();
      return data.id;
    } catch (error) {
      if (error instanceof Error) {
        // Type checking for 'error'
            throw new Error(`Error: ${error.message}`);
        } else {
        // Handle other error types here
            throw new Error(`Error: ${error}`);
        }
    }
};

export const startProfile = async () => {
    try {
        const profileId = await createProfile();
        await createPersonalData(profileId);
        await createContactData(profileId);
        await createProfileDescription(profileId);
        await createWorkExperience(profileId);
        await createEducationInformation(profileId);
        await createLanguage(profileId);
        return profileId;
    } catch (error) {
        console.error('Error al crear el perfil:', error);
    }
}
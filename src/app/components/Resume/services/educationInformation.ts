import { EducationInformation } from '@/app/components/Resume/types';
import { API_BASE_URL } from '@/app/components/Resume'

export const createEducationInformation = async (profileId: number): Promise<EducationInformation> => {
  const dataRequired = {
    profile_id: profileId,
  };

  try {
    const response = await fetch(`${API_BASE_URL}/resume/api/v1/education-information/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataRequired),
    });

    if (!response.ok) {
      // Handle API errors
      throw new Error(`Error al crear datos personales: ${response.statusText}`);
    }

    const educationInformation: EducationInformation = await response.json();
    return educationInformation;
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
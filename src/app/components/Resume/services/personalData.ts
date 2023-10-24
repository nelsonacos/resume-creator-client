import { PersonalData } from '@/app/components/Resume/types';
import { API_BASE_URL } from '@/app/components/Resume'

export const createPersonalData = async (profileId: number): Promise<PersonalData> => {
  const dataRequired = {
    profile_id: profileId,
  };

  try {
    const response = await fetch(`${API_BASE_URL}/resume/api/v1/personal-data/`, {
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

    const personalData: PersonalData = await response.json();
    return personalData;
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
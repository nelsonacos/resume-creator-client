import { WorkExperience } from '@/app/components/Resume/types';
import { API_BASE_URL } from '@/app/components/Resume'

export const createWorkExperience = async (profileId: number): Promise<WorkExperience> => {
  const dataRequired = {
    profile_id: profileId,
    achievements: [
        "achievement 1",
        "achievement 2",
        "achievement 3",
    ],
    skills: [
        "skill 1",
        "skill 2",
        "skill 3",
    ],
  };

  try {
    const response = await fetch(`${API_BASE_URL}/resume/api/v1/work-experiences/`, {
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

    const workExperience: WorkExperience = await response.json();
    return workExperience;
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
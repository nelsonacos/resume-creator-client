export interface Profile {
  id:                    number;
  photo_url:             string;
  title:                 string;
  personal_data:         PersonalData;
  contact_data:          ContactData;
  profile_description:   ProfileDescription;
  work_experiences:      WorkExperience[];
  education_information: EducationInformation[];
  languages:             Language[];
}

export interface ContactData {
  id:           number;
  profile_id:   number;
  phone_number: string;
  email:        string;
  website:      string;
  linkedin:     string;
  github:       string;
}

export interface EducationInformation {
  id:          number;
  profile_id:  number;
  degree:      string;
  institution: string;
  start_date:  string;
  end_date:    string;
  description: string;
}

export interface Language {
  id:          number;
  profile_id:  number;
  name:        string;
  proficiency: string;
}

export interface PersonalData {
  id:            number;
  profile_id:    number;
  first_name:    string;
  last_name:     string;
  date_of_birth: string;
  address:       string;
}

export interface ProfileDescription {
  id:         number;
  profile_id: number;
  summary:    string;
}

export interface WorkExperience {
  id:                  number;
  profile_id:          number;
  company:             string;
  company_description: string;
  position:            string;
  start_date:          string;
  end_date:            string;
  responsibility:      string;
  achievements:        string[];
  skills:              string[];
}
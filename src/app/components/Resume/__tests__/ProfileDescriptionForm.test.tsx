import { render, screen, fireEvent } from '@testing-library/react';
import { ProfileDescriptionForm } from '@/app/components/Resume'
import profileDataMock from '@/app/components/Resume/__mocks__/sample-profiles.json'

const profile = profileDataMock[0]

describe('Tests in <PersonalDataForm />', () => {
    beforeEach(() => {
        render(
            <ProfileDescriptionForm
                profileDescription={profile.profile_description}
            />
        );
    });

    it('Renders the component with initial values', () => {
        const descriptionInput = screen.getByLabelText('Description');

        expect(descriptionInput).toBeInTheDocument();
        expect(screen.getByDisplayValue('Passionate Full Stack developer with experience in Django and React.')).toBeInTheDocument();
    });

    it('Updates when input fields change', () => {
        const descriptionInput = screen.getByLabelText('Description');
        fireEvent.change(descriptionInput, { target: { value: '+4 years as a Developer with experience in modern web applications. Proficient in the node.js ecosystem I have a solid understanding of microservices-based architecture and extensive experience working with Linux systems. I am able to effectively self-manage during independent projects and also collaborate as part of a productive team.' } });

        expect(descriptionInput).toHaveValue('+4 years as a Developer with experience in modern web applications. Proficient in the node.js ecosystem I have a solid understanding of microservices-based architecture and extensive experience working with Linux systems. I am able to effectively self-manage during independent projects and also collaborate as part of a productive team.');
    });
})
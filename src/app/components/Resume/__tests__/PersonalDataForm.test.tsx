import { render, screen, fireEvent } from '@testing-library/react';
import { PersonalDataForm } from '@/app/components/Resume'
import profileDataMock from '@/app/components/Resume/__mocks__/sample-profiles.json'

const profile = profileDataMock[0]

describe('Tests in <PersonalDataForm />', () => {
    beforeEach(() => {
        render(
            <PersonalDataForm personalData={profile.personal_data} />
        );
    });

    it('Renders the component with initial values', () => {
        const firstNameInput = screen.getByLabelText('First Name');
        const lastNameInput = screen.getByLabelText('Last Name');

        expect(firstNameInput).toBeInTheDocument();
        expect(lastNameInput).toBeInTheDocument();

        expect(screen.getByDisplayValue('Nelson G')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Acosta M')).toBeInTheDocument();
    });

    it('Updates when input fields change', () => {
        const firstNameInput = screen.getByLabelText('First Name');
        const lastNameInput = screen.getByLabelText('Last Name');

        fireEvent.change(firstNameInput, { target: { value: 'Nelson Gustavo' } });
        fireEvent.change(lastNameInput, { target: { value: 'Acosta Montes de oca' } });

        expect(firstNameInput).toHaveValue('Nelson Gustavo');
        expect(lastNameInput).toHaveValue('Acosta Montes de oca');
    });
})
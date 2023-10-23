import { render, screen, fireEvent } from '@testing-library/react';
import { ContactDataForm } from '@/app/components/Resume'
import profileDataMock from '@/app/components/Resume/__mocks__/sample-profiles.json'

const profile = profileDataMock[0]

describe('Tests in <PersonalDataForm />', () => {
    beforeEach(() => {
        render(
            <ContactDataForm contactData={profile.contact_data} />
        );
    });

    it('Renders the component with initial values', () => {
        const emailInput = screen.getByLabelText('Email');
        const phoneInput = screen.getByLabelText('Phone');
        const linkedinInput = screen.getByLabelText('Linkedin');
        const githubInput = screen.getByLabelText('Github');

        expect(emailInput).toBeInTheDocument();
        expect(phoneInput).toBeInTheDocument();
        expect(linkedinInput).toBeInTheDocument();
        expect(githubInput).toBeInTheDocument();

        expect(screen.getByDisplayValue('nelson@example.com')).toBeInTheDocument();
        expect(screen.getByDisplayValue('123-456-7890')).toBeInTheDocument();
        expect(screen.getByDisplayValue('https://linkedin.com/in/desarrolladorpython')).toBeInTheDocument();
        expect(screen.getByDisplayValue('https://github.com/nelsonacos')).toBeInTheDocument();
    });

    it('Updates when input fields change', () => {
        const emailInput = screen.getByLabelText('Email');
        const phoneInput = screen.getByLabelText('Phone');
        const linkedinInput = screen.getByLabelText('Linkedin');
        const githubInput = screen.getByLabelText('Github');

        fireEvent.change(emailInput, { target: { value: 'nelson.acosta@example.com' } });
        fireEvent.change(phoneInput, { target: { value: '123-456-6578' } });
        fireEvent.change(linkedinInput, { target: { value: 'https://linkedin.com/in/nelsonacos' } });
        fireEvent.change(githubInput, { target: { value: 'https://github.com/nelsonacosta' } });

        expect(emailInput).toHaveValue('nelson.acosta@example.com');
        expect(phoneInput).toHaveValue('123-456-6578');
        expect(linkedinInput).toHaveValue('https://linkedin.com/in/nelsonacos');
        expect(githubInput).toHaveValue('https://github.com/nelsonacosta');
    });
})
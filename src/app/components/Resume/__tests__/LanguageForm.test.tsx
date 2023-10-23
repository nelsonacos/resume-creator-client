import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageForm } from '@/app/components/Resume'
import profileDataMock from '@/app/components/Resume/__mocks__/sample-profiles.json'

const profile = profileDataMock[0]
const item = profile.languages[0]

describe('Tests in <LanguageForm />', () => {
    beforeEach(() => {
        render(
            <LanguageForm
                key={item.id}
                language={item}
            />
        );
        // Verify that the panel is initially closed
        expect(screen.queryByText(/Name/i)).toBeNull();
        // Open the panel
        const disclosureButton = screen.getByRole('button', { name: /Spanish/i });
        fireEvent.click(disclosureButton);
    });

    it('Renders the component with initial values', () => {
        const nameInput = screen.getByLabelText('Name');
        const proficiencyInput = screen.getByLabelText('Proficiency');

        expect(nameInput).toBeInTheDocument();
        expect(proficiencyInput).toBeInTheDocument();

        expect(screen.getByDisplayValue('Spanish')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Nativo')).toBeInTheDocument();
    });

    it('Updates when input fields change', () => {
        const nameInput = screen.getByLabelText('Name');
        const proficiencyInput = screen.getByLabelText('Proficiency');

        fireEvent.change(nameInput, { target: { value: 'Español' } });
        fireEvent.change(proficiencyInput, { target: { value: 'avanzado' } });


        expect(nameInput).toHaveValue('Español');
        expect(proficiencyInput).toHaveValue('avanzado');
    });
})
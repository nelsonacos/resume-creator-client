import { render, screen, fireEvent } from '@testing-library/react';
import { EducationInformationForm } from '@/app/components/Resume'
import profileDataMock from '@/app/components/Resume/__mocks__/sample-profiles.json'

const profile = profileDataMock[0]
const item = profile.education_information[0]

describe('Tests in <PersonalDataForm />', () => {
    beforeEach(() => {
        render(
            <EducationInformationForm
                key={item.id}
                education={item}
            />
        );
        // Verify that the panel is initially closed
        expect(screen.queryByText(/Institution/i)).toBeNull();
        // Open the panel
        const disclosureButton = screen.getByRole('button', { name: /Bachelor of Science in Computer Engineering/i });
        fireEvent.click(disclosureButton);
    });

    it('Renders the component with initial values', () => {
        const institutionInput = screen.getByLabelText('Institution');
        const degreeInput = screen.getByLabelText('Degree');
        const startDateInput = screen.getByLabelText('Start Date');
        const endDateInput = screen.getByLabelText('End Date');

        expect(institutionInput).toBeInTheDocument();
        expect(degreeInput).toBeInTheDocument();
        expect(startDateInput).toBeInTheDocument();
        expect(endDateInput).toBeInTheDocument();

        expect(screen.getByDisplayValue('XYZ University')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Bachelor of Science in Computer Engineering')).toBeInTheDocument();
        expect(screen.getByDisplayValue('2011-09-01')).toBeInTheDocument();
        expect(screen.getByDisplayValue('2015-06-30')).toBeInTheDocument();
    });

    it('Updates when input fields change', () => {
        const institutionInput = screen.getByLabelText('Institution');
        const degreeInput = screen.getByLabelText('Degree');
        const startDateInput = screen.getByLabelText('Start Date');
        const endDateInput = screen.getByLabelText('End Date');

        fireEvent.change(institutionInput, { target: { value: 'Platzi' } });
        fireEvent.change(degreeInput, { target: { value: 'Web development' } });
        fireEvent.change(startDateInput, { target: { value: '2006-01-03' } });
        fireEvent.change(endDateInput, { target: { value: '2007-01-03' } });

        expect(institutionInput).toHaveValue('Platzi');
        expect(degreeInput).toHaveValue('Web development');
        expect(startDateInput).toHaveValue('2006-01-03');
        expect(endDateInput).toHaveValue('2007-01-03');
    });
})
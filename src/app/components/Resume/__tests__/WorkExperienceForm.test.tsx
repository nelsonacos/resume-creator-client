import { render, screen, fireEvent } from '@testing-library/react';
import { WorkExperienceForm } from '@/app/components/Resume'
import profileDataMock from '@/app/components/Resume/__mocks__/sample-profiles.json'

const profile = profileDataMock[0]
const item = profile.work_experiences[0]

describe('Tests in <PersonalDataForm />', () => {
    beforeEach(() => {
        render(
            <WorkExperienceForm
                key={item.id}
                work={item}
            />
        );
        // Verify that the panel is initially closed
        expect(screen.queryByText(/Position/i)).toBeNull();
        // Open the panel
        const disclosureButton = screen.getByRole('button', { name: /Full Stack Developer en ABC Company/i });
        fireEvent.click(disclosureButton);
    });

    it('Renders the component with initial values', () => {
        const companyInput = screen.getByLabelText('Company');
        const positionInput = screen.getByLabelText('Position');
        const startDateInput = screen.getByLabelText('Start Date');
        const endDateInput = screen.getByLabelText('End Date');
        const companyDescriptionInput = screen.getByLabelText('Company Description');
        const responsibilityInput = screen.getByLabelText('Responsibility');
        const achievementsInput = screen.getByLabelText('Achievements');
        const skillsInput = screen.getByLabelText('Skills');

        expect(companyInput).toBeInTheDocument();
        expect(positionInput).toBeInTheDocument();
        expect(startDateInput).toBeInTheDocument();
        expect(endDateInput).toBeInTheDocument();
        expect(companyDescriptionInput).toBeInTheDocument();
        expect(responsibilityInput).toBeInTheDocument();
        expect(achievementsInput).toBeInTheDocument();
        expect(skillsInput).toBeInTheDocument();

        expect(screen.getByDisplayValue('ABC Company')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Full Stack Developer')).toBeInTheDocument();
        expect(screen.getByDisplayValue('2015-07-01')).toBeInTheDocument();
        expect(screen.getByDisplayValue('2020-02-15')).toBeInTheDocument();

        expect(screen.getByDisplayValue('Software Development Company')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Developing and maintaining web applications.')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Developed a project management application.')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Django,React,JavaScript')).toBeInTheDocument();
    });

    it('Updates when input fields change', () => {
        const companyInput = screen.getByLabelText('Company');
        const positionInput = screen.getByLabelText('Position');
        const startDateInput = screen.getByLabelText('Start Date');
        const endDateInput = screen.getByLabelText('End Date');
        const companyDescriptionInput = screen.getByLabelText('Company Description');
        const responsibilityInput = screen.getByLabelText('Responsibility');
        const achievementsInput = screen.getByLabelText('Achievements');
        const skillsInput = screen.getByLabelText('Skills');

        fireEvent.change(companyInput, { target: { value: 'Catunga' } });
        fireEvent.change(positionInput, { target: { value: 'Full Stack Developer' } });
        fireEvent.change(startDateInput, { target: { value: '2006-01-03' } });
        fireEvent.change(endDateInput, { target: { value: '2020-01-03' } });
        fireEvent.change(companyDescriptionInput, { target: { value: 'IT consultant, specialized in web development' } });
        fireEvent.change(responsibilityInput, { target: { value: 'Ecommerce automation. As well as proposing suitable solutions to cover the software requirements.' } });
        fireEvent.change(achievementsInput, { target: { value: 'Developed a project management application.' } });
        fireEvent.change(skillsInput, { target: { value: 'Django, Python, React, NextJS, JavaScript, Typescript' } });

        expect(companyInput).toHaveValue('Catunga');
        expect(positionInput).toHaveValue('Full Stack Developer');
        expect(startDateInput).toHaveValue('2006-01-03');
        expect(endDateInput).toHaveValue('2020-01-03');
        expect(companyDescriptionInput).toHaveValue('IT consultant, specialized in web development');
        expect(responsibilityInput).toHaveValue('Ecommerce automation. As well as proposing suitable solutions to cover the software requirements.');
        expect(achievementsInput).toHaveValue('Developed a project management application.');
        expect(skillsInput).toHaveValue('Django, Python, React, NextJS, JavaScript, Typescript');
    });
})
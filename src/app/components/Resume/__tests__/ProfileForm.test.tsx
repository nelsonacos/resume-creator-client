import { render, screen, fireEvent } from '@testing-library/react';
import ProfileForm from '@/app/components/Resume/ProfileForm';
import profileDataMock from '@/app/components/Resume/__mocks__/sample-profiles.json'

const profile = profileDataMock[0]

describe('Tests in <ProfileForm />', () => {
  /*const deletePhotoMock = jest.fn();*/
  beforeEach(() => {
    render(
      <ProfileForm profileData={profile} />
    );
  });

  it('Renders the component with initial values', () => {
    expect(screen.getByLabelText('Wanted Job Title')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Full Stack Developer')).toBeInTheDocument();
  });

  it('Updates profile data when input fields change', () => {
    const titleInput = screen.getByLabelText('Wanted Job Title');
    fireEvent.change(titleInput, { target: { value: 'Full Stack Developer' } });

    expect(titleInput).toHaveValue('Full Stack Developer');
  });

  it('It should contain a button with the text Delete', () => {
    const deleteButton = screen.getByRole('button', { name: /Delete/i })
    expect(deleteButton).toBeInTheDocument()
  });
  /*
  it('calls deleteProfilePhoto function when the delete button is clicked', () => {
    const deleteButton = screen.getByRole('button', { name: /Delete/i })
    fireEvent.click(deleteButton);
    expect(deletePhotoMock).toHaveBeenCalled();
  });*/
});
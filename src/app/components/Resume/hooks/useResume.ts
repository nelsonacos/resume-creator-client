export const useResume = () => {
    const handleInputChange = <T, K extends keyof T>(
        name: K,
        value: T[K],
        setState: React.Dispatch<React.SetStateAction<T>>
      ) => {
        setState((prevState: T) => ({
          ...prevState,
          [name]: value,
        }));
      };
    const deleteProfilePhoto = () => {console.log('deleting foto...')}
  return {
    handleInputChange,
    deleteProfilePhoto
  }
}
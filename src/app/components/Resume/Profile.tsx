import Image from "next/image"

const Profile = () => {
    return (
        <div className="flex items-center gap-1">
            <div>
                <Image
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="Imagen de perfil"
                    width={30}
                    height={30}
                    className="ml-1 rounded-full"
                />
            </div>
            <div className='flex flex-col justify-start gap-0'>
                <h2 className="font-semibold dark:text-white">Nelson G Acosta M</h2>
                <p className='dark:text-white text-[0.4rem]'>Desarrollador Full Stack</p>
            </div>
        </div>
    )
}

export default Profile
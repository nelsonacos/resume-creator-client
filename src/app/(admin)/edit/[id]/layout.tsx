const WhiteCanvasLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='h-srceen dark:text-white'>
            <main>
                {children}
            </main>
        </div>
    )
}

export default WhiteCanvasLayout
export async function Navigation() {
    const linkStyles = 'py-2 px-8 lg:p-2 font-semibold text-xl xl:text-2xl text-gray-800 cursor-pointer hover:scale-125 duration-500'
    return (
        <nav className="flex justify-end" aria-label="Main navigation">
            <ul className="flex xl:pr-24 gap-2 xl:gap-5 pt-3 flex-wrap justify-between">
                <li className={linkStyles}><a href='#about'>About</a></li>
                <li className={linkStyles}><a href='#technologies'>Technologies</a></li>
                <li className={linkStyles}><a href='#experience'>Experience</a></li>
                <li className={linkStyles}><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    )
}
const Pagination = () => {
    return (
        <div className="flex flex-col justify-between text-xs text-gray-600 sm:flex-row dark:text-gray-400">
            <span className="flex items-center font-semibold tracking-wide uppercase">Showing 1-10 of 45</span>
            <div className="flex mt-2 sm:mt-auto sm:justify-end">
                <nav aria-label="Table navigation">
                    <ul className="inline-flex items-center">
                        <li>
                            <button className="inline-flex items-center justify-center p-2 font-medium leading-5 text-gray-600 align-bottom transition-colors duration-150 border border-transparent rounded-md opacity-50 cursor-pointer focus:outline-none dark:text-gray-400" disabled={true} type="button" aria-label="Previous">
                                <svg className="w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium leading-5 text-white align-bottom transition-colors duration-150 bg-purple-600 border border-transparent rounded-md cursor-pointer focus:outline-none active:bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-300" type="button">1</button>
                        </li>
                        <li>
                            <button className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium leading-5 text-gray-600 align-bottom transition-colors duration-150 border border-transparent rounded-md cursor-pointer focus:outline-none dark:text-gray-400 active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10" type="button">2</button>
                        </li>
                        <li>
                            <button className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium leading-5 text-gray-600 align-bottom transition-colors duration-150 border border-transparent rounded-md cursor-pointer focus:outline-none dark:text-gray-400 active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10" type="button">3</button>
                        </li>
                        <li>
                            <button className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium leading-5 text-gray-600 align-bottom transition-colors duration-150 border border-transparent rounded-md cursor-pointer focus:outline-none dark:text-gray-400 active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10" type="button">4</button>
                        </li>
                        <li>
                            <button className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium leading-5 text-gray-600 align-bottom transition-colors duration-150 border border-transparent rounded-md cursor-pointer focus:outline-none dark:text-gray-400 active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10" type="button">5</button>
                        </li>
                        <li>
                            <button className="inline-flex items-center justify-center p-2 font-medium leading-5 text-gray-600 align-bottom transition-colors duration-150 border border-transparent rounded-md cursor-pointer focus:outline-none dark:text-gray-400 active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10" type="button" aria-label="Next">
                                <svg className="w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Pagination
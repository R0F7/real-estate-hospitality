import { Link, useRouteError } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    const { status } = useRouteError();

    return (
        <section className="lg:h-[100vh] flex items-center h-full p-16 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
             <Helmet>
                <title>Hospitality Haven | NotFound</title>
            </Helmet>
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-600 dark:text-gray-400">
                        <span className="sr-only">Error</span>{status}
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 text-gray-400 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link to='/' rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded bg-cyan-400 text-gray-900 dark:text-gray-50">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
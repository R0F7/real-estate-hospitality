import MapWithMarker from "../../components/Map/Map";
import { Helmet } from "react-helmet-async";


const Contact = () => {
    return (
        <div>
             <Helmet>
                <title>Hospitality Haven | Contact</title>
            </Helmet>
            <div className="lg:h-[calc(100vh-386px)]">
                <section className="dark:bg-gray-00 dark:text-gray-900">
                    <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x divide-cyan-400">
                        <div className="py-6 md:py-0 md:px-6 -z-50">
                            <MapWithMarker></MapWithMarker>
                        </div>

                        <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                            <label className="block">
                                <span className="mb-1 opacity-">Full name</span>
                                <input type="text" placeholder="Leroy Jenkins" className="block border-2 p-2.5 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-cyan-400 outline-cyan-400 dark:bg-gray-100" data-sider-insert-id="86ff7d83-2412-40b8-96d3-6b893f6334eb" data-sider-select-id="0beae578-82ab-450c-9e89-e1d57e43b6c9" />
                            </label>
                            <label className="block">
                                <span className="mb-1">Email address</span>
                                <input type="email" placeholder="leroy@jenkins.com" className="block border-2 p-2.5 w-full rounded-md shadow-sm focus:ring focus:dark:ring-cyan-400 outline-cyan-400 dark:bg-gray-100" data-sider-select-id="25d9908e-ebdb-4069-a720-c3ac2b38b574" />
                            </label>
                            <label className="block">
                                <span className="mb-1">Message</span>
                                <textarea rows="3" className="block border-2 p-2.5 w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-cyan-400 outline-cyan-400 dark:bg-gray-100" data-sider-insert-id="ec4bbb3d-a3f6-4ebb-a3a8-45157b2fc38d" data-sider-select-id="03b67b7d-23de-4dff-9f5e-6bb5cd51ae96"></textarea>
                            </label>
                            <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-cyan-400 dark:text-gray-50 focus:dark:bg-cyan-400 hover:dark:bg-cyan-400">Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
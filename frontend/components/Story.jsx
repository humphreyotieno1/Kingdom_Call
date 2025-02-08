import Link from 'next/link';

const Story = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>
            <p className="mt-2 text-gray-600">Sorry, the page you are looking for does not exist. Still in development</p>
            <Link href="/" className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-300">
                Go Back Home
            </Link>
        </div>
    );
};

export default Story;
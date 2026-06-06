export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
            <span className="text-8xl font-extrabold text-primary-600 mb-6">404</span>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-2">Page not found</h1>
            <p className="text-xl text-primary-700 mb-8">
                Sorry, the page you are looking for does not exist.
            </p>
            <a
                href="/"
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium shadow hover:bg-primary-700 transition-colors"
            >
                Go to home
            </a>
        </div>
    );
}
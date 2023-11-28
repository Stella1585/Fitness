export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold uppercase text-gray-800 mb-4">
          404 Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you`&apos;`re looking for doesn`&apos;`t seem to exist. It may have been
          moved or deleted. If you think this is an error, please contact
          support.
        </p>
        <a
          href="/"
          className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 border border-blue-700 rounded"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

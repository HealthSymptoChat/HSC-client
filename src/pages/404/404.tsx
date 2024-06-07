import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-6 px-4 py-12 md:px-6">
      <div className="max-w-md text-center">
        <img src="/src/assets/404.svg" alt="Error 404" className="mx-auto h-50 w-50" />
        <p className="mt-4 text-gray-500 dark:text-gray-400 font-bold text-6xl">404</p>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Oops, the page you are looking for doesn't exist..
        </p>
        <div className="mt-6">
          <Link
            to="/Dashboard"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound

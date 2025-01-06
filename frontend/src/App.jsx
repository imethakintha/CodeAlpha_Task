
import TaskList from './components/TaskList';

function App () {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Task Manager</h1>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
           
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>

      
      <main className="flex-grow">
      
        <section className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
                Manage Your Tasks Efficiently
              </h2>
              <p className="mt-4 text-lg leading-6 text-blue-200">
                Organize, prioritize, and keep track of all your tasks in one place.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <TaskList />
        </section>
      </main>

      <footer className="bg-white shadow-inner">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">&copy; {new Date().getFullYear()} Task Manager. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.596 0 0 .594 0 1.326v21.348C0 23.406.596 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.798.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.406 24 22.674V1.326C24 .594 23.405 0 22.675 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.415a4.92 4.92 0 011.675 1.092 4.92 4.92 0 011.092 1.675c.175.457.359 1.257.415 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.415 2.427a4.92 4.92 0 01-1.092 1.675 4.92 4.92 0 01-1.675 1.092c-.457.175-1.257.359-2.427.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.415a4.92 4.92 0 01-1.675-1.092 4.92 4.92 0 01-1.092-1.675c-.175-.457-.359-1.257-.415-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.415-2.427a4.92 4.92 0 011.092-1.675 4.92 4.92 0 011.675-1.092c.457-.175 1.257-.359 2.427-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.07 5.775.128 4.68.314 3.793.63a7.07 7.07 0 00-2.54 1.646A7.07 7.07 0 00.63 4.817c-.316.887-.502 1.982-.56 3.259C0 8.332 0 8.741 0 12c0 3.259.013 3.668.07 4.948.058 1.277.244 2.372.56 3.259a7.07 7.07 0 001.646 2.54 7.07 7.07 0 002.54 1.646c.887.316 1.982.502 3.259.56C8.332 24 8.741 24 12 24s3.668-.013 4.948-.07c1.277-.058 2.372-.244 3.259-.56a7.07 7.07 0 002.54-1.646 7.07 7.07 0 001.646-2.54c.316-.887.502-1.982.56-3.259.057-1.28.07-1.689.07-4.948s-.013-3.668-.07-4.948c-.058-1.277-.244-2.372-.56-3.259a7.07 7.07 0 00-1.646-2.54 7.07 7.07 0 00-2.54-1.646c-.887-.316-1.982-.502-3.259-.56C15.668.013 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.415a4.92 4.92 0 011.675 1.092 4.92 4.92 0 011.092 1.675c.175.457.359 1.257.415 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.415 2.427a4.92 4.92 0 01-1.092 1.675 4.92 4.92 0 01-1.675 1.092c-.457.175-1.257.359-2.427.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.415a4.92 4.92 0 01-1.675-1.092 4.92 4.92 0 01-1.092-1.675c-.175-.457-.359-1.257-.415-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.415-2.427a4.92 4.92 0 011.092-1.675 4.92 4.92 0 011.675-1.092c.457-.175 1.257-.359 2.427-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.07 5.775.128 4.68.314 3.793.63a7.07 7.07 0 00-2.54 1.646A7.07 7.07 0 00.63 4.817c-.316.887-.502 1.982-.56 3.259C0 8.332 0 8.741 0 12c0 3.259.013 3.668.07 4.948.058 1.277.244 2.372.56 3.259a7.07 7.07 0 001.646 2.54 7.07 7.07 0 002.54 1.646c.887.316 1.982.502 3.259.56C8.332 24 8.741 24 12 24s3.668-.013 4.948-.07c1.277-.058 2.372-.244 3.259-.56a7.07 7.07 0 002.54-1.646 7.07 7.07 0 001.646-2.54c.316-.887.502-1.982.56-3.259.057-1.28.07-1.689.07-4.948s-.013-3.668-.07-4.948c-.058-1.277-.244-2.372-.56-3.259a7.07 7.07 0 00-1.646-2.54 7.07 7.07 0 00-2.54-1.646c-.887-.316-1.982-.502-3.259-.56C15.668.013 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

import { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    if (hasError) {
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }
  }, [hasError, error, errorInfo]);

  const handleError = (err, info) => {
    setHasError(true);
    setError(err);
    setErrorInfo(info);
  };

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center p-8 rounded-lg bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Occurred</h2>
          <p className="text-gray-600 mb-4">An error occurred while loading this page.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;

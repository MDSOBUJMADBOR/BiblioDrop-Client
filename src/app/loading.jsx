"use client";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
      
      <div className="text-center">
        
        {/* Logo / App Name */}
        <h1 className="text-3xl font-bold text-white mb-6 animate-pulse">
          Loading...
        </h1>

        {/* Loader */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-14 h-14 border-4 border-indigo-500/30 rounded-full"></div>
            <div className="w-14 h-14 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
          </div>
        </div>

        {/* Text */}
        <p className="text-gray-400 mt-6 text-sm">
          Loading your experience...
        </p>

      </div>
    </div>
  );
};

export default LoadingPage;
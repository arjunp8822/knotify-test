const Loading = () => {
  return (
    <div className="flex items-center justify-center animate-pulse transition-all">
      <div className="h-2.5 w-2.5 bg-white rounded-full"></div>
      <div className="ml-1 h-2.5 w-2.5 bg-white rounded-full delay-300"></div>
      <div className="ml-1 h-2.5 w-2.5 bg-white rounded-full delay-700"></div>
    </div>
  );
};

export default Loading;

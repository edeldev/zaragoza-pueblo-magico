export const SkeletonTrade = () => {
  return (
    <div className="p-4 rounded-2xl shadow-lg animate-pulse space-y-5">
      <div className="flex justify-between items-center">
        <div className="h-3 w-24 bg-gray-300 rounded"></div>
        <div className="h-5 w-5 bg-gray-300 rounded"></div>
      </div>

      <div className="h-5 w-40 bg-gray-300 rounded"></div>

      <div className="space-y-3 mt-4">
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
      </div>

      <div className="flex justify-end gap-2 mt-6">
        <div className="h-8 w-20 bg-gray-300 rounded-md"></div>
        <div className="h-8 w-20 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
};

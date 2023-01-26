const SkeletonCard = () => {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-[2rem]">
      <div className="animate-pulse flex flex-col">
        <div className="rounded-lg bg-slate-300 h-[12rem]" />
        <div className="flex-1 space-y-3 pt-4">
          <div className="py-2">
            <div className="h-4 bg-slate-300 rounded w-[12rem]" />
          </div>
          <div className="h-2 bg-slate-300 rounded" />
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4 pb-4">
              <div className="h-2 bg-slate-300 rounded col-span-2" />
              <div className="h-2 bg-slate-300 rounded col-span-1" />
              <div className="h-2 bg-slate-300 rounded col-span-3" />
            </div>
            <div className="flex items-center">
              <div className="h-4 w-12 bg-slate-300 rounded mr-[13rem]" />
              <div className="h-8 w-24 bg-slate-300 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;

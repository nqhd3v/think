const InternalPreviewLoadingThinkCard: React.FC = () => {
  return (
    <div className="w-full px-5 border border-gray-200 bg-white shadow-sm hover:shadow-md duration-300 cursor-pointer">
      <div className="py-5 border border-x-0 border-t-0 border-gray-200">
        <div className="h-7 w-2/3 rounded bg-gray-300 animate-pulse" />
      </div>
      <div className="flex items-center text-dark-100/50 font-ubuntu py-3">
        <div className="h-5 w-10 rounded bg-gray-300 animate-pulse" />
        {" · "}
        <div className="h-5 w-20 rounded bg-gray-300 animate-pulse" />
      </div>
    </div>
  );
};

export default InternalPreviewLoadingThinkCard;

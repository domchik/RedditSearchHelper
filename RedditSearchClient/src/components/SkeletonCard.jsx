const SkeletonCard = () => {
    return (
        <div className="max-w-lg rounded overflow-hidden shadow-lg p-4 border border-gray-200 animate-pulse">
            <div className="w-full h-48 bg-gray-300 mb-3"></div>
            <div className="w-3/4 h-5 bg-gray-300 mb-2"></div>
            <div className="w-1/2 h-4 bg-gray-300 mb-2"></div>
            <div className="h-4 bg-gray-300 mb-1"></div>
            <div className="h-4 w-3/4 bg-gray-300"></div>
        </div>
    );
};

export default SkeletonCard;

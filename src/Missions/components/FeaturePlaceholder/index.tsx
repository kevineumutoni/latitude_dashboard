import React from 'react';

interface FeaturePlaceholderProps {
  feature: string;
}

const FeaturePlaceholder: React.FC<FeaturePlaceholderProps> = ({ feature }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-white rounded-lg p-8 border border-gray-200">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-[#fdf5f7] rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-[#77003B] text-2xl">🚀</span>
        </div>
        <h2 className="text-2xl font-bold text-[#77003B] mb-2">{feature}</h2>
        <p className="text-gray-600">
          This feature is currently in development and will be available soon.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Latitude , Building the future of geospatial intelligence.
        </p>
      </div>
    </div>
  );
};

export default FeaturePlaceholder;
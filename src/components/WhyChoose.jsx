import React from "react";

const FeatureList = () => {
  const features = [
    {
      id: "01",
      title: "Search and Filters",
      description:
        "Tailored Searches to meet your needs. Find what you're looking for with precision.",
    },
    {
      id: "02",
      title: "Detailed Listings",
      description:
        "Every Detail Matters. Sellers can list, and buyers can explore properties that meet their exact specifications.",
    },
    {
      id: "03",
      title: "Direct Messaging",
      description:
        "Seamless Communication. Connect directly with sellers or buyers to ask questions, negotiate, and make decisions.",
    },
    {
      id: "04",
      title: "Secure Payments",
      description:
        "Trust in Every Transaction. Our secure payment system ensures your peace of mind.",
    },
  ];

  return (
    <div className="bg-regal-blue p-16 mt-16 mb-16 ">
      <div className="flex flex-col items-center space-y-8 p-10">
        <h1 className="text-7xl font-bold">WHY CHOOSE XYZ?</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <div className="flex flex-col relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
          <div className="p-6 mb-8">
            <h3 className="text-7xl font-light mb-2">{features[0].id}</h3>
            <h4 className="text-xl font-bold mb-4">{features[0].title}</h4>
            <p className="w-4 h-4 mt-6 mb-10 bg-cyan-700 rounded-md"></p>
            <p className="text-gray-600">{features[0].description}</p>
          </div>
        </div>

        {/* Feature 2 */}

        <div className="flex flex-col mt-20 relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
          <div className="p-6 mb-8">
            <h3 className="text-7xl font-light mb-2 uppercase">
              {features[1].id}
            </h3>
            <h4 className="text-xl font-bold uppercase">{features[1].title}</h4>
            <p className="w-4 h-4 mt-6 mb-10 bg-cyan-700 rounded-md"></p>
            <p className="text-gray-600">{features[1].description}</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col relative md:border-r-0 mt-60">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
          <div className="p-6 mb-8">
            <h3 className="text-7xl font-light mb-2">{features[2].id}</h3>
            <h4 className="text-xl font-bold mb-4 uppercase">
              {features[2].title}
            </h4>
            <p className="w-4 h-4 mt-6 mb-10 bg-cyan-700 rounded-md"></p>
            <p className="text-gray-600">{features[2].description}</p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-500 to-transparent ml"></div>
          <div className="p-6 mb-8">
            <h3 className="text-7xl font-light mb-2">{features[3].id}</h3>
            <h4 className="text-xl font-bold mb-4 uppercase">
              {features[3].title}
            </h4>
            <p className="w-4 h-4 mt-6 mb-10 bg-cyan-700 rounded-md"></p>
            <p className="text-gray-600">{features[3].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureList;

import { useLocation } from "react-router-dom";
import Navbar from '../Components/Navbar'; 

const Recommendations = () => {
  const { state } = useLocation();
  const { recommendations } = state || { recommendations: [] };

  return (
    <div className="min-h-screen bg-[#FAF7F0] pl-8 pr-8">
      <Navbar/>
            <h1 className="text-3xl font-bold text-[#4A4947] text-center mb-6">
        Your Recommended Plan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recommendations.length > 0 ? (
          recommendations.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#4A4947] mb-2">{place.title}</h3>
              <p className="text-gray-600 mb-2">{place.description}</p>
              <p className="text-sm text-gray-500">
                Price: <span className="font-bold">₹{place.price}</span> | Duration: {place.duration} hrs
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No recommendations available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
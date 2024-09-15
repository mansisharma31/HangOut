import { FaPhoneAlt } from 'react-icons/fa';


const Card = ({ image, days, nights, title, locations, price, oldPrice, savings, rating, reviews }) => {
  return (
    <div className="bg-white border-gray-400 shadow-inner rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      
      <div className="p-4">
        <div className="flex items-center justify-between text-gray-700 text-sm">
          <p>{days} days & {nights} nights</p>
          <div className="flex items-center text-green-500">
            <span className="text-xl">{rating}</span>
            <span className="text-sm ml-1">({reviews})</span>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mt-2">{title}</h2>
        <p className="text-gray-500 text-sm mt-1">{locations.join(' • ')}</p>
        
        <div className="flex items-center mt-4">
          <p className="text-lg font-bold text-orange-500">INR {price}</p>
          <p className="text-sm text-gray-400 line-through ml-2">INR {oldPrice}</p>
          <p className="text-sm text-green-500 ml-2">SAVE INR {savings}</p>
        </div>
        
        <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded flex items-center justify-center">
          <FaPhoneAlt className="mr-2" />
          Request Callback
        </button>
      </div>
    </div>
  );
};

export default Card;

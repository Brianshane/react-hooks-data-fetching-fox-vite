
import { useEffect, useState } from 'react';
import foxLogo from '../assets/fox-logo.png';

const API_URL = "https://randomfox.ca/floof/";

function FoxImage() {
  const [image, setImage] = useState(foxLogo);

  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch fox image");
        }
        return response.json();
      })
      .then(data => setImage(data.image))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full text-center">

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Discover Foxes
        </h1>

        <p className="text-gray-500 mb-5">
          Learn more about these beautiful animals!
        </p>

        <img
          src={image}
          alt="Random fox"
          className="w-full h-64 object-cover rounded-xl shadow-md mb-5"
        />

        <button
          onClick={() => {
            fetch(API_URL)
              .then(response => response.json())
              .then(data => setImage(data.image))
              .catch(error => console.log(error));
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 w-full"
        >
          Get Another Fox
        </button>

      </div>
    </div>
  );
}

export default FoxImage;

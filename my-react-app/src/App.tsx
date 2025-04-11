import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Thank } from './components/Thank.tsx';
import mobileBg from '../design/ip-address-tracker-master/images/pattern-bg-mobile.png';
import rArrow from '../design/ip-address-tracker-master/images/icon-arrow.svg';
function App() {
  // const [rating, setRating] = useState<number | null>(null);
  // const [showThankYou, setShowThankYou] = useState(false);

  // const btnArr = [1, 2, 3, 4, 5];

  // const handleRatingClick = (value: number) => {
  //   setRating(value);
  // };

  // const handleSubmit = () => {
  //   if (rating !== null) {
  //     setShowThankYou(true);
  //   }
  // };

  return (
    <>
      <section
        style={{ backgroundImage: `url(${mobileBg})` }}
        className="flex h-45 bg-cover flex-col items-center px-4  "
      >
        <h1 className="text-white m-3 ">ip Adrdress Tracker</h1>
        <form className="flex max-w-2xl">
          <input
            className="bg-white rounded-l-md text-xs w-full p-3 "
            type="text"
            name="ipAddress"
            id="ipAddress"
            placeholder="  Search for any IP address or domain"
          />
          <button className="bg-black p-3 rounded-r-md">
            <img src={rArrow} alt="" className="" />
          </button>
        </form>
        <div className=" bg-white flex flex-col md:flex-row md:justify-evenly md:text-left text-center w-full mt-4 p-3  rounded-md">
          <div className="md:border-r-1 border-gray-400 md:pr-12 ">
            <h2 className="text-xs text-gray-500 font-bold ">IP ADDRESS</h2>
            <p className="text-sm font-bold">192.212.174.101</p>
          </div>

          <div className="md:border-r-1 border-gray-400 md:pr-12">
            <h2 className="text-xs text-gray-500 font-bold "> Location</h2>
            <p className="text-sm font-bold">Brooklyn, NY 10001</p>
          </div>
          <div className="md:border-r-1 border-gray-400 md:pr-12  ">
            <h2 className="text-xs text-gray-500 font-bold">Timezone</h2>
            <p className="text-sm font-bold">UTC -05:00</p>
          </div>
          <div className=" md:pr-12 ">
            <h2 className="text-xs text-gray-500 font-bold">ISP</h2>
            <p className="text-sm font-bold">SpaceX Starlink</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

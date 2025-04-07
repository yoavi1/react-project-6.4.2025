import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Thank } from './components/Thank.tsx';

function App() {
  const [rating, setRating] = useState<number | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const btnArr = [1, 2, 3, 4, 5];

  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating !== null) {
      setShowThankYou(true);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black ">
        {showThankYou ? (
          <Thank rating={rating} />
        ) : (
          <div className="flex flex-col w-[375px] p-4 bg-gray-900 rounded-2xl">
            <div className=" mb-5 flex justify-center bg-gray-800 p-2 h-7 w-7 rounded-full">
              <img src="../images/icon-star.svg" alt="" />
            </div>
            <h1 className="text-white mb-2">HOW did we do?</h1>
            <p className="text-gray-500 text-xs leading-4.5">
              Please let us know how we did with your support request. All feedback is appreciated
              to help us improve our offering!
            </p>

            <div className="flex justify-between my-3 ">
              {btnArr.map((item) => (
                <button
                  key={item}
                  onClick={() => handleRatingClick(item)}
                  // className="hover:cursor-pointer hover:bg-orange-500 hover:text-gray-950 text-xs font-medium text-gray-500 bg-gray-800 w-7 h-7 p-4.5 rounded-full flex justify-center items-center">
                  className={`
                  hover:bg-orange-500 hover:text-white 
                  text-gray-500 
                  ${rating === item ? 'bg-gray-500 text-white' : 'bg-gray-800'} 
                  w-10 h-10 rounded-full flex justify-center items-center transition-colors
                `}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              className="bg-white text-gray-950 rounded-full my-2 font-[600] text-[0.725rem] py-1.5"
            >
              SUBMIT
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

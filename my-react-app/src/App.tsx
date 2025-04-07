import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Thank } from './components/Thank.tsx';

function App() {
  const [count, setCount] = useState(0);
  const btnArr = [1, 2, 3, 4, 5];
  return (
    <>
      <Thank />
      <div className="flex justify-center items-center h-screen bg-black ">
        {/* card */}
        <div className="flex flex-col w-[375px] p-4 bg-gray-900 rounded-2xl">
          <div className=" mb-5 flex justify-center bg-gray-800 p-2 h-7 w-7 rounded-full">
            <img src="../images/icon-star.svg" alt="" />
          </div>
          <h1 className="text-white mb-2">HOW did we do?</h1>
          <p className="text-gray-500 text-xs leading-4.5">
            Please let us know how we did with your support request. All feedback is appreciated to
            help us improve our offering!
          </p>

          <div className="flex justify-between my-3 ">
            {btnArr.map((item) => (
              <button className="hover:cursor-pointer hover:bg-orange-500 hover:text-gray-950 text-xs font-medium text-gray-500 bg-gray-800 w-7 h-7 p-4.5 rounded-full flex justify-center items-center">
                {item}
              </button>
            ))}
          </div>
          <button className="bg-white text-gray-950 rounded-full my-2 font-[600] text-[0.725rem] py-1.5">
            SUBMIT
          </button>
        </div>
      </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className='text-yellow-500'>This is a new paragraph added to the App component.</p> */}
    </>
  );
}

export default App;

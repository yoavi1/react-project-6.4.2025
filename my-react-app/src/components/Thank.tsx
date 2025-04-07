import React from 'react';

interface ThankProps {
  rating: number | null;
}

export const Thank = ({ rating }: ThankProps) => {
  return (
    <div className="flex flex-col items-center w-[375px] p-8 bg-gray-900 rounded-2xl text-center">
      <div className="mb-6">
        <img
          src="/images/illustration-thank-you.svg"
          alt="Thank you illustration"
          className="h-28"
        />
      </div>

      <div className="bg-gray-800 rounded-full py-1 px-4 mb-6">
        <p className="text-orange-500 text-sm">You selected {rating} out of 5</p>
      </div>

      <h2 className="text-white text-2xl font-bold mb-4">Thank you!</h2>

      <p className="text-gray-500 text-sm leading-5">
        We appreciate you taking the time to give a rating. If you ever need more support, don't
        hesitate to get in touch!
      </p>
    </div>
  );
};

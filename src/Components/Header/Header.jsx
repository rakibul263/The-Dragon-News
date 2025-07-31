import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
const Header = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex justify-center mt-2 flex-col items-center">
      <img className='w-[400px]'  src={logo}></img>
      <p className='text-accent mt-3'>Journalism Without Fear or Favour</p>
      <p className='text-accent font-semibold mt-3'>{formattedDate}</p>
    </div>
  );
};

export default Header;

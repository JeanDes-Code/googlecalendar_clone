import React from 'react';
import Day from './Day';

const Month = ({ month }) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((week, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {week.map((day, index) => (
            <Day day={day} key={index} rowIndex={rowIndex} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Month;

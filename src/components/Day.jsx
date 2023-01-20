import React from 'react';
import dayjs from 'dayjs';

const Day = ({ day, rowIndex }) => {
  const getCurrentDayClass = () => {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-blue-500 text-white rounded-full w-7 flex item-center justify-center'
      : '';
  };

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="text-xs font-semibold mt-1 uppercase text-gray-500">
            {day.format('ddd')}.
          </p>
        )}

        <p
          className={`text-sm p-1 ${
            rowIndex === 0 ? '' : 'mt-1'
          } text-center text-gray-500 font-semibold ${getCurrentDayClass()}`}
        >
          {day.format('DD').startsWith('0')
            ? day.format('D')
            : day.format('DD')}
        </p>
      </header>
    </div>
  );
};

export default Day;

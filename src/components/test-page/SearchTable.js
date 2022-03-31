import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const SearchTable = () => {
  const [value, setValue] = useState(new Date(2017, 7, 1));
  const [value1, setValue1] = useState(new Date());
  const [display, setDisplay] = useState(true);
  // const [valueInput, setValueInput] = useState(new Date())

  const refShow = useRef(null);

  const convert = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("/");
  };

  const handValue = (e) => {
    setDisplay(false);
  };

  useEffect(() => {
    const handleClickOut = (e) => {
      if (refShow.current && !refShow.current.contains(e.target)) {
        setDisplay(true);
      }
    };

    document.addEventListener("click", handleClickOut);
    return () => {
      document.removeEventListener("click", handleClickOut);
    };
  }, []);

  return (
    <div ref={refShow}>
      <input
        type="text"
        value={convert(value)}
        className="border border-gray-500 w-[88px] border-r-0 focus:outline-none"
        onFocus={handValue}
      />

      <input
        type="text"
        value={convert(value1)}
        className="border border-gray-500 w-[88px] border-l-0 focus:outline-none"
        onFocus={handValue}
      />
      <div className="flex">
        {!display && <Calendar onChange={setValue} defaultValue={value} />}
        {!display && <Calendar onChange={setValue1} defaultValue={value1} />}
      </div>
    </div>
  );
};

export default SearchTable;

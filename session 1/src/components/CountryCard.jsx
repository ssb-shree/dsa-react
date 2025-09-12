import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";

import { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region";

const CountryCard = () => {
  const [countires, setCountries] = useState(null);
  const [country, setCountry] = useState(null);

  const [search, setSearch] = useState("");

  const [flag, setFlag] = useState(false);

  const getCountry = async () => {
    try {
      if (!search.trim()) throw new Error("empty search input");

      const [data] = countires.filter((item) => item.name.common.toLowerCase() === search);

      if (!data) {
        setFlag(true);
        setSearch("");
        throw new Error("Invalid country name");
      }

      setSearch("");
      setCountry(data);
      setFlag(false);
    } catch (error) {
      console.error(error.message || error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setCountries(data);

        const intialData = data.filter((item) => item.name.common.toLowerCase() === "india");
        setCountry(intialData[0]);
      } catch (error) {
        console.log("error -> ", error.message || error);
      }
    };
    getData();
  }, []);
  return country ? (
    <div
      className="w-80 sm:w-[28rem] md:w-[32rem] lg:w-[36rem] \
            border border-gray-700 rounded-2xl shadow-lg bg-gray-900 \
            flex flex-col items-center p-6 lg:p-10"
    >
      {/* Search */}
      <div className="w-full flex flex-col mb-8">
        <div className="flex gap-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={({ key }) => (key == "Enter" ? getCountry() : null)}
            placeholder="Search Country"
            className="flex-1 border border-gray-600 rounded-full \
      px-4 py-2 bg-gray-800 text-gray-200 placeholder-gray-400 \
      focus:outline-none focus:ring-2 focus:ring-blue-500 \
      text-sm sm:text-base"
          />
          <button
            className="p-3 bg-blue-500 text-white rounded-full \
      hover:bg-blue-600 transition"
            onClick={getCountry}
          >
            <BiSearch size={22} />
          </button>
        </div>
        {flag && <p className="text-red-700 text-center text-sm font-mono mt-2">Invalid Country Name</p>}
      </div>

      {/* Flag */}
      <div className="w-40 h-24 rounded-md overflow-hidden shadow-md mb-6 border border-gray-700">
        <img className="w-full h-full object-cover" src={`${country.flags.svg}`} alt="Country Flag" />
      </div>

      {/* Info */}
      <div className="flex flex-col items-center gap-2 text-gray-200">
        <div className="text-xl font-semibold">{country.name.common}</div>
        <div className="text-base text-gray-400">{country.capital}</div>
        <div className="text-base text-gray-400">{country.region}</div>
      </div>

      {/* Population */}
      <div className="mt-5 flex items-center gap-2 text-base text-gray-300">
        <BsPerson className="text-gray-400" />
        {country.population}
      </div>
    </div>
  ) : (
    <FallBackCard />
  );
};

export default CountryCard;

const FallBackCard = () => {
  return (
    <div
      className="w-80 sm:w-[28rem] md:w-[32rem] lg:w-[36rem] 
                border border-gray-700 rounded-2xl shadow-lg bg-gray-900 
                flex flex-col items-center p-6 lg:p-10 text-gray-300"
    >
      {/* Placeholder Flag */}
      <div
        className="w-40 h-24 rounded-md overflow-hidden shadow-md mb-6 
                  border border-gray-700 flex items-center justify-center bg-gray-800"
      >
        <span className="text-gray-500 text-sm">Loading Flag</span>
      </div>

      {/* Placeholder Info */}
      <div className="flex flex-col items-center gap-3">
        <div className="h-5 w-32 bg-gray-700 rounded animate-pulse"></div>
        <div className="h-4 w-20 bg-gray-700 rounded animate-pulse"></div>
        <div className="h-4 w-28 bg-gray-700 rounded animate-pulse"></div>
      </div>

      {/* Placeholder Population */}
      <div className="mt-6 flex items-center gap-3">
        <BsPerson className="text-gray-600 text-lg" />
        <div className="h-4 w-16 bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

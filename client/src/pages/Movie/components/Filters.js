import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown, FaCheck } from "react-icons/fa";

import sampleCategories from "../../../data/categories";

const categories = [{ _id: 0, title: "Category" }, ...sampleCategories];

const years = [
  { title: "Sort By Year" },
  { title: "1700 - 1800" },
  { title: "1800 - 1900" },
  { title: "1900 - 2000" },
  { title: "2000 - 2010" },
  { title: "2010 - Present" },
];

const times = [
  { title: "Sort By Hours" },
  { title: "0 - 1 Hours" },
  { title: "1 - 2 Hours" },
  { title: "2 - 3 Hours" },
  { title: "3 - 4 Hours" },
  { title: "4 - 5 Hours" },
];

const rates = [
  { title: "Sort By Rates" },
  { title: "0 - 1 Star" },
  { title: "1 - 2 Stars" },
  { title: "2 - 3 Stars" },
  { title: "3 - 4 Stars" },
  { title: "4 - 5 Stars" },
];

const Filters = () => {
  const [category, setCategory] = useState(categories[0]);
  const [year, setYear] = useState(years[0]);
  const [time, setTime] = useState(times[0]);
  const [rate, setRate] = useState(rates[0]);

  const filters = [
    {
      value: category,
      onChange: setCategory,
      items: categories,
    },
    {
      value: year,
      onChange: setYear,
      items: years,
    },
    {
      value: time,
      onChange: setTime,
      items: times,
    },
    {
      value: rate,
      onChange: setRate,
      items: rates,
    },
  ];

  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6 ">
      {filters.map((filter, index) => (
        <Listbox key={index} value={filter.value} onChange={filter.onChange}>
          <div className="relative">
            <Listbox.Button className="relative border border-gray-800 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs">
              <span className="block truncate">{filter.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                <FaAngleDown className="w-5 h-5" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {filter.items.map((item, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-subMain text-white" : "text-main"
                      }`
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncated ${
                            selected ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {item.title}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaCheck className="w-3 h-3" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
};

export default Filters;

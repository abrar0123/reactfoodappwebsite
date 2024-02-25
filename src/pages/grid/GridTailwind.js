import React from "react";

const GridTailwind = () => {
  return (
    <div className="container mx-auto pt-5 px-20 ">
      <h1 className="text-3xl font-bold mb-4">Interactive Grid Layout</h1>
      <div className="layoutGridContainer grid grid-cols-[200px,1fr,1fr] gap-1">
        <div className="bg-lime-600 h-16 col-span-full ">
          Header of web page
        </div>
        {/* <div className="bg-blue-700 h-auto w-40 row-span-3 col-span-1">
          item 1
        </div> */}
        <div className="bg-blue-400 h-auto col-span-1 row-span-3">
          <h2 className="text-lg font-semibold mb-2">Sidebar</h2>
          <ul>
            <li className="mb-1">Link 1</li>
            <li className="mb-1">Link 2</li>
            <li className="mb-1">Link 3</li>
            <li className="mb-1">Link 4</li>
          </ul>
        </div>
        <div className="bg-green-300 h-auto col-span-2 row-span-3">
          content area content area content area content area content area
          content area content area content area content area content area
          content area content area content area content area content area
          conten content area
        </div>
        <div className="bg-blue-500 h-16">item 3</div>
        <div className="bg-red-300 h-16">item 4</div>
        <div className="bg-blue-300 h-16">item 5</div>
        <div className="bg-red-300 h-16">item 6</div>

        <div className="bg-lime-600 h-16 col-span-full">Footer of website</div>
      </div>
    </div>
  );
};

export default GridTailwind;

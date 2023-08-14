import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");
  console.log(text.length)

  const uppercase = () => {
    setText(text.toUpperCase());  // Update text to uppercase
  };

  const lowercase = () => {

    setText(text.toLowerCase());  // Update text to uppercase
  };

  const pickvalue = (event) => {
    setText(event.target.value);  // Update text based on user input
  };



  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <section className="w-[100%] body-font relative">
      <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
    <h1 id='titleheading' className="sm:text-3xl text-2xl font-medium  mb-4" style={props.textStyle}>Text Utils</h1>

      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{props.heading}</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
       
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" id="messagelabel" className="leading-7 text-sm ">Your text here</label>
            <textarea value={text} onChange={pickvalue} id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full flex">
          <button onClick={uppercase} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">UpperCase</button>
          <button onClick={lowercase} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">LowerCase</button>
        </div>
        </div>
    </div>
  </div>
      </section>
     <div className='flex flex-col gap-[10px] w-[100%] items-center justify-center'>

      <h1 id='text-details'><b>You text details</b> </h1>
      <p id='text-preview'>Your text length {text.length} Words {text.split(" ").length}</p>
      <h1 id='text-result'><b>You text Preview</b> </h1>
      <p id="text-demo">{text}</p>
     </div>

    </div>
  );
}

import React, {useState} from 'react';
import {Plus, Minus } from "lucide-react";
import  faq  from './faq';

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleButton = (index) => {
        setActiveIndex(prev => (prev === index ? null : index))
    }
  
  return (
    <div className=' mx-auto p-4'>
        <h2 className='text-2xl mb-6 font-bold text-center'>Frequently Asked Questions</h2>
   <div className=' space-y-4 max-w-2xl mx-auto'>
    {faq.map((faq, index)=> (
      <div key={index} className= 'border rounded-lg'>
          <button className='w-full flex justify-between items-center p-4 ' onClick = {()=> toggleButton(index)} >
            <span>{faq.question}</span>
            {activeIndex === index ? (<Minus className='w-5 h-5 text-indigo-600'/>) : (<Plus className='w-5 h-5 text-indigo-600'/>)}
            </button>    
           {activeIndex === index && (
            <div className='px-4 pb-4 text-gray-700'>
                {faq.answer}
            </div>
           )}
      </div>  

    ))}
   </div>
   
    </div>

  )
}


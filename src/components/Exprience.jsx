import React from 'react';

function Exprience(props) {
    return (
        <section className="bg-gray-100 py-12">
  <div className="container mx-auto px-4">
    
    <div className="flex items-center justify-center mb-10">
      <div className="border-t border-gray-500 flex-grow mr-3"></div>
      <h2 className="text-2xl font-semibold text-center">Experience</h2>
      <div className="border-t border-gray-500 flex-grow ml-3"></div>
    </div>

    
    <div className="space-y-10">
      
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        
        <div className="border-r border-gray-400 pr-6 text-center">
          <h3 className="text-lg font-semibold">Junior software Engineer</h3>
          <p className="text-sm text-gray-500">ABC.Ltd</p>
          <p className="text-sm text-gray-500 mt-2 border-t border-gray-400 pt-2">Apr 2018 - Dec 2022</p>
        </div>
        
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula</li>
        </ul>
      </div>

      
      <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-10">
        
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula</li>
        </ul>
        
        <div className="border-l border-gray-400 pl-6 text-center">
          <h3 className="text-lg font-semibold">Manager</h3>
          <p className="text-sm text-gray-500">ABC.Ltd</p>
          <p className="text-sm text-gray-500 mt-2 border-t border-gray-400 pt-2">Apr 2018 - Dec 2022</p>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}

export default Exprience;
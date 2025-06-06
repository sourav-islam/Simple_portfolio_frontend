import React from 'react';

function Footer(props) {
    return (
        <section className="bg-white py-16">
  <div className="container mx-auto px-4">

    <div className="flex items-center justify-center mb-10">
      <div className="border-t border-gray-400 flex-grow mr-3"></div>
      <h2 className="text-2xl font-semibold text-center">Contact</h2>
      <div className="border-t border-gray-400 flex-grow ml-3"></div>
    </div>

 
    <p className="text-center text-gray-700 max-w-xl mx-auto mb-8">
      I am currently seeking employment, and I would appreciate it if you could contact me with any available job opportunities.
    </p>


    <form className="max-w-lg mx-auto space-y-4">
      <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-gray-400" />
      <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-gray-400" />
      <textarea placeholder="Your Message" rows="5" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-gray-400"></textarea>
      <button type="submit" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
        Send Message
      </button>
    </form>

   
    <div className="mt-12 text-center space-y-4">
      <div className="flex justify-center space-x-6 text-2xl text-gray-800">
        <a href="https://github.com/sourav-islam" aria-label="GitHub"><i className="fab fa-github"></i></a>
        <a href="https://linkedin.com" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
      </div>
      <p className="text-sm text-gray-500">Md Sourav Islam - 2025</p>
    </div>
  </div>
</section>

    );
}

export default Footer;
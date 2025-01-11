import React from 'react';
import { CONTACT } from '../constants';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export const Contact = () => {
  
  const onSubmit = async (event) => {
    event.preventDefault();
    
    
    const formData = new FormData(event.target);

    formData.append("access_key", "dc91972e-e95a-40ca-87e7-ac2d3038fdae");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Email sent successfully !");
      event.target.reset();
    }
    
  };

  return (
    <div id="Contactme" className="w-full flex flex-col lg:flex-row items-center px-4 lg:px-16 py-8 lg:py-16 bg-transeperent">
      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 flex flex-wrap justify-center">
          {/*form section is under construction */}
        <form onSubmit={onSubmit}  className="space-y-6 w-full max-w-md bg-gray-500 shadow-md rounded-lg p-6">
          <h2 className="text-2xl  lg:text-3xl font-bold mb-4 text-gray-800 text-center">Contact Form</h2>
          <div>
            <label htmlFor="name"
            className='block text-sm font-medium text-gray-100'>
            Name
            </label>
            <input 
            type="text" 
            placeholder='Enter Your name'
            name='name'
            className='text-black mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
          <div>
            <label htmlFor="Email"
            className='block text-sm font-medim text-gray-100'>
            Email
            </label>
            <input type="Email" 
            placeholder='Enter Your Email'
            className='mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
          <div>
            <label htmlFor="Message me"
            className='block text-sm font-medium text-gray-50'
            >
             Write your message
            </label>
            <textarea name="message" id=""
            placeholder='Write your message here..'
            row="4"
            className='text-black mt-1 block w-full py-3 px-2 rounded-md shodow-sm  focus:ring-blue-500 focus:border-blue-500'
            >
            </textarea>
          </div>
          <div>
            <button
            type='submit'
            className='w-full py-4 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 '
            >
              Submit Now
            </button>
          </div>  
        </form>
      </div>

      {/* Right Side: Contact & Social Media */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center space-y-8">
        <h2 className="text-4xl font-bold text-white-800">My Contact</h2>
        <div className="flex justify-center gap-8">
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="text-lg border-b text-blue-500 hover:text-blue-700"
            aria-label="Call Keyur"
            title="Call Keyur"
          >
            <FaPhone className="text-green-500 h-8 w-8" />
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="border-b text-blue-500 hover:text-blue-700 text-lg"
            aria-label="Email Keyur"
            title="Email Keyur"
          >
            <FaEnvelope className="text-blue-500 h-8 w-8" />
          </a>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-3xl font-semibold text-white-800">Social Media</h3>
          <div className="flex gap-4 text-3xl">
            <a
              href="https://www.linkedin.com/in/keyur-gamit-6ab3742ba/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/KeyurGamit11"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://Instagram.com/_keyur_1112"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(237,73,86,0.8)]"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

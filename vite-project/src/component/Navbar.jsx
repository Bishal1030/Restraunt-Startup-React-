import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-10">
    {/* Logo on the left */}
    <div className="flex items-center ml-16">
      <img src="/path-to-logo.png" alt="Logo" className="h-8 w-8" />
      <span className="ml-2 text-xl font-semibold text-white">Your Logo</span> {/* Changed text to black */}
    </div>
  
    {/* Navigation Buttons on the right */}
    <div className="flex space-x-12 mr-40">
      <button className="text-white hover:text-gray-600" onClick={() => navigate('/home')}>Home</button> {/* Changed text to black */}
      <button className="text-white hover:text-gray-600"onClick={() => navigate('/about')}>About</button> {/* Changed text to black */}
      <button className="text-white hover:text-gray-600"onClick={() => navigate('/menu')}>Menu</button> {/* Changed text to black */}
  
      {/* Special 'Book a Table' Button */}
      <button className="bg-yellow-500 border-2 border-yellow-600 text-black px-4 py-2 rounded-md hover:bg-yellow-600">
        Book a Table
      </button> {/* Changed text to black */}
    </div>
  </div>
  
  )
}

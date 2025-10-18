import React from 'react'

function SearchBox() {
  return (
   <div className="mt-15 shadow-2xl bg-white/40 bottom-0">
  <input
    type="text"
    placeholder="Searching..."
    className="bg-gray-100 py-2 px-4 w-full text-2xl focus:outline-none border-blue-600 border-1"
  />
</div>

  )
}

export default SearchBox

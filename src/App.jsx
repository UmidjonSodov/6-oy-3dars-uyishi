import React from 'react'
import Navigation from './Components/Navigation'
import SearchBox from './Components/SearchBox'
import BoxsInformation from './BoxsInformation'

function App() {
  return (
    
    <div className='container mx-auto  mx-w-w-full'>
            <Navigation className='bg-blue-500 w-full '>
              <ul className='flex gap-10 py-4 ml-5  text-white font-medium'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Business</li>
                <li className='cursor-pointer'>Entertainment</li>
                <li className='cursor-pointer'>General</li>
                <li className='cursor-pointer'>Health</li>
                <li className='cursor-pointer'>Science</li>
                <li className='cursor-pointer'>Sports</li>
                <li className='cursor-pointer'>Technology</li>
              </ul>
              </Navigation>  

        <SearchBox>  </SearchBox>
        <BoxsInformation></BoxsInformation>
      </div>
  )
}

export default App

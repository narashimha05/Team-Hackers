import React from 'react'

const TabButton = ({active,selectTab,children}) => {
    const buttonClass=active ?
     "text-blue-950  border-b-2  border-white "
     :"text-transparent bg-clip-text bg-blue-950";
  return (
    <button onClick={selectTab} >
    <p className={`m-1 text-xl md:text-3xl font-bold text-blue-950 hover:text-purple-600 ${buttonClass}`}>
        {children}
    </p>  
    </button>
  )
}

export default TabButton
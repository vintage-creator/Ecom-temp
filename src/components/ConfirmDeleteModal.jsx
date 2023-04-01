import React from 'react'

const ConfirmDeleteModal = ({children}) => {

  return (
    <div className='absolute right-0 left-0 top-0 bottom-0 z-[999] flex justify-center items-center'
    style={{backgroundColor:"rgba(0,0,0,0.5)"}}
    
    >
{children}
    </div>
  )
}

export default ConfirmDeleteModal
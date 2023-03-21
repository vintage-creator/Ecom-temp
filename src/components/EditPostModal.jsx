import React, {useContext} from 'react'
import myGlobalContext from '../context'
function EditPostModal({children}) {
    const {
        openAndClose2,
     
      } = useContext(myGlobalContext)
  return (
    <div className={`${openAndClose2} fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-30`}

    >
{children}
    </div>
  )
}

export default EditPostModal
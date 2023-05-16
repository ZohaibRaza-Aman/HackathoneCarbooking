import React, { useState } from 'react'

const DynamicSearchInput = () => {
  const [filterdata,setFilterData] = useState([])
    
  return (
    <div>
      <form>
        <div class="mx-auto text-center">
            <input style={{width: 500 , height:40}} type='txet' placeholder='Search Here ...'
            />
        </div>
      </form>
    </div>
  )
}

export default DynamicSearchInput;

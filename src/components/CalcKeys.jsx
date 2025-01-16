import React from 'react'

const CalcKeys = (props) => {
  return (
    <div className=' cursor-pointer text-lg text-white font-semibold p-1 bg-black border-4 text-center outline-none' onClick={props.onclick}>
      {props.calcKey}
    </div>
  )
}

export default CalcKeys

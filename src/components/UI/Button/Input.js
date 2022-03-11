import React from "react";


const Input = props => {
  const handleOnChange = e => {
      props.setIsData(e.target.value)
      console.log('inputan...', e.target.value)
  }
  return (
    <input type={props.type}  name={props.name} onChange={(e) => handleOnChange(e)}/>
  )
}

 export default Input;

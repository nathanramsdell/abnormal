import React from 'react'

/*
Props it can take in
== text ==> 'This is the button text'
== color ==> 'text-white-500'
== colorHover ==> 'hover:text-white-500'
== bgColor ==> 'bg-white-500'
== bgColorHover ==> 'hover:bg-white-500'
== rightArrow ==> 'true' or 'false'
*/

const CustomButton = (props) => {
  return (
    <>
    <a href="#" className={`${props.color} ${props.colorHover} custom-button inline-flex items-center px-5 transition-colors ${props.bgColor} ${props.bgColorHover} h-10 rounded-sm font-light hover:bg-assembly-white hover:text-assembly-black`}>{props.text}
    {props.rightArrow && <span className='custom-button__icon ml-2'><svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 0l-1.109 1.092 5.231 5.149H0v1.518h18.505l-5.23 5.15L14.382 14 20 8.471V5.53L14.383 0z" fill="currentColor"></path></svg></span> }
    </a>
    </>
    
  )
}

export default CustomButton
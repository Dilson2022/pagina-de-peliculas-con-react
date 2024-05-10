import React from 'react'
import {FaSpinner} from "react-icons/fa"
import Styles from "./Spinner.module.css"

const Spinner = () => {
  return (
    <div className={Styles.Spinner} > 
        <FaSpinner className={Styles.Spinning} size={60}/>
    </div>
  )
}

export default Spinner
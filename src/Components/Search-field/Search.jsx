import { useState } from 'react';
import 'w3-css/w3.css';
import CostumInput from './CostumInput';
const Search = () => {
  const [show, setShow] = useState([])
  const onShow = () => {
    setShow([...show, show.length])
    console.log(show.length)
  }
  return (
    <div className="w3-row-padding w3-center">
      <h2 className='w3-center'>Enter symptoms</h2>
      <button type='submit' className='w3-button w3-hover-teal w3-gray w3-center' onClick={onShow}>Add symptom</button>
      <div className='w3-center'>
        {show.map(x => (
          <CostumInput key={x}></CostumInput>
        ))}
      </div>
    </div>
  )
}

export default Search
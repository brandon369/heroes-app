import {useState} from 'react'

const UseForm = (initiaState = {}) => {

  const [values, setValues] = useState(initiaState)

  const reset = () => {
    setValues(initiaState);
  }

  const handleInputChange = ({target}) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }

  return [values, handleInputChange, reset]


}

export default UseForm

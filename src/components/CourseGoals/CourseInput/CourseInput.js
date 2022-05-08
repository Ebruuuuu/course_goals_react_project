import React, { useState } from 'react'

/* CSS Modules allows the scoping of CSS 
by automatically creating a unique classname */
import styles from './CourseInput.module.css'

import Button from '../../UI/Button/Button'

/* 
// FormControl component with styled-components
  const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? 'red' : 'black')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
    background: ${(props) => (props.invalid ? '#ffd7d7' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
` */

//CourseInput component
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isValid, setIsValid] = useState(true) //default state

  const formSubmitHandler = (event) => {
    event.preventDefault()

    if (enteredValue.trim().length === 0) {
      setIsValid(false) //isValid=false
      return //return'den sonrası execute edilmez.
    }
    if (enteredValue.trim().length > 0) {
      setIsValid(true) //isValid=true
    }

    props.onAddGoal(enteredValue)
  }
  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value)
  }
  // ``: template literal ( a JS feature)
  // template literal içerisinde "$" sign kullanılarak "invalid" class'ı dinamik hale getirildi.
  //styles.form-control: invalid property name
  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}></input>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  )
}

export default CourseInput

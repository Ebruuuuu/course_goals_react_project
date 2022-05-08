import React from 'react'
import './CourseGoalList.css'
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem'

const CourseGoalList = (props) => {
  /* React, "key" kullanılmadığı zaman bir array'in içerisindeki elemanları
     birbirine benzer olarak görür ve onları "unique" olarak tanımlayamaz.Bu durumda bug'lar
     ortaya çıkabilir.
     key sayesinde array elemanları React tarafından birbirinden net bir şekilde ayrılır.
     "map" metodu ile bir array'in elemanları listeleneceği zaman
     mutlaka key kullanılmalıdır. */
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem
          id={goal.id}
          key={goal.id}
          onDelete={props.onDeleteGoal}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  )
}
export default CourseGoalList

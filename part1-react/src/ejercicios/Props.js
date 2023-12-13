import React from 'react'

const Title = (props) =>  <h3>{props.course}</h3>

const Parts = (props) => {
  return(
    <>
      <p>{props.part1} <strong>{props.exercises1}</strong></p>
      <p>{props.part2} <strong>{props.exercises2}</strong></p>
      <p>{props.part3} <strong>{props.exercises3}</strong></p>
    </>
  )
}
const Suma = (props) => {
  const suma = props.exercises1 + props.exercises2 + props.exercises3;
  return(
    <>
      <p>Number of exercises <strong>{suma}</strong></p>
    </>
  )
}
const Props = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}/>
      <Parts part1={part1} exercises1={exercises1}/>
      <Parts part2={part2} exercises2={exercises2}/>
      <Parts part2={part3} exercises2={exercises3}/>
      <Suma exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default Props
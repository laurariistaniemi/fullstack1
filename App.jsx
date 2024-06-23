const Header = (props) => {
  console.log(props)
  return (
    <div>
      {props.course}
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.part1} {props.exercises1}
      {props.part2} {props.exercises2}
      {props.part3} {props.exercises3}
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      Number of exercises {props.total}
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <p>
      <Header course={course} />
      </p>
      <p>
      <Content part1={part1 + ' ' + exercises1}/>
      <Content part2={part2 + ' ' + exercises2}/>
      <Content part3={part3 + ' ' + exercises3}/>
      </p>
      <p>
      <Total total={exercises1 + exercises2 + exercises3}/>
      </p>
      
    
    </div>
  )
}

export default App
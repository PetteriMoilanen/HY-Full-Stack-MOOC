import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
  )
}


const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <p>no feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.total} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={props.percentage + " %"} />
      </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  
  const calculatePercentage = () => {
    const total = good + neutral + bad
    if (total === 0) {
      return 0
    }
    return (good / total) * 100
  }

  const addGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAverage((updatedGood - bad)/(total+1))
    setTotal(total + 1)
  }
  const addNeutral = () => {
    setNeutral(neutral + 1)
    setAverage((good - bad)/(total+1))
    setTotal(total + 1)
  }
  const addBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAverage((good - updatedBad)/(total+1))
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={addGood} text="good" />
      <Button onClick={addNeutral} text="neutral" />
      <Button onClick={addBad} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} percentage={calculatePercentage()} />
    </div>
  )
}

export default App
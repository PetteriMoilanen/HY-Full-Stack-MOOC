import { useState } from 'react'

const Statistic = (props) => {
  return (
    <div>{props.name} {props.count}</div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const addGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(total + 1)
    setAverage((updatedGood - bad)/total)
  }
  const addNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    setAverage((good - bad)/total)
  }
  const addBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(total + 1)
    setAverage((good - updatedBad)/total)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={addGood}>good</button>
      <button onClick={addNeutral}>neutral</button>
      <button onClick={addBad}>bad</button>
      <h1>Statistics</h1>
      <Statistic name="good" count={good} />
      <Statistic name="neutral" count={neutral} />
      <Statistic name="bad" count={bad} />
      <Statistic name="all" count={total} />
      <Statistic name="average" count={average} />

    </div>
  )
}

export default App
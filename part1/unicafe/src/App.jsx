import { useState } from 'react'

const CountElement = (props) => {
  return (
    <div>{props.name} {props.count}</div>
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
      <CountElement name="good" count={props.good} />
      <CountElement name="neutral" count={props.neutral} />
      <CountElement name="bad" count={props.bad} />
      <CountElement name="all" count={props.total} />
      <CountElement name="average" count={props.average} />
      <CountElement name="positive" count={props.percentage + " %"} />
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
      <button onClick={addGood}>good</button>
      <button onClick={addNeutral}>neutral</button>
      <button onClick={addBad}>bad</button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} percentage={calculatePercentage()} />
    </div>
  )
}

export default App
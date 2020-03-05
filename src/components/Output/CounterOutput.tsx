import React from 'react'
import './CounterOutput.css';

type Props = {
  value: number
  loading: boolean
}
const CounterOutput = ({value, loading}: Props) => {
  return (
    <div>
      <div className="CounterOutput"> Current Counter: {value} </div>
      <div className="CounterOutput"> Loading: {loading.toString()} </div>
    </div>
  )
}

export default CounterOutput

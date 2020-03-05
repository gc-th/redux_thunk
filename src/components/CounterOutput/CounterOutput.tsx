import React from 'react'
import './CounterOutput.css';

type Props = {
  value: number
}
const CounterOutput = ({value}: Props) => {
  return (
    <div className="CounterOutput">
      Current Counter: {value}
    </div>
  )
}

export default CounterOutput

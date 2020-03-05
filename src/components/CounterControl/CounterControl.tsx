import React from 'react'
import './CounterControl.css';


interface Props {
  label: string
  clicked: () => void
}

const CounterButton = ({ label, clicked }: Props) => {
  return (
    <div className="CounterControl" onClick={clicked}>
      {label}
    </div>
  )
}

export default CounterButton

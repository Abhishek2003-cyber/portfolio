import React from 'react'

export default function ExpressionEvaluation() {
    let x=15;
    let y=20;
  return (
    <div className='mt-4 text-center text-light bg-secondary'>
        <h1>Evaluation of Expression</h1>
        <h3>{x+" >"} {y+" :"} {(x>y)?"True":"False"}</h3>
    </div>
  )
}

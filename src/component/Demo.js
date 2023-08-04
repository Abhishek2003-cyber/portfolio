import React from 'react'
let arr=[
    {name:"Abhishek",branch:"CSE"},
    {name:"aman",branch:"CSE(DS)"},
    {name:"sachin",branch:"CSE(AI)"},
    {name:"arun",branch:"CSE(AI)"},
    {name:"karan",branch:"CSE(AI)"}
]
export default function Demo() {
  return (
    <div className='text-center mt-4 bg-success'>
    {
    arr.map(
        (obj)=>{
            return(
            <b>
                <p style={{color: "white"}}>Your Name is {obj.name} . And your branch is {obj.branch}</p>
            </b>
            )
        }
        )
    }
        </div>
  )
}

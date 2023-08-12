import React ,{useState} from 'react'

export default function Counter(props) {

    const [count , setCount] = useState(0);




    function Inc(){
       const newCount = count + 1
       setCount(newCount)
       console.log(newCount)




    }

    function Dec(){

        const newCount = count - 1
        setCount(newCount)
        console.log(newCount)

    }
  return (
    <>      

                Count:{count}
       
        <button onClick = {Inc}>Increment</button>
        <button onClick = {Dec}>Decrement</button>
    
    </>

  )
}

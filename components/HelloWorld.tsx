import { useState } from 'react'

export default function HelloWorld() {
  const [state, setState] = useState("world")
  const [input,setInput]=useState("")
  return (
    <section>
      <h1>Hello { state ?? 'world' }</h1>
      <input
        id="name"
        type="text"
        onChange={({target})=>setInput(target.value)}
      />
      <button onClick={()=>setState(input)}>Say Hello to</button>
    </section>
  )
}
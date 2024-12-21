import { useState } from "react"

function Form() {
  const [name, setName]= useState("Anik")
  const [person, setPerson]= useState({name: "Anik", age: 24})
  function onChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setPerson(p=> ({...p, name: event.target.value}))
  };
  function onChangeAge(event: React.ChangeEvent<HTMLInputElement>) {
    setPerson(p => ({...p, age: Number(event.target.value)}))
  }
  return (
    <>
      <div>Form</div>
      <div className="mb-3">
        <label  className="form-label">User Name</label>
        <input type="text" className="form-control" value={name} onChange={(e)=> setName(e.target.value)} />
        <div className="form-text">Your User Name is {name}</div>
      </div>
      <div className="mb-3">
        <label  className="form-label">Name</label>
        <input type="text" className="form-control" value={person.name} onChange={onChangeName} />
        <div className="form-text">Your Name is {person.name}</div>
      </div>
      <div className="mb-3">
        <label  className="form-label">Age</label>
        <input type="number" className="form-control" value={person.age} onChange={onChangeAge} />
        <div className="form-text">Your Age is {person.age}</div>
      </div>
    </>
  )
}

export default Form
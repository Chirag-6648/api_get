import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [rno, setrno] = useState("");
  const [address, setaddress] = useState("");
  const [currYear, setcurrYear] = useState("")
  const [result, setresult] = useState("");
  const inRef = useRef()
  const idRef = useRef()

  return (

    <div className="App">
      <form onSubmit={displayMsg}>
        <input type='number' placeholder='Enter your Id' className='id' name='id' onChange={(e) => setid(e.target.value)} /><br />
        <input type='name' placeholder="Enter your Name" className='name' name='name' onChange={(e) => setname(e.target.value)} /><br />
        <input type='number' placeholder='Enter your Roll no' className='rno' name='rno' onChange={(e) => setrno(e.target.value)} /><br />
        <input type='address' placeholder='Enter Your Address' className='address' name='address' onChange={(e) => setaddress(e.target.value)} /><br />
        <input type='number' placeholder='Enter Your current Year' className='currYear' name='currYear' onChange={(e) => setcurrYear(e.target.value)} /><br />
        <button onClick={saveData}>Insert Data</button>
      </form>
    </div>
  );

  function saveData() {
    let data = { id, name, rno, address, currYear }

    fetch(
      "http://localhost:5000/insert",
      {
        method: "post",
        headers: {
          "accept": "application/json",
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      }
    ).then(
      (res) => {
        res.json().then(
          (result) => {
            console.log(result)
          }
        )
      }
    )
  }
  function displayMsg(e) {
    e.preventDefault();
    setresult("Data Inserted SuccessFully")
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

}


export default App;

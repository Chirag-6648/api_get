import { useState } from "react";

export default function Update() {

    const [id, setid] = useState()
    const [user, setuser] = useState([]);
    function getData() {
        fetch("http://localhost:5000/" + id).then((result) => {
            result.json().then((res) => {
                setuser(res)
            })
        })
    }
    return (
        <div className="App">
            <h1>Update Data</h1>
            <input placeholder="Enter Your id" onChange={(e) => setid(e.target.value)} /><br /><br />
            <button onClick={getData}>Update Data</button>
            <table border="1" align='center'>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>rno</td>
                        <td>address</td>
                        <td>currYear</td>
                    </tr>
                    {
                        user.map((item, i) =>
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.rno}</td>
                                <td>{item.address}</td>
                                <td>{item.currYear}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
}

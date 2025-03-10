import { useEffect, useState } from "react";

export default function DeleteData() {
    const [user, setuser] = useState([])
    let [id, setid] = useState();
    let url = "http://localhost:5000/"
    let url2 = "http://localhost:5000/delete/"
    useEffect(() => {
        getlist();
    }, [])
    function clearData(e) {
        e.preventDefault();
        setid()
        window.location.reload();
    }
    function getlist() {
        fetch(url).then((result) => {
            result.json().then((res) => [
                setuser(res)
            ])
        })

    }

    function deleteUser() {
        fetch(url2 + id, {
            method: "DELETE",
            headers: {
                content: "application/json"
            }
        }).then(
            (res) => {
                res.json().then(
                    (result) => {
                        console.log(result)
                        alert(`data deleted successfully : ${id}`)
                    }
                )
            }
        )
    }
    return (
        <div><br /> <br />
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
            <center><br />
                <h1>Delete Data</h1>
                <form onSubmit={clearData}>
                    <input type="text" placeholder="Item ID" onChange={(e) => setid(e.target.value)} /><br /> <br />
                    <button onClick={deleteUser}>Delete Item</button>
                </form>
            </center>
        </div>


    )
}
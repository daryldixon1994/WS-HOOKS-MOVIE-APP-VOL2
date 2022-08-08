import React, { useState } from "react";
import "./App.css";
function App() {
    // const [persons, setPersons] = useState([{ name: "Anwar", age: 25 }]);
    // const changeName = () => {
    //     setPersons([...persons, { name: "Ala", age: 28 }]);
    // };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="App">
            <h1>APP COMPONENT</h1>
            {/* {console.log(persons)} */}
            {/* <button onClick={() => changeName()}>Click Me</button> */}
            <form>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    id=""
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
                <br />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    id=""
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                <h2> {email} </h2>
                <h2> {password} </h2>
            </form>
        </div>
    );
}

export default App;

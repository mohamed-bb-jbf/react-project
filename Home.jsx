import { useState } from "react";

const Home  = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(26);

    const handClick = () => {
        setName('nad');
        setAge(30);
        console.log('hellom moha');
    }
    return ( 
        <div className="home">
            <h2>homepage</h2>
            <p>{ name} is {age} years old</p>
            <button onClick={handClick}>Click me</button>
        </div>
     );
}
 
export default Home ;
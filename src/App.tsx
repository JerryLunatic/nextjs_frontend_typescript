import { useState, useEffect } from 'react';


export default function Home() {
    const [people, setPeople] = useState([{"name":"Test","address":"Test-add","contact":"Test-con"}]);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://test-backend/data');
            const data = await response.json();
            setPeople(data);
            console.log(data)
        }
        fetchData();
    }, []);


    return (
        <div>
            <h1>People</h1>
            <ul>
              {people.map((person, index) => (
                    <li key={index}>
                        <h2>{person.name}</h2>
                        <p>{person.address}</p>
                        <p>{person.contact}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

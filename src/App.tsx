import { useState, useEffect } from 'react';


export default function Home() {
    const [people, setPeople] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://test-backend:8080/data');
            const data = await response.json();
            setPeople(data);
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
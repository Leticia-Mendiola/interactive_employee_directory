import React, {useEffect, useState} from 'react'
import Personnel from '../components/Personnel'

const Home = () => {
    const [employeeList, setEmployeeList] = useState([])

    const callData = async () => {
        const res = await fetch("https://randomuser.me/api/?results=5000");
        const data = await res.json();
        setEmployeeList(data.results); 
    }

    useEffect(() => {
        callData();
    }, [])

    return (
        <Personnel employeeList={employeeList || []}/>
    )
}

export default Home;
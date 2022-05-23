import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useSelector } from 'react-redux';
import Profile from './Profile';
export default function Details({ data }) {
    const dataStudents = useSelector(state => state.students.dataStudents)
    const { name } = useParams()
    const detilsName = data.filter(nameelem => nameelem["Wie ben je?"] === name)
    const profile = dataStudents.filter(student => student.first_name === name)[0]

    return (
        <>
            <Link to="/">Home Page</Link>
            <div style={{ "overflow": "auto" }}>
                <BarChart
                    width={data.length > 0 && data.length > 50 && 5000}
                    height={300}
                    data={detilsName}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Welke opdracht of welk project lever je nu in?" />
                    <YAxis />
                    <Tooltip />

                    <Bar dataKey="Hoe leuk vond je deze opdracht?" fill="blue" />
                    <Bar dataKey="Hoe moeilijk vond je deze opdracht?" fill="red" />
                    <Bar dataKey="Wie ben je?" fill="green" />

                </BarChart>

            </div>
            {data.length > 0 && <Profile profile={profile} />}
        </>
    )
}

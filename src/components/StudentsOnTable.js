import React from 'react'
import { useSelector } from 'react-redux'

export default function StudentsOnTable({ data }) {
    const status = useSelector(state => state.students.status.checked)

    return (
        <>

            {status && data.length > 0 && <table border="6">
                <thead>
                    <tr>
                        <th>Wie ben je?</th>
                        <th>Welke opdracht of welk project lever je nu in?</th>
                        <th>Hoe moeilijk vond je deze opdracht?</th>
                        <th>Hoe leuk vond je deze opdracht?</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <tr>
                                    <td>{item["Wie ben je?"]}</td>
                                    <td>{item["Welke opdracht of welk project lever je nu in?"]}</td>
                                    <td>{item["Hoe moeilijk vond je deze opdracht?"]}</td>
                                    <td>{item["Hoe leuk vond je deze opdracht?"]}</td>
                                </tr>
                            </React.Fragment>
                        )
                    })}

                </tbody>
            </table>}
        </>
    )
}

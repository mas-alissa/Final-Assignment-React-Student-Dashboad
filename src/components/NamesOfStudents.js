import React from 'react'
import { Link } from 'react-router-dom'


export default function NamesOfStudents({ data }) {

    let names = []

    let allNames = data.map(item => item["Wie ben je?"])

    allNames.forEach(name => {
        if (names.indexOf(name) === -1) {
            names.push(name)
        } else {
            return null
        }
    })

    const allNamesWithAlpha = names.map(name => name).sort((a, b) => a > b ? 1 : a < b ? -1 : 0)

    return (
        <ul>
            {allNamesWithAlpha.map(name => {
                return (
                    <li key={name}><Link to={`/${name}`}>{name}</Link></li>

                )
            })}
        </ul>
    )

}

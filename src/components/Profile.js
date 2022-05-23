import React from 'react'

export default function Profile({ profile }) {
    const { first_name, last_name, age, phoneNumber, email, photo } = profile
    return (
        <table border="5">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>E-Mail</th>
                    <th>Phone Number</th>
                    <th>Photo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                    <td>{phoneNumber}</td>
                    <td><img src={photo} /></td>
                </tr>
            </tbody>

        </table>
    )
}



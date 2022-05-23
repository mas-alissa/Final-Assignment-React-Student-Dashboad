import React from 'react'

// Style
import "../styles/formInputFile.css"
export default function FormInputFile({ parseFile }) {
    return (
        <div>
            <form>
                <input type="file" onChange={(e) => parseFile(e)} />
                <h5 className='styleNote'>Add file with extention .CSV</h5>
            </form>

        </div>
    )
}

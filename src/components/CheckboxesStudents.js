import React from 'react'
import { useDispatch } from 'react-redux'
import { ChangeCheckBox } from '../redux/StudentsChart'
export default function CheckboxesStudents({ data }) {
    const dispatch = useDispatch()
    const names = [
        {name:"Aranka"},
        {name:"Evelyn"},
        {name:"Floris"},
        {name:"Hector"},
        {name:"Martina"},
        {name:"Maurits"},
        {name:"Rahima"},
        {name:"Sandra"},
        {name:"Storm"},
        {name:"Wietske"},
    ]
    return (
        <>
        
            {data.length > 0 && <fieldset>
                <legend>Choose any of the students below in order to view the relevant student's level</legend>
                <form>
                {names.map((namex,index) => {
                    const {name} = namex
                    return (
                         <React.Fragment key={index}>
                         <input type="checkbox"  onChange={(e) => dispatch(ChangeCheckBox({checked:e.target.checked,name:e.target.name}))} name={name} id={name} />
                        <label htmlFor={name}>{name}</label>
                         </React.Fragment>
                    )
                })}
           
        </form>
            </fieldset>}
         
        </>
    )
}
// 
// 
// 
// 
// 
// 
// 

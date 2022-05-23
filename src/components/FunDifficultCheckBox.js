import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { funOfDif } from '../redux/StudentsChart'
export default function FunDifficultCheckBox() {
    const data = useSelector(state => state.students.funOrDiffcult)
    const dispatch = useDispatch()

    // const funOrDif = [{ name: "fun", checked: false },
    // { name: "difficult", checked: false },]
    return (
        <>
            <fieldset>
                <legend>Chose type of search</legend>
                <form>
                    {data.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <input type="checkbox" onChange={(e) => dispatch(funOfDif({ name: e.target.name, checked: e.target.checked }))} id={item.name} name={item.name} />
                                <label htmlFor={item.name}>{item.name}</label>
                            </React.Fragment>
                        )
                    })}


                </form>
            </fieldset>
        </>
    )
}

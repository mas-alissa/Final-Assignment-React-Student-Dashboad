import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatus,
  ChangeCheckBox,
  searchByName,
} from "../redux/StudentsChart";
// style
import "../styles/checkboxtable.css";
export default function CheckBoxTable() {
  const status = useSelector((state) => state.students.status.checked);
  const searchValue = useSelector((state) => state.students.searchValue);

  const dispatch = useDispatch();

  const checkBoxHandler = (e) => {
    dispatch(changeStatus(e.target.checked));
    dispatch(ChangeCheckBox({ name: "clear" }));
  };
  return (
    <fieldset>
      <legend>Do you want to see students on table?</legend>
      <form id="sent" onSubmit={(e) => dispatch(searchByName(e.target.id))}>
        <input
          type="checkbox"
          name="table"
          id="table"
          onChange={checkBoxHandler}
        />
        <label htmlFor="table">Yes , I want</label>
        <label className="marginLeft" htmlFor="search">
          Search :{" "}
        </label>
        <input
          disabled={!status}
          value={!status ? "" : searchValue}
          type="search"
          onChange={(e) => dispatch(searchByName(e.target.value))}
          name="search"
          id="search"
        />
        <abbr className="emoj" title="Search by name of student">
          {" "}
          💡
        </abbr>
      </form>
    </fieldset>
  );
}

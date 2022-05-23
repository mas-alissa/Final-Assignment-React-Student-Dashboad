import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../redux/StudentsChart";
import Papa from "papaparse";
import AllStudentsChart from "./AllStudentsChart";
import NamesOfStudents from "./NamesOfStudents";
import FormInputFile from "./FormInputFile";
import CheckboxesStudents from "./CheckboxesStudents";
import FunDifficultCheckBox from "./FunDifficultCheckBox";
import StudentsOnTable from "./StudentsOnTable";
import CheckBoxTable from "./CheckBoxTable";
import AvarageChart from "./AvarageChart";

export default function Home({ data }) {


  const studentsChecked = useSelector(
    (state) => state.students.studentsChecked
  );
  const funOrDiffcult = useSelector((state) => state.students.funOrDiffcult);
  const status = useSelector((state) => state.students.status.checked);

  const details = useSelector((state) => state.students.studentDetiels);
  const filteredArray = useSelector((state) => state.students.filteredArray);

  const dispatch = useDispatch();
  const parseFile = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: ({ data }) => {
    
        data.sort((a, b) =>
          a["Wie ben je?"] > b["Wie ben je?"]
            ? 1
            : a["Wie ben je?"] < b["Wie ben je?"]
              ? -1
              : 0
        );
        dispatch(getStudents(data));
      },
    });
  };

 
  return (
    <>
      {data.length > 0 && <CheckBoxTable />}
      <StudentsOnTable data={filteredArray.length > 0 ? filteredArray : data} />
      {!status && data.length === 0 && <FormInputFile parseFile={parseFile} />}

      {!status && (
        <>
          <AllStudentsChart
            funOrDiffcult={funOrDiffcult}
            data={details.length > 0 ? details : data}
            width={details.length}
          />


        </>
      )}
      {data.length > 0 && !status && <FunDifficultCheckBox />}
      {!status && (
        <CheckboxesStudents data={data} studentsChecked={studentsChecked} />
      )}
      {data.length > 0 && !status && <AvarageChart data={data} />}

      {!status && <NamesOfStudents data={data} />}


    </>
  );
}

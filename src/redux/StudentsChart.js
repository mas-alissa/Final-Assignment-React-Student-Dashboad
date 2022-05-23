import { createSlice } from "@reduxjs/toolkit";
import { dataStudents } from "../dataStudents";

export const StudentsChart = createSlice({
  name: "studentChart",
  initialState: {
    students: [],
    studentDetiels: [],
    funOrDiffcult: [
      { name: "fun", checked: false },
      { name: "difficult", checked: false },
    ],
    status: { checked: false },
    filteredArray: [],
    dataStudents,
    searchValue: ""
  },

  reducers: {
    getStudents: (state, action) => {
      state.students = action.payload;
    },
    ChangeCheckBox: (state, action) => {
      if (action.payload.checked === true) {
        let newArray = state.students.filter(
          (student) => student["Wie ben je?"] === action.payload.name
        );
        state.studentDetiels.push(...newArray);
      } else if (action.payload.checked === false) {
        let newArray = state.studentDetiels.filter(
          (student) => student["Wie ben je?"] !== action.payload.name
        );
        state.studentDetiels = newArray;
      } else if (action.payload.name === "clear") {
        state.studentDetiels = [];
      }
    },
    funOfDif: (state, action) => {
      if (
        state.funOrDiffcult.findIndex(
          (item) => item.name === action.payload.name
        ) === -1
      ) {
        state.funOrDiffcult.push(action.payload);
      } else {
        let index = state.funOrDiffcult.findIndex(
          (item) => item.name === action.payload.name
        );
        state.funOrDiffcult[index].checked =
          !state.funOrDiffcult[index].checked;
      }
    },
    changeStatus: (state, action) => {
      state.status.checked = action.payload;
    },
    searchByName: (state, action) => {
      let searchName = action.payload;
      state.searchValue = searchName
      let newArray = state.students.filter((item) =>
        item["Wie ben je?"].toLowerCase().startsWith(searchName.toLowerCase())
      );
      state.filteredArray = newArray;

    },
  },
});

export const {
  getStudents,
  ChangeCheckBox,
  funOfDif,
  changeStatus,
  searchByName,
} = StudentsChart.actions;
export default StudentsChart.reducer;

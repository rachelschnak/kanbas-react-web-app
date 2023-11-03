import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";
const initialState = {
    assignments: db.assignments,
    assignment: { title: "New Assignment 123", description: "New Description", dueDate: "2023-12-15", availableFromDate: "2023-09-15"},
};
const assignmentsSlice = createSlice({
                                     name: "assignments",
                                     initialState,
                                     reducers: {
                                         addAssignment: (state, action) => {
                                             state.assignments = [
                                                 { ...action.payload, _id: new Date().getTime().toString() },
                                                 ...state.assignments,
                                             ];
                                             state.assignment = { title: "New Assignment 123", description: "New Description", dueDate: "2023-12-15", availableFromDate: "2023-09-15"}
                                             },
                                         deleteAssignment: (state, action) => {
                                             state.assignments = state.assignments.filter(
                                                 (assignment) => assignment._id !== action.payload
                                             );
                                         },
                                         updateAssignment: (state, action) => {
                                             state.assignments = state.assignments.map((assignment) => {
                                                 if (assignment._id === action.payload._id) {
                                                     return action.payload;
                                                 } else {
                                                     return assignment;
                                                 }
                                             },
                                             state.assignment = { title: "New Assignment 123", description: "New Description", dueDate: "2023-12-15", availableFromDate: "2023-09-15"}
                                             ); },
                                         selectAssignment: (state, action) => {
                                             state.assignment = action.payload;
                                         },

                                        }
                                 });
export const { addAssignment, deleteAssignment,
    updateAssignment, selectAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
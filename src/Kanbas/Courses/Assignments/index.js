import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import {AiOutlineCheckCircle, AiOutlinePlus} from "react-icons/ai";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import {
    selectAssignment,
    deleteAssignment
} from "./assignmentsReducer";



function Assignments() {
    const { courseId } = useParams();
    ///const assignments = db.assignments;
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const courseAssignments = useSelector((state) => state.assignmentsReducer.assignments.filter((assignment) => assignment.course === courseId));
    const dispatch = useDispatch();

    function confirmDelete(assignment) {
        if (window.confirm('Confirm deletion of assignment')) {
            return dispatch(deleteAssignment(assignment._id));
        }
    }

    return (
        <div className="wd-assignment-content">
            <div className="wd-kanbas-assignment-buttons-main ">
                <a className="list-group-item wd-kanbas-assignment-button-main btn-light float-none" role="button"> Group</a>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/NewAssignment`}>
                    <a className="list-group-item wd-kanbas-assignment-button-main wd-red-button float-none" role="button" onClick={() => dispatch(selectAssignment(assignment))}>
                        <AiOutlinePlus />  Assignment</a></Link>
                <a className="list-group-item wd-kanbas-assignment-button-main btn-light float-none" role="button"> <BiDotsVerticalRounded /></a>
            </ div>
            <hr/>


            <div className="list-group wd-assignment-list">

                <div className="list-group-item wd-assignment-header">ASSIGNMENTS</div>
                {courseAssignments.map((assignment) => (

                    <Link className="list-group-item wd-assignment-list-item d-inline-block"
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                         onClick={(e) => dispatch(selectAssignment(assignment))}>
                        {assignment.title}
                        <button className="btn btn-danger me-2 float-end" onClick={(event) => {confirmDelete(assignment); event.preventDefault();}}>Delete</button>

                    </Link>


                ))}

            </div>

            <div className="list-group wd-assignment-list">
                <div className="list-group-item wd-assignment-header">QUIZZES</div>
            </div>
        </div>
    );
}
export default Assignments;
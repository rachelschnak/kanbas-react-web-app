import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import {AiOutlineCheckCircle, AiOutlinePlus} from "react-icons/ai";
import {BiDotsVerticalRounded} from "react-icons/bi";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="wd-assignment-content">
            <div className="wd-kanbas-assignment-buttons-main ">
                <a className="list-group-item wd-kanbas-assignment-button-main btn-light float-none" role="button"> Group</a>
                <a className="list-group-item wd-kanbas-assignment-button-main wd-red-button float-none" role="button"><AiOutlinePlus />  Assignment</a>
                <a className="list-group-item wd-kanbas-assignment-button-main btn-light float-none" role="button"> <BiDotsVerticalRounded /></a>
            </ div>
            <hr/>


            <div className="list-group wd-assignment-list">
                <div className="list-group-item wd-assignment-header">ASSIGNMENTS</div>
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item wd-assignment-list-item">
                        {assignment.title}
                    </Link>
                ))}
            </div>

            <div className="list-group wd-assignment-list">
                <div className="list-group-item wd-assignment-header">QUIZZES</div>
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item wd-assignment-list-item">
                        {assignment.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;
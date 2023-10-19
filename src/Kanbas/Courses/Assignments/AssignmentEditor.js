import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import AssignmentEditorFields from "./AssignmentEditorFields";
import {BiDotsVerticalRounded, BiSolidCheckCircle} from "react-icons/bi";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="wd-assignment-content">
            <div className="wd-kanbas-assignment-buttons-main ">
                <a className="list-group-item wd-kanbas-assignment-button-main btn-light float-none wd-nobutton" role="button"><span className="wd-green-icon"><BiSolidCheckCircle /></span> Published</a>
                <a className="list-group-item wd-kanbas-assignment-button-main btn-light float-none" role="button"> <BiDotsVerticalRounded /></a>
            </ div>
            <hr/>
            <h4>Assignment Name</h4>

            <input value={assignment.title}
                   className="form-control mb-2" />
            <AssignmentEditorFields />
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn btn-danger">
                Cancel
            </Link>
            {/* <Link onClick={handleSave}
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-success me-2">
        Save
      </Link> */}
            <button onClick={handleSave} className="btn btn-success me-2">
                Save
            </button>



        </div>

    );
}


export default AssignmentEditor;
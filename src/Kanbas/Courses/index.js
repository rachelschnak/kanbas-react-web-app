import {Navigate, Route, Routes, useParams} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import "./index.css"
import db from "../Database";
import Home from "./Home";
import Grades from "./Grades";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Modules from "./Modules";
import CourseTopNavBar from "./CourseTopNavBar";

function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div className={"wd-course-nav-bar"}>
            <CourseTopNavBar />
            <CourseNavigation />
            <div>
                <div className="overflow-y-scroll position-fixed bottom-0 end-0" style={{  left: "320px", top: "50px"}} >
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path=":courseId" element={<Home />}/>
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor />}/>
                    <Route path="Grades" element={<Grades />} />
                </Routes>
                </div>
            </div>
        </div>

    )
}
export default Courses
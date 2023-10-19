import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
function Dashboard() {
    const courses = db.courses;


    return (
        <div className="wd-kanbas-dashboard">
            <h1>Dashboard</h1>
            <hr/>
            <h2>Published Courses ({courses.length})</h2>
            <div className="card-deck wd-kanbas-dashboard-grid ">
            <div className="row row-cols-sm-1 row-cols-md-3 g-4 wd-carddeck-row" >
                <div className="col">
                    {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card">
                        {<img src="https://informationage-production.s3.amazonaws.com/uploads/2022/10/forget-digital-transformation-data-transformation-is-what-you-need.jpg" className="card-img-top" />}
                        <p className="card-title">{course.number} {course.name} </p>
                        <p className="card-text">{course.number}.{course._id}.{course.startDate}</p>
                        <p className="card-text wd-kanbas-dashboard-card-subtext">{course.startDate} Fall 2023 Semester Full Term</p>
                    </Link> ))}

                </div>
            </div>
            </div>
        </div>
    ); }
export default Dashboard;
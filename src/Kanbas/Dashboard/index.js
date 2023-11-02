import {React, useState} from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
function Dashboard({courses, course, setCourse, addNewCourse,
                        deleteCourse, updateCourse }) {

    return (
        <div className="wd-kanbas-dashboard">
            <h1>Dashboard</h1>
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control"
                   onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <hr/>
            <h2>Published Courses ({courses.length})</h2>

            <button className="btn btn-success" onClick={addNewCourse} >Add</button>
            <button className="btn btn-primary" onClick={updateCourse} >
                Update
            </button>


            <div className="list-group">
                    {courses.map((course) => (
                    <Link key={course._id}
                          to={`/Kanbas/Courses/${course._id}`}
                          className="list-group-item">
                        {course.name}
                        <div className="wd-dashboard-button">
                        <button className="btn btn-warning"
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                }}>
                            Edit
                        </button>

                        <button className="btn btn-danger"
                            onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                            }}>
                            Delete
                        </button>

                        </div>


                    </Link> ))}

            </div>
        </div>
    ); }
export default Dashboard;
import {React, useState} from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
function Dashboard({courses, course, setCourse, addNewCourse,
                        deleteCourse, updateCourse }) {

    return (
        <div className="wd-kanbas-dashboard">
            <h1>Dashboard</h1>
            <hr/>
            <h2>Published Courses ({courses.length})</h2>
            <hr/>
            <h5>Course</h5>
            <div className="wd-module-list">
                <div className="wd-edit-modules row">
            <input value={course.name} className="form-control"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control"
                   onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

            <div className="wd-module-edit-buttons">
                <button className="btn btn-primary float-end" onClick={updateCourse} >
                    Update
                </button>
                        <button className="btn btn-success float-end" onClick={addNewCourse} >Add</button>
            </div>
                </div>
            <div className="list-group row">

                    {courses.map((course) => (
                    <Link key={course._id}
                          to={`/Kanbas/Courses/${course._id}`}
                          className="list-group-item">
                        {course.name}
                        <div className="wd-dashboard-button d-inline-block float-end">
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
        </div>
    ); }
export default Dashboard;
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Account from "./Account";
import Courses from "./Courses";
import Calendar from "./Calendar";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
function Kanbas() {
    const [courses, setCourses] = useState(db.courses);

    const [course, setCourse] = useState({
                                             name: "New Course", number: "New Number",
                                             startDate: "2023-09-10", endDate: "2023-12-15",
                                         });

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                            if (c._id === course._id) {
                                return course;
                            } else {
                                return c;
                            }}))};
    const addNewCourse = () => {
        setCourses([...courses, {...course, _id: new Date().getTime().toString() }]);
    };
    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    return (
        <Provider store={store}>
        <div className="d-flex">
            <KanbasNavigation />
            <div className="container-fluid">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account/*" element={<Account />} />
                    <Route path="Dashboard" element={
                        <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}/>
                    } />
                    <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                    <Route path="Calendar" element={<Calendar />} />
                    <Route path="Inbox" element={<h1>Inbox</h1>} />
                    <Route path="History" element={<h1>History</h1>} />
                    <Route path="Studio" element={<h1>Studio</h1>} />
                    <Route path="Commons" element={<h1>Commons</h1>} />
                    <Route path="Help" element={<h1>Help</h1>} />
                </Routes>
            </div>
        </div>
        </Provider>
            ); }
export default Kanbas;


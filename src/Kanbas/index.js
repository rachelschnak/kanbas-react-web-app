import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calendar from "./Calendar";
import axios from "axios";
import {useEffect, useState} from "react";
import store from "./store";
import { Provider } from "react-redux";
import Signin from "./users/signin";
import UserTable from "./users/table";
import Account from "./users/account.js"
import UserList from "./users/list";
import UserDetails from "./users/details";
import Signup from "./users/signup";
import Search from "./users/search";
import "dotenv/config";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    //const URL = "http://localhost:4000/api/courses";
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/courses`;

    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const [course, setCourse] = useState({
                                             name: "New Course", number: "New Number",
                                             startDate: "2023-09-10", endDate: "2023-12-15",
                                         });

    const updateCourse = async () => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return response.data;
                } else {
                    return c;
                }}))
        setCourse({ name: ""});
    };

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([response.data, ...courses]);
        setCourse({ name:"" })
    };
    const deleteCourse = async (course_id) => {
        const response = await axios.delete(
            `${URL}/${course_id}`
        );
        setCourses(courses.filter((c) => c._id !== course_id));
    };

    const resetCourse = () => setCourse({
                                            name: "New Course", number: "New Number",
                                            startDate: "2023-09-10", endDate: "2023-12-15",
                                        });

    return (
        <Provider store={store}>
        <div className="d-flex">
            <KanbasNavigation />
            <div className="container-fluid wd-kanbas-main">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Dashboard" element={
                        <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        resetCourse={resetCourse}/>
                    } />
                    <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                    <Route path="Calendar" element={<Calendar />} />
                    <Route path="Inbox" element={<h1>Inbox</h1>} />
                    <Route path="History" element={<h1>History</h1>} />
                    <Route path="Studio" element={<h1>Studio</h1>} />
                    <Route path="Commons" element={<h1>Commons</h1>} />
                    <Route path="Help" element={<h1>Help</h1>} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/admin/users" element={<UserTable />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/users/:id" element={<UserDetails />} />
                    <Route path="/account/:id" element={<Account />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </div>
        </div>
        </Provider>
            ); }
export default Kanbas;


import ModuleList from "../Modules/ModuleList";
import CourseStatus from "./CourseStatus";
import "./index.css"
import {BiDotsVerticalRounded, BiTargetLock} from "react-icons/bi";
import {AiOutlineBell, AiOutlineCheckCircle, AiOutlinePlus} from "react-icons/ai";
import db from "../../Database";
import {Link} from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Home() {
    const assignments = db.assignments;
    return (
        <div className="row">
            <div className="col-10">
                <div className="container flex-grow">
                <div className="wd-kanbas-home-buttons-main">
                    <a className="list-group-item wd-kanbas-home-button-main btn-light" role="button"> Collapse All</a>
                    <a className="list-group-item wd-kanbas-home-button-main wd-published-button btn-light" role="button">  View Progress</a>
                    <div className="dropdown">
                        <button className="btn btn-light wd-kanbas-home-button-main dropdown-toggle"  type="button"
                                data-bs-toggle="dropdown" aria-expanded="false"><AiOutlineCheckCircle /> Publish All
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item wd-not-red-links" >Publish
                                All</a></li>
                            <li><a className="dropdown-item wd-not-red-links" >Publish all
                                items and modules</a></li>
                            <li><a className="dropdown-item wd-not-red-links" >Unpublish</a>
                            </li>
                        </ul>
                    </div>
                    <a className="list-group-item wd-kanbas-home-button-main wd-published-button wd-red-button" role="button"><AiOutlinePlus />  Module</a>
                    <a className="list-group-item wd-kanbas-home-button-main btn-light" role="button"> <BiDotsVerticalRounded /></a>
                </ div>
                </div>
                    <hr />
                <div className="wd-kanbas-home-main-list">
                    <ModuleList />
                </div>
            </div>
              <CourseStatus />
        </div>
    );
}
export default Home;
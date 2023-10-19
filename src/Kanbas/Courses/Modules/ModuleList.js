import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {BiSolidCheckCircle} from "react-icons/bi";
import {PiDotsSixVerticalBold} from "react-icons/pi";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <ul className="list-group">
            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item wd-module-item">
                            <div className="wd-module-titles">
                                <div className="col">
                                <PiDotsSixVerticalBold />
                                 {module.name} </div>
                                <div className="col wd-right-icon">
                                    <span className="wd-green-icon wd-right-icon"><BiSolidCheckCircle /></span>

                                </div>
                            </div>
                            <p>{module.description}</p>
                            {
                                module.lessons && (
                                                   <ul className="list-group">
                                                       {
                                                           module.lessons.map((lesson, index) => (
                                                               <li key={index} className="list-group-item">
                                                                   <h4>{lesson.name}</h4>
                                                                   <p>{lesson.description}</p>
                                                               </li>
                                                           ))
                                                       }
                                                   </ul>
                                               )
                            }
                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;
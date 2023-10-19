import { Link, useLocation } from "react-router-dom";
import {BiSolidUserCircle} from "react-icons/bi";
import {TfiDashboard} from "react-icons/tfi";
import {LuBookMinus} from "react-icons/lu";
import {FaRegCalendarAlt} from "react-icons/fa";
import {SlEnvolopeLetter} from "react-icons/sl";
import {AiOutlineClockCircle} from "react-icons/ai";
import {PiProjectorScreenChartBold} from "react-icons/pi";
import {FaArrowRightToBracket} from "react-icons/fa6";
import "./index.css";
import {BsQuestionCircle} from "react-icons/bs";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const linkToIconMap = {
        Account: <BiSolidUserCircle className="wd-icon wd-account-icon" />,
        Dashboard: <TfiDashboard className="wd-icon" />,
        Courses: <LuBookMinus className="wd-icon" />,
        Calendar : <FaRegCalendarAlt className="wd-icon" />,
        Inbox: <SlEnvolopeLetter className="wd-icon" />,
        History: <AiOutlineClockCircle className="wd-icon" />,
        Studio: <PiProjectorScreenChartBold className="wd-icon" />,
        Commons: <FaArrowRightToBracket className="wd-icon" />,
        Help: <BsQuestionCircle className="wd-icon" />
    };
    const { pathname } = useLocation();
    return (
        <div className="list-group wd-kanbas-navigation d-none d-md-block wd-course-top-nav-bar-large wd-main-nav-bar">
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    {linkToIconMap[link]}
                    {link}
                </Link>
            ))}
        </div>
    ); }
export default KanbasNavigation;
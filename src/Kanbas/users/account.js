import * as client from "./client";
import { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Account() {
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        //try {
            const account = await client.account();
            setAccount(account);
        //} //catch () {
            //navigate("/kanbas/signin")
        //}
        if (account == null) {
           navigate("/kanbas/signin")
        }
    };
    const save = async () => {
        await client.updateUser(account._id, account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/kanbas/signin");
    };

    useEffect(() => {
        fetchAccount();
    }, []);

    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <input value={account.password}
                           onChange={(e) => setAccount({ ...account,
                                                           password: e.target.value })}/>
                    <input value={account.firstName}
                           onChange={(e) => setAccount({ ...account,
                                                           firstName: e.target.value })}/>
                    <input value={account.lastName}
                           onChange={(e) => setAccount({ ...account,
                                                           lastName: e.target.value })}/>
                    <input value={account.dob}
                           onChange={(e) => setAccount({ ...account,
                                                           dob: e.target.value })}/>
                    <input value={account.email}
                           onChange={(e) => setAccount({ ...account,
                                                           email: e.target.value })}/>
                    <select value={account.role} onChange={(e) => setAccount({ ...account,
                                                            role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>

                    <button onClick={save}>
                        Save
                    </button>
                    <button onClick={signout}>
                        Signout
                    </button>
                    {account.role === "ADMIN" && (
                    <Link to="/kanbas/admin/users" className="btn btn-warning w-100">
                        Users
                    </Link>
                               )}
                </div>
            )} </div>
    ); }
export default Account;
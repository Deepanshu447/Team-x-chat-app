import React, { useState } from "react";
import QuickStart from "./components/QuickStart";

const Logincon = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState("");

    const correctpassword = "Deeps2001"

    function sethandle() {

        if (password === correctpassword) {
            setIsLoggedIn(true);
        }
        else {
            setIsLoggedIn(false);
            alert("wrong password")
        }
    }
    return (
        <div className="p-4">
            {isLoggedIn ? (
                <div>
                    <h1>Welcome back, user!</h1>
                    <QuickStart />
                </div>
            ) : (
                <div>
                    <input className="border outline " type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <h1>Please Login IN</h1>
                </div>
            )}

            <button
                onClick={() => sethandle()}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                click
            </button>
        </div>
    );
}

export default Logincon
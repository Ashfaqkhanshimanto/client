import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Root() {
    return (
        <div className="layout">
            <Navigation />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};
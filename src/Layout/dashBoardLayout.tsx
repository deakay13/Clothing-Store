import { Header, SideBar } from "../Component/dashBoardIndex";
import { Outlet } from "react-router-dom";

export default function DashBoardLayout() {
    
    return (
        <div className="d-flex min-vh-100">
            <SideBar />
            <div className="flex-grow-1">
            <Header />
            <Outlet />
            </div>
        </div>
    );
}

import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div>
            <div>
                {/* sidebar */}
            </div>
            
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;
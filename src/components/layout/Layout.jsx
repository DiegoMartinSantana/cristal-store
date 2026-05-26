import Header from "./Header";
import Footer from "./Footer"
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header/>
                <main className="flex-1 p-8 max-w-7xl mx-auto">{<Outlet />}</main>
                <Footer/>
            </div>
        </>)
}
export default Layout;
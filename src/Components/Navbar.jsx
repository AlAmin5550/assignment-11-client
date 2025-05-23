
import logo from "../assets/svgs/5494526-ai.svg"
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import personIcon from "../assets/svgs/silhouette-male-icon.svg"
import toast from "react-hot-toast";
import { AuthContext } from "../Providers/AuthProvider";


const Navbar = () => {
    const navigate = useNavigate();
    const { user, logOut, loading } = useContext(AuthContext);
    if (loading) {
        return  <span className="loading loading-ring loading-lg"></span>;
    }
    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success("Sign out successful");
                navigate("/");

            }).catch(() => {

            });
    }

    const links =
        <>

            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/blogs">Blogs</NavLink></li>
            <li><NavLink to="/allJobs">All Jobs</NavLink></li>
            {
                user?.email ? <> 
                    <li><NavLink to="/appliedJobs">Applied</NavLink></li>
                    <li><NavLink to="/addJobs">Add Jobs</NavLink></li>
                    <li><NavLink to="/myJobs">My Jobs</NavLink></li>
                    </> : ""
            }

        </>


    return (
        <div>
            <div className="navbar bg-white text-[#A7ACB2]  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}

                        </ul>
                    </div>
                    <div className="flex">
                        <img className="w-12 h-12  " src={logo} alt="" />
                        <a className="btn btn-ghost text-[#23A2FF] text-2xl font-extrabold">goFind</a>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {

                            user ? <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user ? <img className="w-12 h-12 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-default-600 ring-offset-gray-100" src={user.photoURL} alt="img not found" /> : <img src={personIcon} />
                                        }
                                    </div>
                                </div>
                                {
                                    user ? <ul tabIndex={0} className="mt-3 z-[999] p-2  shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-[#063970]">
                                        <li>
                                            <a className="justify-between">
                                                {user.displayName}

                                            </a>
                                        </li>
                                        <li><a onClick={handleSignOut}>Logout</a></li>
                                    </ul> : ""
                                }

                            </div> : <div className="flex"><Link to="/login"><button className="btn btn-sm btn-ghost">Login</button></Link><Link to="/signUp"><button className="btn btn-sm btn-ghost">Sign up</button></Link></div>

                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;
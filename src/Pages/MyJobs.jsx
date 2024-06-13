import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { GrUpdate } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { isPending, isError, error, data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/jobs`)
            return res.json();
        }
    })
    if (isPending) {
        return <span className="loading loading-ring loading-lg"></span>;
    }
    if (isError) {
        return <p>{error.message}</p>
    }
    const userJobs = jobs.filter(job => job.contactEmail == user?.email);
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/jobs/${_id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // reload
                            window.location.reload(false)
                        }
                    })
            }
        });
    }
    const handleUpdate = _id => {
        navigate(`/updateJob/${_id}`)

    }
    return (
        <div className="container mx-auto lg:max-w-7xl">
            <div className="flex flex-col max-w-3xl p-6 container mx-auto space-y-4 sm:p-10 bg-gray-50 text-gray-800">
                <h2 className="text-xl font-semibold">Your Posted Jobs</h2>
                <ul className="flex flex-col divide-y divide-gray-300">
                    {
                        userJobs.map(job => <li key={job._id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                            <div className="flex w-full space-x-2 sm:space-x-4">
                                <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={job.companyBanner} alt="Polaroid camera" />
                                <div className="flex flex-col justify-between w-full pb-4">
                                    <div className="flex justify-between w-full pb-2 space-x-2">
                                        <div className="space-y-1">
                                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">{job.jobTitle}</h3>
                                            <p className="text-sm text-gray-600">at <span className="font-semibold">{job.companyName}</span></p>
                                        </div>
                                    </div>
                                    <div className="flex text-sm divide-x">
                                        <button onClick={() => handleDelete(job._id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1" >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                <rect width="32" height="200" x="168" y="216"></rect>
                                                <rect width="32" height="200" x="240" y="216"></rect>
                                                <rect width="32" height="200" x="312" y="216"></rect>
                                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                            </svg>
                                            <span>Remove</span>
                                        </button>
                                        <button onClick={() => handleUpdate(job._id)} type="button" className="flex items-center px-2 py-1 space-x-1">
                                            <GrUpdate></GrUpdate>
                                            <span>Update</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default MyJobs;
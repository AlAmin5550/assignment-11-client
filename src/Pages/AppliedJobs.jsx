
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import AppliedJobsCards from "../Components/AppliedJobsCards";


const AppliedJobs = () => {
    const {user } = useContext(AuthContext);
    const [applied,setApplies] = useState([]);
    const url = `/applied?email=${user?.email}`;
    const axiosSecure = useAxiosSecure();
    useEffect(()=>{
        axiosSecure(url)
        .then(res=>{
            setApplies(res.data)
        })
    },[url,axiosSecure]);
    
    
    return (
        <div className="container mx-auto max-w-5xl">
            <h1 className="text-5xl  font-bold">Your Applied Jobs</h1>
            <div>
                {
                    applied.map(applies=> <AppliedJobsCards key={applies._id} applies={applies}></AppliedJobsCards>)
                }
            </div>
            
        </div>
    );
};

export default AppliedJobs;
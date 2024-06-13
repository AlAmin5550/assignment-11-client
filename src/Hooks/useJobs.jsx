import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";



const useJobs = (search) => {
    const [jobs,setJobs] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(()=>{
        axiosSecure(`/jobsSearch?search=${search}`)
        .then(res=>setJobs(res.data))

    },[search])
    return jobs;
};

export default useJobs;
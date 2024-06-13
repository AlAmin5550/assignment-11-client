import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import JobsCards from "./JobsCards";


const JobsSection = () => {
    const { isPending, isError, error, data: jobs}=useQuery({
        queryKey:['jobs'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/jobsCard`)
            return res.json();
        }
    })
    if(isPending){
        return <span className="loading loading-ring loading-lg"></span>;
    }
    if(isError){
        return <p>{error.message}</p>
    }
    return (
        <div  className="container max-w-7xl mx-auto ">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-5xl font-bold">Popular jobs</h1>
                    <p className="py-6 text-gray-500">Discover popular jobs with us which is best suited for you.</p>
                </div>
                <div>
                    <Link to="/allJobs"><button className="btn btn-active btn-link">See All jobs <GoArrowRight></GoArrowRight></button></Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    jobs.slice(0,9).map(job=> <JobsCards key={job._id} job={job}></JobsCards>)
                }
            </div>
            
        </div>
    );
};

export default JobsSection;
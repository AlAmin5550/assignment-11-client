// import { useQuery } from "@tanstack/react-query";
import JobsCards from "../Home/JobsCards";
import { useState } from "react";
import useJobs from "../Hooks/useJobs";


const AllJobs = () => {
    const [search, setSearch] = useState('');
    const jobs = useJobs(search);
    // const { isPending, isError, error, data: jobs } = useQuery({
    //     queryKey: ['jobs'],
    //     queryFn: async () => {
    //         const res = await fetch(`https://gofind-server.vercel.app/jobs`)
    //         return res.json();
    //     }
    // })
    // if (isPending) {
    //     return <span className="loading loading-ring loading-lg"></span>;
    // }
    // if (isError) {
    //     return <p>{error.message}</p>
    // }
    const handleSearch = e =>{
        e.preventDefault();
        const searchText = e.target.search.value;
        // console.log(searchText);
        setSearch(searchText);
    }
    return (
        <div className="container mx-auto bg-white max-w-7xl">
            <div className="space-y-2 text-center mb-5">
                <h2 className="text-3xl font-bold">All Available Jobs</h2>
                <p className="font-serif text-sm text-gray-600">Find the most suited job for yourself.</p>
                <form onSubmit={handleSearch}>
                    <input type="text" className="input input-bordered" name="search" id="" />
                    <input type="submit" value="Search" className="btn"/>
                </form>
            </div>
            <div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    jobs.map(job => <JobsCards key={job._id} job={job}></JobsCards>)
                }
            </div>


        </div>
    );
};

export default AllJobs;
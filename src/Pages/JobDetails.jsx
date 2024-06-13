import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const JobDetails = () => {
    const { user } = useContext(AuthContext);
    const params = useParams();
    const id = params.id;
    const { isPending, isError, error, data: job } = useQuery({
        queryKey: ['job'],
        queryFn: async () => {
            const res = await fetch(`https://gofind-server.vercel.app/jobs/${id}`)
            return res.json();
        }
    })
    if (isPending) {
        return <span className="loading loading-ring loading-lg"></span>;
    }
    if (isError) {
        return <p>{error.message}</p>
    }
    const { jobTitle, companyName, companyBanner, location, datePosted, employmentType, jobDescription, jobRequirements, experienceLevel, salaryRange, applicationDeadline, contactEmail, companyWebsite, industry, benefits, _id } = job;
    const date = new Date();
    const applicationDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

    const handleApply = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const resume = form.resume.value;
        const appliedJobId = _id;
        if (email == contactEmail) {
            return toast.error('Unsuccessful request.')
        }
        else if (applicationDate == applicationDeadline) {
            return toast.error('Application Deadline has passed!')
        }
        const appliedJob = { appliedJobId, name, email, resume, jobTitle, companyName, companyBanner, employmentType, location, salaryRange }


        axios.post('https://gofind-server.vercel.app/applied', appliedJob)
            .then(() => {
                toast.success('Successfully Added to list')
                form.reset();

            }).catch((err) => {
                toast.error(err.message);
            });
    }
    return (
        <div className="bg-white">
            <div className="hero min-h-80 w-full items-centre justify-start p-10" style={{ backgroundImage: 'url(https://i.ibb.co/nQgH8hk/NA-October-10.jpg)' }}>
                <h1 className="mb-5  text-5xl font-bold lg:ml-10">JOBS DETAILS</h1>
            </div>
            <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-14">
                <div className="max-w-3xl px-6 py-16 space-y-12">
                    <article className="space-y-8  text-gray-900">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{jobTitle} at <br /> {companyName}</h1>
                            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-600">
                                <div className="flex items-center md:space-x-2">
                                    <p className="text-sm">Posted • <span className="text-blue-300">{datePosted}</span></p>
                                </div>
                                <p className="flex-shrink-0 mt-3 text-sm md:mt-0">Deadline • <span className="text-red-300 ">{applicationDeadline}</span></p>
                            </div>
                            <h1>Salary • <span className="text-gray-500 ">{salaryRange}</span></h1>
                        </div>
                        <div className="text-gray-800">
                            <p>{jobDescription}</p>
                        </div>
                    </article>
                    <div>
                        <div className="flex items-center flex-wrap py-6 gap-2 border-t border-dashed border-gray-600">
                            <button className="px-3 py-1 rounded-sm hover:underline bg-default-600 text-gray-500">Industry : {industry}</button>
                            <button className="px-3 py-1 rounded-sm hover:underline bg-default-600 text-gray-500">Type : {employmentType}</button>
                            <button className="px-3 py-1 rounded-sm hover:underline bg-default-600 text-gray-500"><span className="flex items-center justify-center gap-1 "><FaLocationDot /> : <p>{location}</p></span></button>
                            <button className="px-3 py-1 rounded-sm hover:underline bg-default-600 text-gray-500">Experience : {experienceLevel}</button>

                        </div>
                        <div className="space-y-2">
                            <h4 className="text-lg font-semibold">Requirements</h4>
                            <ul className="ml-4 space-y-1 list-disc">
                                {
                                    jobRequirements?.map((requirement, idx) => <li key={idx}>
                                        {requirement}
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center flex-wrap py-6 gap-2 border-t border-dashed border-gray-600">
                            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                                <img src={companyBanner} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-300" />
                                <div className="flex flex-col">
                                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{companyName}</h1>
                                </div>
                            </div>
                            <button className="px-3 py-1 rounded-sm hover:underline bg-default-600 text-gray-500">Website : {companyWebsite}</button>
                            <button className="px-3 py-1 rounded-sm hover:underline bg-default-600 text-gray-500">Contact : {contactEmail}</button>

                        </div>
                        <div className="space-y-2">
                            <h4 className="text-lg font-semibold">Benefits from Company</h4>

                            <ul className="ml-4 space-y-1 list-disc">
                                {
                                    benefits?.map((benefit, idx) => <li key={idx}>
                                        {benefit}
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-16 lg:space-y-7 mt-5">
                    <div className="flex gap-4">
                        <button type="button" title="Like post" className="flex items-center justify-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                            </svg>
                        </button>
                        <button type="button" title="Share post" className="flex items-center justify-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                            </svg>
                        </button>
                        <div>
                            <button className="btn px-3 py-2 font-bold text-2xl text-gray-100 bg-[#25A3FF]" onClick={() => document.getElementById('my_modal_3').showModal()}>Apply</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg">Apply for {jobTitle} <br /> at {companyName}</h3>
                                    <p className="py-4">Please Fill in the boxes to apply</p>
                                    <form onSubmit={handleApply} method="dialog">
                                        <div className="flex flex-col">
                                            <label className="text-sm">Name</label>
                                            <input type="text" name="name" placeholder="name" className="input input-bordered" defaultValue={user?.displayName} />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-sm">Email</label>
                                            <input type="text" name="email" placeholder="email" className="input input-bordered" defaultValue={user?.email} />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-sm">Resume Link</label>
                                            <input type="text" name="resume" placeholder="Resume Link" className="input input-bordered" />
                                        </div>
                                        <input  type="submit" value="Apply" className="btn px-3 py-2 font-bold text-2xl text-gray-100 bg-[#25A3FF]" />
                                    </form>
                                </div>
                            </dialog>
                        </div>

                    </div>
                    <div className="bg-[#F4F6FD] p-6 flex flex-col space-y-3 mb-5">
                        <h1 className="text-xl font-semibold">Summery</h1>
                        <hr className="border border-dashed" />
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Salary</td>
                                    <td>{salaryRange}</td>
                                </tr>
                                <tr>
                                    <td>Experience</td>
                                    <td>{experienceLevel}</td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td>{employmentType}</td>
                                </tr>
                                <tr>
                                    <td>Posted on</td>
                                    <td>{datePosted}</td>
                                </tr>
                                <tr>
                                    <td>Deadline</td>
                                    <td>{applicationDeadline}</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>
                    <div className="bg-[#F4F6FD] p-6 flex flex-col space-y-3 mb-5">
                        <Link to="/allJobs"><button className="text-xl font-semibold text-[#23A2FF]">See similar jobs</button></Link>
                        <Link to="/appliedJobs"><button className="text-xl font-semibold text-[#23A2FF]">Jobs you applied</button></Link>
                        <Link to="/blogs"><button className="text-xl font-semibold text-[#23A2FF]">Blogs</button></Link>

                    </div>

                </div>
            </div>
            <Toaster></Toaster>

        </div>
    );
};

export default JobDetails;
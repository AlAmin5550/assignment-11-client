import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const AddJobs = () => {
    const { user } = useContext(AuthContext);
    const [postingDate, setPostingDate] = useState(new Date());
    const [deadlineDate, setDeadlineDate] = useState(new Date());
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.jobTitle.value;
        const companyName = form.CompanyName.value;
        const contactEmail = form.contactEmail.value;
        const location = form.location.value;
        const companyBanner = form.companyBanner.value;
        const salaryRange = form.salaryRange.value;
        const employmentType = form.employmentType.value;
        const experienceLevel = form.experienceLevel.value;
        const jobDescription = form.jobDescription.value;
        const jobRequirements1 = form.jobRequirements1.value;
        const jobRequirements2 = form.jobRequirements2.value;
        const jobRequirements3 = form.jobRequirements3.value;
        const jobRequirements4 = form.jobRequirements4.value;
        const jobRequirements = [jobRequirements1, jobRequirements2, jobRequirements3, jobRequirements4]
        const benefits1 = form.benefits1.value;
        const benefits2 = form.benefits2.value;
        const benefits3 = form.benefits3.value;
        const benefits4 = form.benefits4.value;
        const benefits5 = form.benefits5.value;
        const benefits = [benefits1, benefits2, benefits3, benefits4, benefits5];
        const datePosted = form.datePosted.value;
        const applicationDeadline = form.deadline.value;
        const industry = form.industry.value;
        const companyWebsite = form.companyWebsite.value;
        const job = { jobTitle, companyName, companyBanner, location, jobDescription, jobRequirements, employmentType, salaryRange, applicationDeadline, contactEmail, companyWebsite, datePosted, experienceLevel, industry, benefits }
        axios.post('http://localhost:5000/jobs',job)
        .then(res => {
            console.log(res.data)
            toast.success('Successfully uploaded')
            form.reset();
        })
    }
    return (
        <div>
            <section className="p-6 bg-gray-100 text-gray-900">
                <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className=" gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full text-center mb-4 lg:col-span-1">
                            <p className="font-medium text-5xl">Add Job Information</p>
                            <p className="text-xs">Post the job you are offering, please fill up all the fields!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Job Title</label>
                                <input type="text" name="jobTitle" placeholder="title" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-default-600 border-gray-300 " />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Company name</label>
                                <input type="text" name="CompanyName" placeholder="Company name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Contact Email</label>
                                <input type="text" name="contactEmail" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" defaultValue={user?.email} />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Location</label>
                                <input id="email" type="text" name="location" placeholder="City, State" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Company Banner</label>
                                <input id="address" type="text" name="companyBanner" placeholder="Company banner" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">Salary</label>
                                <input id="city" type="text" placeholder="" name="salaryRange" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">Employment Type</label>
                                <input id="state" type="text" name="employmentType" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">Experience Level</label>
                                <input id="zip" type="text" placeholder="" name="experienceLevel" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className=" gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-sm">Description</label>
                            <textarea id="bio" placeholder="" name="jobDescription" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"></textarea>
                        </div>
                        <div className="grid grid-cols-1 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3 space-y-2">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="firstname" className="text-sm">Requirements</label>
                                    <input id="firstname" placeholder="1)" type="text" name="jobRequirements1" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm"></label>
                                    <input id="email" type="text" placeholder="2)" name="jobRequirements2" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm"></label>
                                    <input id="email" type="text" placeholder="3)" name="jobRequirements3" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm"></label>
                                    <input id="email" type="text" placeholder="4)" name="jobRequirements4" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                                </div>

                            </div>
                            <div className="col-span-full sm:col-span-3 space-y-2">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="lastname" className="text-sm">Benefits Provided</label>
                                    <input id="lastname" type="text" placeholder="1)" name="benefits1" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm"></label>
                                    <input id="email" type="text" placeholder="2)" name="benefits2" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm"></label>
                                    <input id="email" type="text" placeholder="3)" name="benefits3" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm"></label>
                                    <input id="email" type="text" placeholder="4)" name="benefits4" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm"></label>
                                    <input id="email" type="text" placeholder="5)" name="benefits5" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm mr-6">Date Posted</label>
                                <DatePicker selected={postingDate} name="datePosted" onChange={(date) => setPostingDate(date)} />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm mr-6">Deadline</label>
                                <DatePicker selected={deadlineDate} name="deadline" onChange={(date) => setDeadlineDate(date)} />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">Industry</label>
                                <input id="state" type="text" placeholder="" name="industry" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">Website</label>
                                <input id="zip" type="text" placeholder="http://" name="companyWebsite" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                            </div>
                        </div>
                    </fieldset>
                    <div>
                        <input type="submit" className="btn btn-primary" value="Upload Job Post" />
                    </div>

                </form>
            </section>
            <Toaster></Toaster>
        </div>
    );
};

export default AddJobs;
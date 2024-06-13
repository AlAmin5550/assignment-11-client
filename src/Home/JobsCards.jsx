import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const JobsCards = ({ job }) => {
    const { jobTitle, companyName, companyBanner, location, datePosted, employmentType ,_id } = job;
    return (
        <div>
            <div className="rounded-md shadow-md p-2 space-y-1 sm:w-96 bg-gray-50 text-gray-800 mb-3">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <img src={companyBanner} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-300" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">{companyName}</h2>
                            <span className="inline-block text-xs leading-none text-gray-600">Posted:{datePosted}</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="p-3 space-y-2">
                    <h2 className="text-xl font-bold text-[#305BD1] leading-none">{jobTitle}</h2>
                    <button className="px-3 py-2 font-bold text-gray-100 bg-[#25A3FF]">{employmentType}</button>
                    <div className="space-y-3">
                        <p className="text-sm text-gray-400">
                            To access features of this platform, you must register your personal identification! 
                        </p>
                        <span className="flex items-center gap-1 pb-3"><FaLocationDot/><p>{location}</p></span>
                        
                       <Link to={`/jobs/${_id}`}><button className="w-full py-3 font-bold text-gray-100 bg-[#305BD1]">Apply for this job</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JobsCards;
JobsCards.propTypes={
    job: PropTypes.object,
}
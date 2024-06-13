import PropTypes from 'prop-types';


const AppliedJobsCards = ({ applies }) => {
    const { jobTitle, companyName, companyBanner, location,  salaryRange , } = applies;
    return (
        <div>
            <div className="bg-gray-100 text-gray-900">
                <div className="container grid grid-cols-12 mx-auto mb-5 bg-gray-50">
                    <div className="bg-no-repeat bg-cover bg-gray-700 col-span-full allSpots lg:col-span-4" style={{ backgroundImage: `url(${companyBanner})` }}></div>
                    <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10 space-y-3">
                        <h1 className="text-3xl font-semibold" >{jobTitle} at <br />{companyName}</h1>
                        <hr />
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                                <p>Location: {location}</p>
                                <p>Salary: {salaryRange}</p>
                                <span className="self-center text-sm">{}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppliedJobsCards;
AppliedJobsCards.propTypes={
    applies:PropTypes.object,
}
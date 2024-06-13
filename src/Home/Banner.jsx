import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import "./styles.css";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>

                        <div className="hero-content text-[#23A2FF]  text-centre ">
                            <div className=''>
                                <h1 className="text-7xl  font-bold">Take the right step <br /> to find the right job <br /> for you!</h1>
                                <p className="py-6 text-white ">Welcome to goFind, your go-to platform for job seekers and employers. <br /> Find your dream job or the perfect candidate effortlessly. <br />Join us and bridge the gap between talent and opportunity today!</p>
                                <Link to='/login'><button className="btn mr-5 btn-primary font-extrabold ">Get Started</button></Link>
                                <Link to='/allJobs'><button className="btn btn-primary font-extrabold">Find Jobs</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576267423429-569309b31e84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>

                        <div className="hero-content text-[#23A2FF] text-centre ">
                            <div className=''>
                                <h1 className="text-7xl font-medium" >Find the friendly environment <br /> for your workplace <br /> with us!</h1>
                                <p className="py-6 text-white">Welcome to goFind, your go-to platform for job seekers and employers. <br /> Find your dream job or the perfect candidate effortlessly. <br />Join us and bridge the gap between talent and opportunity today!</p>
                                <Link to='/login'><button className="btn mr-5 btn-primary font-extrabold ">Get Started</button></Link>
                                <Link to='/allJobs'><button className="btn btn-primary font-extrabold">Find Jobs</button></Link>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen bg-[#E9EDFA]">
                        <div className="hero-content   flex-col lg:flex-row-reverse text-left">
                            <img src="https://plus.unsplash.com/premium_photo-1680658084469-100de185031a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhhcHB5JTIwd29ya2VyfGVufDB8fDB8fHww" className="max-w-sm rounded-lg shadow-2xl" />
                            <div className=''>
                                <h1 className="text-7xl font-bold">Take the right step <br /> to find the right job <br /> for you!</h1>
                                <p className="py-6 text-gray-500">Welcome to goFind, your go-to platform for job seekers and employers. <br /> Find your dream job or the perfect candidate effortlessly. <br />Join us and bridge the gap between talent and opportunity today!</p>
                                <Link to='/login'><button className="btn mr-5 btn-primary font-extrabold ">Get Started</button></Link>
                                <Link to='/allJobs'><button className="btn btn-primary font-extrabold">Find Jobs</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;
import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true,
})
const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        },error=>{
            console.log('Error tracked in :', error.response)
            if(error.response.status == 401 || error.response.status == 403){
                console.log('logout the user');
                logOut()
                .then(() => {
                    navigate('/login')
                }).catch((err) => {
                    console.log(err)
                });
            }
        })
    },[])
    return axiosSecure;
};

export default useAxiosSecure;
import axios from "axios";
import axiosInstance from "../Instance";

async function FetchAllBanner(){
    try{
        const res=await axiosInstance.get('/api/v1/banner/getallbanner');
        return res.data
    }
    catch(error)
    {
        throw error;
    }
}
export default FetchAllBanner;
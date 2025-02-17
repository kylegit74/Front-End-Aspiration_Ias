import axios from "axios";
import axiosInstance from "../Instance";
async function FetchallNotice()
{
    try{
        const res=await axiosInstance.get('/api/v1/notice/getallnotice');
        return res.data

    }catch(error)
    {
        throw error;
    }
}
export default FetchallNotice;
import AdminCourse from "./AdminCourse"
import AdminNotice from "./AdminNotice"
import AdminBanner from "./Banner"
import Heading from "./Heading"

function MainBodyOfAdminHome()
{

    return(
        <>
             <Heading/>
             <AdminBanner/>
             <AdminNotice/>
             <AdminCourse/>
        </>
       
    )
}
export default MainBodyOfAdminHome
import AdminProductList from "../features/admin/components/AdminProductList";
import Navbar from "../features/navbar/Navbar";

function AdminHome() {
    return ( 
        
        <Navbar>
            <AdminProductList />
        </Navbar>
     );
}

export default AdminHome;
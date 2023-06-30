import Navbar from "../features/navbar/Navbar";
import UserOrders from "../features/user/components/UserOrders";

function UserOrdersPage() {
  return (
    <>
      <Navbar>
        <h1 className="mx-auto text-2xl">My Orders</h1>
        <UserOrders />
      </Navbar>
    </>
  );
}

export default UserOrdersPage;

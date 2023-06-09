import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
//manage user
const ManageUser = () => {
   return (
      <div className="manage-user-container">
         <div className="title">Manage User</div>
         <div className="users-content">
            <div className="btn-user">
               <button type="">Add new user</button>
            </div>
            <div className="table-users">
               table users
            </div>
               <ModalCreateUser />
         </div>
      </div>
   );
};
export default ManageUser;

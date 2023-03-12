import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";

function ModalCreateUser() {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [username, setUsername] = useState("");
   const [image, setImage] = useState("");
   const [role, setRole] = useState("USER");
   const [previewImage, setPreviewImage] = useState("");

   const handleUploadImage = (e) => {
      if(e.target && e.target.files && e.target.files[0]){
         setPreviewImage(URL.createObjectURL(e.target.files[0]));
         setImage(e.target.files[0])

      }
   };

   return (
      <>
         <Button variant="primary" onClick={handleShow}>
            ADD NEW USER
         </Button>

         <Modal
            centered
            size="xl"
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            className="modal-add-user"
         >
            <Modal.Header closeButton>
               <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form className="row g-3">
                  <div className="col-md-6">
                     <label className="form-label">Email</label>
                     <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>
                  <div className="col-md-6">
                     <label className="form-label">Password</label>
                     <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </div>
                  <div className="col-6">
                     <label className="form-label">Username</label>
                     <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                     />
                  </div>

                  <div className="col-6">
                     <label className="form-label">Role</label>
                     <select
                        className="form-select"
                        onChange={(e) => setRole(e.target.value)}
                     >
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                     </select>
                  </div>
                  <div className="col-12">
                     <label
                        className="form-label label-upload"
                        htmlFor="labelUpload"
                        value={image}
                     >
                        <FcPlus />
                        Upload File Image
                     </label>
                     <input
                        type="file"
                        hidden
                        id="labelUpload"
                        onChange={(e) => handleUploadImage(e)}
                     />
                  </div>
                  <div className="col-md-12 img-preview">
                     {previewImage ? (
                        <img src={previewImage} />
                     ) : (
                        <span>Preview Image</span>
                     )}
                  </div>
               </form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary">Save</Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default ModalCreateUser;

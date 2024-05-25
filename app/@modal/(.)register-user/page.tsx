import Modal from "@/components/Modal/Modal";
import RegisterPage from "@/components/Authentication/RegisterPage";

const RegisterIntercepted = () => {
  return (
    <>
      <Modal title={"User Registration"} pathName={"register-user"}>
        <RegisterPage />
      </Modal>
    </>
  );
};

export default RegisterIntercepted;

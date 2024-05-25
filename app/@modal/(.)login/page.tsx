import LoginPage from "@/components/Authentication/LoginPage";
import Modal from "@/components/Modal/Modal";

const LoginIntercepted = () => {
  return (
    <>
      <Modal pathName={"login"} title={"User Authentication"}>
        <LoginPage />
      </Modal>
    </>
  );
};

export default LoginIntercepted;

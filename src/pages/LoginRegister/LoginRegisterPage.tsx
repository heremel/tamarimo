import { useNavigate } from "react-router-dom";
import styles from "./LoginRegisterPage.module.css";
import ModalLoginRegister from "../../components/ButtonModals/Modal";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/home"); // redirection après login réussi
  };

  return (
    <div className={styles["login-page"]}>
      <ModalLoginRegister onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;

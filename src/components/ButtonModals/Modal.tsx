import { useState } from "react";
import styles from "./Modal.module.css";

interface ModalLoginRegisterProps {
  onLoginSuccess: () => void; // appelé après login réussi
}

const ModalLoginRegister: React.FC<ModalLoginRegisterProps> = ({
  onLoginSuccess,
}) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // --- LOGIN ---
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
        credentials: "include",
      });

      if (!response.ok) throw new Error("Login échoué");

      const token = await response.text(); // récupère le JWT brut
      console.log("Token reçu :", token);

      if (token) {
        localStorage.setItem("token", token); // stocke le token
        onLoginSuccess(); // parent gère la redirection
      }
    } catch (err) {
      console.error("Erreur login :", err);
      alert("Email ou mot de passe incorrect !");
    }
  };

  // --- REGISTER ---
  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: registerEmail,
          password: registerPassword,
        }),
        credentials: "include",
      });

      if (!response.ok) throw new Error("Inscription échouée");

      const data = await response.json();
      console.log("Réponse backend register :", data);

      alert("Compte créé 🎉 Vous pouvez maintenant vous connecter !");
      // Réinitialise les champs de register après succès
      setRegisterEmail("");
      setRegisterPassword("");
    } catch (err) {
      console.error("Erreur register :", err);
      alert("Impossible de créer le compte.");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles["modal-title"]}>Welcome to Tamarimo !</h2>
        <div className={styles["columns-container"]}>
          {/* Login */}
          <div className={styles.column}>
            <h3 className={styles["column-title"]}>LOG INTO YOUR ACCOUNT</h3>
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className={styles.input}
            />
            <button onClick={handleLogin} className={styles["marimo-button"]}>
              LOGIN
            </button>
          </div>

          {/* Register */}
          <div className={styles.column}>
            <h3 className={styles["column-title"]}>CREATE AN ACCOUNT</h3>
            <input
              type="email"
              placeholder="Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              className={styles.input}
            />
            <button
              onClick={handleRegister}
              className={styles["marimo-button"]}
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLoginRegister;

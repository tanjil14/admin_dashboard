import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="lContainer">
        <input
          className="lInput"
          placeholder="username"
          type="text"
          id="username"
        />
        <input
          className="lInput"
          placeholder="password"
          type="password"
          id="password"
        />
        <button className="lButton">Login</button>
      </div>
    </div>
  );
};

export default Login;

import useAuthStore from "./AuthStore";

const LoginStatus = () => {
  const {user, login, logout} = useAuthStore()

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login('sugengw07')} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;

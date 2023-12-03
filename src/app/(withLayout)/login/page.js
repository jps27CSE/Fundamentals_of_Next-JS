import Link from "next/link";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link href={"/about"}>
        <button>about</button>
      </Link>
    </div>
  );
};

export default Login;

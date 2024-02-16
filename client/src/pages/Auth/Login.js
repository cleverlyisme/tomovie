import { Link } from "react-router-dom";
// import { Input } from "../../components/UsedInputs";
// import Layout from "../../components/Layout";
import { FiLogin } from "react-icons/fi";

const Login = () => {
  const submit = () => {};

  return (
    <div className="container mx-auto px-2 my-24 flex-colo">
      <form
        onSubmit={submit}
        className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5"
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-full h-12 object-contain"
        />
        {/* <Input
          label="Email"
          placeholder="tomovie.app@gmail.com"
          type="email"
          bg={true}
        />
        <Input
          label="Passoword"
          placeholder="********"
          type="password"
          bg={true}
        /> */}
      </form>
    </div>
  );
};

export default Login;

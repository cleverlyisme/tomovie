import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import Layout from "../../components/Layout";
import { Input } from "../../components/Inputs";

const Login = () => {
  const submit = () => {};

  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <form
          onSubmit={submit}
          className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border"
        >
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            className="w-full h-20 object-contain"
          />
          <Input
            label="Email"
            placeholder="tuananhdao.dev.js@gmail.com"
            type="email"
            bg={true}
          />
          <Input
            label="Passoword"
            placeholder="********"
            type="password"
            bg={true}
          />
          <Link
            to="/dashboard"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <FiLogIn /> Sign In
          </Link>
          <p className="text-center text-border">
            Don't have an account?{" "}
            <Link to="/register" className="text-dryGray font-semibold ml-2">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Login;

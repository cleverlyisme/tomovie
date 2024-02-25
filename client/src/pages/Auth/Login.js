import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiLogIn } from "react-icons/fi";

import useAppContext from "../../hooks/useAppContext";
import Layout from "../../components/Layout";
import { Input } from "../../components/Inputs";
import { InlineError } from "../../components/Notifications/Errors";
import { loginValidation } from "../../utils/validations/auth.validation";

const Login = () => {
  const navigate = useNavigate();
  const {
    loadingState: { isLoading, setIsLoading },
    authState: { signIn },
  } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const submit = async (data) => {
    setIsLoading(true);
    try {
      await signIn(data);

      toast.success("Login successfuly");
      navigate("/");
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <form
          onSubmit={handleSubmit(submit)}
          className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry  rounded-lg border border-border"
        >
          <img
            src="/assets/images/logo.png"
            alt="logo"
            className="w-full h-20 object-contain"
          />
          <div className="w-full">
            <Input
              label="Email"
              placeholder="netflixo@gmail.com"
              type="email"
              name="email"
              register={register("email")}
              bg={true}
            />
            {errors.email && <InlineError text={errors.email.message} />}
          </div>

          <div className="w-full">
            <Input
              label="Password"
              placeholder="*******"
              type="password"
              bg={true}
              name="password"
              register={register("password")}
            />
            {errors.password && <InlineError text={errors.password.message} />}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                <FiLogIn /> Sign In
              </>
            )}
          </button>
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

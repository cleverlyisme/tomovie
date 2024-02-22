import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import useAppContext from "../../hooks/useAppContext";
import SideBar from "./components/SideBar";
import { Input } from "../../components/Inputs";
import { passwordValidation } from "../../utils/validations/user.validation";
import { InlineError } from "../../components/Notifications/Errors";
import { changePassword } from "../../services/user.service";

const ChangePassword = () => {
  const {
    loadingState: { isLoading, setIsLoading },
    authState: { user },
  } = useAppContext();

  // validate user
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordValidation),
  });

  // on submit
  const submit = async (data) => {
    setIsLoading(true);
    try {
      await changePassword(data);

      toast.success("Changed password successfully");
      reset();
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setIsLoading(false);
  };

  return (
    <SideBar>
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Change Password</h2>
        <div className="w-full">
          <Input
            label="Previous Password"
            placeholder="********"
            type="password"
            bg={true}
            name="oldPassword"
            register={register("oldPassword")}
          />
          {errors.oldPassword && (
            <InlineError text={errors.oldPassword.message} />
          )}
        </div>
        <div className="w-full">
          <Input
            label="New Password"
            placeholder="********"
            type="password"
            bg={true}
            name="newPassword"
            register={register("newPassword")}
          />
          {errors.newPassword && (
            <InlineError text={errors.newPassword.message} />
          )}
        </div>
        <div className="w-full">
          <Input
            label="Confirm Password"
            placeholder="********"
            type="password"
            bg={true}
            name="confirmPassword"
            register={register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <InlineError text={errors.confirmPassword.message} />
          )}
        </div>

        <div className="flex justify-end items-center my-4">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto"
          >
            {isLoading ? "Changing..." : "Change Password"}
          </button>
        </div>
      </form>
    </SideBar>
  );
};

export default ChangePassword;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import useAppContext from "../../hooks/useAppContext";
import SideBar from "./components/SideBar";
import ImagePreview from "../../components/ImagePreview";
import Uploader from "../../components/Uploader";
import { InlineError } from "../../components/Notifications/Errors";
import { Input } from "../../components/Inputs";
import { profileValidation } from "../../utils/validations/user.validation";
import { updateProfile, deleteProfile } from "../../services/user.service";

const Profile = () => {
  const {
    loadingState: {
      setIsLoading,
      isDeleting,
      setIsDeleting,
      isUpdating,
      setIsUpdating,
    },
    authState: { user, setUser },
  } = useAppContext();
  const [imageUrl, setImageUrl] = useState(
    user?.image || "/assets/images/avatar.png"
  );
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileValidation),
  });

  const submit = async (data) => {
    setIsLoading(true);
    setIsUpdating(true);
    try {
      const response = await updateProfile({ ...data, image: imageUrl });

      setUser(response.data.user);
      toast.success("Updated profile successfuly");
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setIsLoading(false);
    setIsUpdating(false);
  };

  const handleDeleteProfile = async () => {
    setIsLoading(true);
    setIsDeleting(true);
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete your profile?"
      );

      if (confirm) {
        await deleteProfile();

        setUser(null);
        localStorage.removeItem("accessToken");
        toast.success("Deleted profile successfuly");
        navigate("/login");
      }
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setIsLoading(false);
    setIsDeleting(false);
  };

  useEffect(() => {
    if (user) {
      setValue("fullName", user?.fullName);
      setValue("email", user?.email);
    }
  }, [user]);

  return (
    <SideBar>
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Profile</h2>
        <div className="w-full grid lg:grid-cols-12 gap-6">
          <div className="col-span-10">
            <Uploader setImageUrl={setImageUrl} />
          </div>
          {/* Image preview */}
          <div className="col-span-2">
            <ImagePreview image={imageUrl} name={user?.fullName || "Tomovie"} />
          </div>
        </div>

        <div className="w-full">
          <Input
            label="Full Name"
            placeholder="Tomovie"
            type="text"
            bg={true}
            name="fullName"
            register={register("fullName")}
          />
          {errors.fullName && <InlineError text={errors.fullName.message} />}
        </div>
        <div className="w-full">
          <Input
            label="Email"
            placeholder="tuananhdao.dev.js@gmail.com"
            type="email"
            name="email"
            disabled={true}
            register={register("email")}
            bg={true}
          />
          {errors.email && <InlineError text={errors.email.message} />}
        </div>
        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          <button
            type="button"
            onClick={handleDeleteProfile}
            disabled={isDeleting}
            className="bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto"
          >
            {isDeleting ? "Deleting..." : "Delete Account"}
          </button>
          <button
            type="submit"
            disabled={isUpdating}
            className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto"
          >
            {isUpdating ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </form>
    </SideBar>
  );
};

export default Profile;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import { MdOutlineUpdate } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import useAppContext from "../../../hooks/useAppContext";
import SideBar from "../components/SideBar";
import Uploader from "../../../components/Uploader";
import CastModal from "../../../components/Modals/CastModal";
import ImagePreview from "../../../components/ImagePreview";
import Loader from "../../../components/Notifications/Loader";
import { Input, Message, SelectCategory } from "../../../components/Inputs";
import { InlineError } from "../../../components/Notifications/Errors";
import {
  createMovie,
  getMovieById,
  updateMovie,
} from "../../../services/movie.service";
import { getCategories } from "../../../services/category.service";
import { movieValidation } from "../../../utils/validations/movie.validation";

const MovieDetail = () => {
  const { id } = useParams();
  const {
    loadingState: { setIsLoading },
  } = useAppContext();

  const [loadMovie, setLoadMovie] = useState(false);
  const [movie, setMovie] = useState(null);
  const [categories, setCategories] = useState([]);
  const [cast, setCast] = useState(null);
  const [imageWithoutTitle, setImageWithoutTitle] = useState(null);
  const [imageWithTitle, setImageWithTitle] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(movieValidation),
  });

  const onCreate = async (data) => {
    setIsLoading(true);
    try {
      await createMovie({
        ...data,
        titleImage: imageWithTitle,
        image: imageWithoutTitle,
        video: videoUrl,
      });
      toast.success("Created movie successfully");
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setIsLoading(false);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await updateMovie(id, {
        ...data,
        titleImage: imageWithTitle,
        image: imageWithoutTitle,
        video: videoUrl,
      });
      toast.success("Updated movie successfully");
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!openModal) setCast(null);
  }, [openModal]);

  const getData = async () => {
    setLoadMovie(true);
    try {
      if (id) {
        const responseMovie = await getMovieById(id);
        const dataMovie = responseMovie.data;

        setMovie(dataMovie.movie);
        setValue("name", dataMovie.movie?.name);
        setValue("time", dataMovie.movie?.time);
        setValue("language", dataMovie.movie?.language);
        setValue("year", dataMovie.movie?.year);
        setValue("category", dataMovie.movie?.category?._id);
        setValue("desc", dataMovie.movie?.desc);
        setImageWithoutTitle(dataMovie.movie?.image);
        setImageWithTitle(dataMovie.movie?.titleImage);
        setVideoUrl(dataMovie.movie?.video);
      }
      const responseCategories = await getCategories();
      const dataCategories = responseCategories.data;

      setCategories(dataCategories.categories);
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setLoadMovie(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SideBar>
      <CastModal open={openModal} setOpen={setOpenModal} cast={cast} />
      {loadMovie ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold">
            {movie ? "Update Movie" : "Create Movie"}
          </h2>
          <div className="w-full grid md:grid-cols-2 gap-6">
            <div className="w-full">
              <Input
                label="Movie Title"
                placeholder={movie?.name || "The Last Of Us"}
                type="text"
                bg={true}
                name="name"
                register={register("name")}
              />
              {errors.name && <InlineError text={errors.name.message} />}
            </div>
            <div className="w-full">
              <Input
                label="Hours"
                placeholder={movie?.time || "1h"}
                type="number"
                bg={true}
                name="time"
                register={register("time")}
              />
              {errors.time && <InlineError text={errors.time.message} />}
            </div>
          </div>

          <div className="w-full grid md:grid-cols-2 gap-6">
            <div className="w-full">
              <Input
                label="Language Used"
                placeholder={movie?.language || "English"}
                type="text"
                bg={true}
                name="language"
                register={register("language")}
              />
              {errors.language && (
                <InlineError text={errors.language.message} />
              )}
            </div>
            <div className="w-full">
              <Input
                label="Year Of Release"
                placeholder={movie?.year || "2022"}
                type="number"
                bg={true}
                name="year"
                register={register("year")}
              />
              {errors.year && <InlineError text={errors.year.message} />}
            </div>
          </div>

          {/* Images */}
          <div className="w-full grid md:grid-cols-2 gap-6">
            {/* img without title */}
            <div className="flex flex-col gap-2">
              <p className="text-border font-semibold text-sm">
                Image without Title
              </p>
              <Uploader setImageUrl={setImageWithoutTitle} />
              {movie ? (
                <ImagePreview
                  image={imageWithoutTitle}
                  name="imageWithouTitle"
                />
              ) : (
                <div className="w-32 h-32 p-2 bg-main border border-border rounded"></div>
              )}
            </div>
            {/* image with title */}
            <div className="flex flex-col gap-2">
              <p className="text-border font-semibold text-sm">
                Image with Title
              </p>
              <Uploader setImageUrl={setImageWithTitle} />
              {movie ? (
                <ImagePreview image={imageWithTitle} name="imageTitle" />
              ) : (
                <div className="w-32 h-32 p-2 bg-main border border-border rounded"></div>
              )}
            </div>
          </div>

          {/* Desc */}
          <div className="w-full">
            <Message
              label="Movie Description"
              placeholder={movie?.desc || "Make it short and sweet"}
              name="desc"
              register={{ ...register("desc") }}
            />
            {errors.desc && <InlineError text={errors.desc.message} />}
          </div>
          {/* Category */}
          <div className="text-sm w-full">
            <SelectCategory
              label="Movie Category"
              options={categories || []}
              name="category"
              value={movie?.category?._id}
              register={{ ...register("category") }}
            />
            {errors.category && <InlineError text={errors.category.message} />}
          </div>
          {/* Movie Video */}
          <div className="flex flex-col gap-2 w-full ">
            <label className="text-border font-semibold text-sm">
              Movie Video
            </label>
            <div
              className={`w-full grid ${videoUrl && "md:grid-cols-2"} gap-6`}
            >
              {videoUrl && (
                <div className="w-full bg-main text-sm text-subMain py-4 border border-border rounded flex-colo">
                  Video Uploaded!!!
                </div>
              )}
              <Uploader setImageUrl={setVideoUrl} video={true} />
            </div>
          </div>
          {/* Casts */}
          <div className="w-full grid lg:grid-cols-2 gap-6 items-start">
            <button
              className="w-full py-4 bg-main border border-subMain border-dashed text-white rounded"
              onClick={() => setOpenModal(true)}
            >
              Add Cast
            </button>
            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
              {movie?.casts?.map((cast, index) => (
                <div
                  key={index}
                  className="p-2 italic text-xs text-text rounded flex-colo bg-main border border-border"
                >
                  <img
                    src={cast?.image || "/assets/images/avatar.png"}
                    alt={cast?.name}
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                  <p>{cast?.name}</p>
                  <div className="flex-rows mt-2 w-full gap-2">
                    <button
                      className="w-6 h-6 flex-colo bg-dry border border-border text-green-600 rounded"
                      onClick={() => {
                        setCast(cast);
                        setOpenModal(true);
                      }}
                    >
                      <FaEdit />
                    </button>
                    <button className="w-6 h-6 flex-colo bg-dry border border-border text-subMain rounded">
                      <MdDelete />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Submit */}
          <button
            className="bg-subMain w-full flex-rows gap-4 font-medium transitions hover:bg-dry border border-subMain text-white py-4 rounded"
            onClick={movie ? handleSubmit(onSubmit) : handleSubmit(onCreate)}
          >
            {movie ? (
              <>
                <MdOutlineUpdate /> Update Movie
              </>
            ) : (
              <>
                <ImUpload /> Publish Movie
              </>
            )}
          </button>
        </div>
      )}
    </SideBar>
  );
};

export default MovieDetail;

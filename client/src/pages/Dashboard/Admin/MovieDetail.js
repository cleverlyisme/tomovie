import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import { MdOutlineUpdate } from "react-icons/md";

import movies from "../../../data/movies";
import categories from "../../../data/categories";
import casts from "../../../data/casts";
import SideBar from "../components/SideBar";
import Uploader from "../../../components/Uploader";
import { Input, Message, Select } from "../../../components/Inputs";
import CastModal from "../../../components/Modals/CastModal";

const MovieDetail = () => {
  const { id } = useParams();

  const [openModal, setOpenModal] = useState(false);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (!openModal) setCast(null);
  }, [openModal]);

  const movie = movies.find((movie) => movie._id === id);

  return (
    <SideBar>
      <CastModal open={openModal} setOpen={setOpenModal} cast={cast} />
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">
          {movie ? "Update Movie" : "Create Movie"}
        </h2>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Movie Title"
            placeholder={movie?.name || "Game Of Thrones"}
            type="text"
            bg={true}
          />
          <Input
            label="Hours"
            placeholder={`${movie?.time}h` || "2h"}
            type="text"
            bg={true}
          />
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input label="Language" placeholder="English" type="text" bg={true} />
          <Input
            label="Year Of Releases"
            placeholder={movie?.year || "2022"}
            type="text"
            bg={true}
          />
        </div>

        {/* Images */}
        <div className="w-full grid md:grid-cols-2 gap-6">
          {/* Img without title */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image Without Title
            </p>
            <Uploader />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              {movie ? (
                <img
                  src={movie?.image}
                  alt={movie?.name}
                  className="w-full h-full object-cover rounded"
                />
              ) : null}
            </div>
          </div>
          {/* Img with title */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image With Title
            </p>
            <Uploader />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              {movie ? (
                <img
                  src={movie?.titleImage}
                  alt={movie?.name}
                  className="w-full h-full object-cover rounded"
                />
              ) : null}
            </div>
          </div>
        </div>

        {/* Desc */}
        <Message
          label="Movie Description"
          placeholder="Make it short and sweet..."
        />
        {/* Category */}
        <div className="text-sm w-full">
          <Select label="Movie Category" options={categories} />
        </div>
        {/* Movie Video */}
        <div className="flex flex-col gap-2 w-full ">
          <p className="text-border font-semibold text-sm">Movie Video</p>
          <Uploader />
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
            {movie
              ? movie?.casts?.map((cast, index) => (
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
                ))
              : casts.map((cast, index) => (
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
        <button className="bg-subMain w-full flex-rows gap-4 font-medium transitions hover:bg-dry border border-subMain text-white py-4 rounded">
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
    </SideBar>
  );
};

export default MovieDetail;

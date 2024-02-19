import { Input } from "../../components/Inputs";
import { HiPlusCircle } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";

import MainModal from "./MainModal";
import Uploader from "../Uploader";

const CastModal = ({ open, setOpen, cast }) => {
  return (
    <MainModal open={open} setOpen={setOpen}>
      <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl opacity-100 scale-100">
        <h2 className="text-2xl font-bold">
          {cast ? "Update Cast" : "Create Cast"}
        </h2>
        <form className="flex flex-col gap-6 text-left mt-4">
          <Input
            label="Cast Name"
            placeholder={cast?.name || "Tom Hanks"}
            type="text"
            bg={false}
          />
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">Cast Image</p>
            <Uploader />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              {cast ? (
                <img
                  src={cast?.image}
                  alt={cast?.name}
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <img
                  src={"/assets/images/avatar.png"}
                  alt={"Tom Hanks"}
                  className="w-full h-full object-cover rounded"
                />
              )}
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white"
          >
            {cast ? (
              <>
                <FaCheck /> Confirm
              </>
            ) : (
              <>
                <HiPlusCircle /> Add
              </>
            )}
          </button>
        </form>
      </div>
    </MainModal>
  );
};

export default CastModal;

import MainModal from "./MainModal";
import { Input } from "../../components/Inputs";
import { HiPlusCircle } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";

const CategoryModal = ({ open, setOpen, category }) => {
  return (
    <MainModal open={open} setOpen={setOpen}>
      <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl opacity-100 scale-100">
        <h2 className="text-2xl font-bold">{category ? "Update" : "Create"}</h2>
        <form className="flex flex-col gap-6 text-left mt-4">
          <Input
            label="Category Name"
            placeholder={category?.title || "Action"}
            type="text"
            bg={false}
          />
          <button
            onClick={() => setOpen(false)}
            className="w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white"
          >
            {category ? (
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

export default CategoryModal;

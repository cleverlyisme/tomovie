import { useEffect, useState } from "react";
import { HiPlusCircle } from "react-icons/hi";

import categories from "../../../data/categories";
import SideBar from "../components/SideBar";
import CategoryModal from "../../../components/Modals/CategoryModal";
import Table from "../../../components/Table";

const Categories = () => {
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState();

  const onEditFunction = (id) => {
    setCategory(id);
    setOpenModal(!openModal);
  };

  useEffect(() => {
    if (!openModal) setCategory();
  }, [openModal]);

  return (
    <SideBar>
      <CategoryModal
        open={openModal}
        setOpen={setOpenModal}
        category={category}
      />
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Categories</h2>
          <button
            className="bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded"
            onClick={() => setOpenModal(true)}
          >
            <HiPlusCircle /> Create
          </button>
        </div>

        <Table
          categories={categories}
          users={null}
          onEditFunction={onEditFunction}
        />
      </div>
    </SideBar>
  );
};

export default Categories;

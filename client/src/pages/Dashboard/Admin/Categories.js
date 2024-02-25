import { useEffect, useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import toast from "react-hot-toast";

import useAppContext from "../../../hooks/useAppContext";
import SideBar from "../components/SideBar";
import CategoryModal from "../../../components/Modals/CategoryModal";
import Table from "../../../components/Table";
import {
  deleteCategory,
  getCategories,
} from "../../../services/category.service";
import Loader from "../../../components/Notifications/Loader";

const Categories = () => {
  const {
    loadingState: { setIsLoading },
  } = useAppContext();
  const [openModal, setOpenModal] = useState(false);
  const [loadCategories, setLoadCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  const onEditFunction = (id) => {
    setCategory(id);
    setOpenModal(!openModal);
  };

  const onDeleteFunction = async (id) => {
    setIsLoading(true);
    try {
      const confirm = window.confirm(
        "Delete this category also delete all movies in this category. Are you sure?"
      );

      if (confirm) {
        const response = await deleteCategory(id);

        const data = response.data;
        setCategories(data.categories);

        toast.success("Deleted category successfully");
      }
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!openModal) setCategory();
  }, [openModal]);

  const getData = async () => {
    setLoadCategories(true);
    try {
      const responseCategories = await getCategories();
      const dataCategories = responseCategories.data;

      setCategories(dataCategories.categories);
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setLoadCategories(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SideBar>
      <CategoryModal
        open={openModal}
        setOpen={setOpenModal}
        category={category}
      />
      {loadCategories ? (
        <Loader />
      ) : (
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
            onDeleteFunction={onDeleteFunction}
          />
        </div>
      )}
    </SideBar>
  );
};

export default Categories;

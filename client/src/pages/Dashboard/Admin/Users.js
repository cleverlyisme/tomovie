import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import useAppContext from "../../../hooks/useAppContext";
import Table from "../../../components/Table";
import SideBar from "../components/SideBar";
import Loader from "../../../components/Notifications/Loader";
import { deleteUser, getUsers } from "../../../services/user.service";

const Categories = () => {
  const {
    loadingState: { setIsLoading },
  } = useAppContext();
  const [loadUsers, setLoadUsers] = useState(false);
  const [users, setUsers] = useState([]);

  const onDeleteFunction = async (id) => {
    setIsLoading(true);
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this user?"
      );

      if (confirm) {
        const response = await deleteUser(id);

        const data = response.data;
        setUsers(data.users);

        toast.success("Deleted user successfully");
      }
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setIsLoading(false);
  };

  const getData = async () => {
    setLoadUsers(true);
    try {
      const response = await getUsers();
      const data = response.data;

      setUsers(data.users);
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setLoadUsers(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Users</h2>
        </div>

        {loadUsers ? (
          <Loader />
        ) : (
          <Table
            categories={null}
            users={users}
            onDeleteFunction={onDeleteFunction}
          />
        )}
      </div>
    </SideBar>
  );
};

export default Categories;

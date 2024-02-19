import { HiPlusCircle } from "react-icons/hi";

import users from "../../../data/users";
import Table from "../../../components/Table";
import SideBar from "../components/SideBar";

const Categories = () => {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Users</h2>
        </div>

        <Table categories={null} users={users} />
      </div>
    </SideBar>
  );
};

export default Categories;

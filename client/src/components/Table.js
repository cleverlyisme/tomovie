import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

const UsersRows = (item, index) => {
  return (
    <tr key={index}>
      <td className={`${Text}`}>
        <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
          <img
            src={item?.image || "/assets/images/avatar.png"}
            alt={item?.name}
            className="w-full h-full object-cover"
          />
        </div>
      </td>
      <td className={`${Text} truncate`}>{item?._id}</td>
      <td className={`${Text}`}>{item?.fullName}</td>
      <td className={`${Text}`}>{item?.email}</td>
      <td className={`${Text} flex-rows py-5`}>
        <div className="w-8 h-8 flex-colo border border-border rounded p-2 cursor-pointer">
          {!!item?.isActive ? (
            <img
              src="/assets/images/check.svg"
              alt="True"
              className="w-full h-full"
            />
          ) : (
            <img
              src="/assets/images/close.svg"
              alt="True"
              className="w-full h-full"
            />
          )}
        </div>
      </td>
      <td className={`${Text}`}>{item?.createdAt}</td>
      <td className={`${Text} flex-rows py-5`}>
        <button className="bg-subMain text-white rounded flex-colo w-6 h-6">
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

const CategoriesRows = (item, index, onEditFunction) => {
  return (
    <tr key={index}>
      <td className={`${Text} truncate`}>{item?._id}</td>
      <td className={`${Text}`}>{item?.title}</td>
      <td className={`${Text}`}>{item?.createdAt}</td>
      <td className={`${Text} float-right flex-rows gap-2`}>
        <button
          className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2"
          onClick={() => onEditFunction(item)}
        >
          Edit <FaEdit className="text-green-500" />
        </button>
        <button className="bg-subMain text-white rounded flex-colo w-6 h-6">
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

const Table = ({ categories, users, onEditFunction }) => {
  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            {users ? (
              <>
                <th scope="col" className={`${Head}`}>
                  Image
                </th>
                <th scope="col" className={`${Head}`}>
                  Id
                </th>
                <th scope="col" className={`${Head}`}>
                  Full Name
                </th>
                <th scope="col" className={`${Head}`}>
                  Email
                </th>
                <th scope="col" className={`${Head}`}>
                  Active
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
              </>
            ) : (
              <>
                <th scope="col" className={`${Head}`}>
                  Id
                </th>
                <th scope="col" className={`${Head}`}>
                  Title
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
              </>
            )}
            <th scope="col" className={`${Head} text-end`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {users
            ? users.map((user, index) => UsersRows(user, index))
            : categories.map((category, index) =>
                CategoriesRows(category, index, onEditFunction)
              )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

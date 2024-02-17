import { Link } from "react-router-dom";

const Footer = () => {
  const menus = [
    {
      text: "Tomovie",
      menus: [
        {
          text: "Home",
          path: "/",
        },
        {
          text: "About Us",
          path: "/about-us",
        },
        {
          text: "Contact Us",
          path: "/contact-us",
        },
        {
          text: "Movies",
          path: "/movies",
        },
      ],
    },
    {
      text: "Top Categories",
      menus: [
        {
          text: "Action",
          path: "#",
        },
        {
          text: "Romantic",
          path: "#",
        },
        {
          text: "Drama",
          path: "#",
        },
        {
          text: "Historical",
          path: "#",
        },
      ],
    },
    {
      text: "My Account",
      menus: [
        {
          text: "Dashboard",
          path: "/dashboard",
        },
        {
          text: "My Favorites",
          path: "/favorites",
        },
        {
          text: "Profile",
          path: "/profile",
        },
        {
          text: "Change Password",
          path: "/change-password",
        },
      ],
    },
  ];

  return (
    <div className="bg-dry py-4 border-t-2 border-black">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 px-5 justify-between">
          {menus.map((menu, index) => (
            <div
              key={index}
              className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
            >
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                {menu.text}
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                {menu.menus.map((item, index) => (
                  <li key={index} className="flex items-baseline">
                    <Link
                      to={item.path}
                      className="text-border inline-block hover:text-subMain"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <Link to="/">
              <img
                src="/assets/images/logo.png"
                alt="Logo"
                className="h-20 object-contain"
              />
            </Link>
            <p className="leading-7 text-sm text-border mt-3">
              <span>
                Viet Nam
                <br />
                Ha Noi, 10000
              </span>
              <br />
              <span>Tell: +337 223 434</span>
              <br />
              <span>Email: tuananhdao.dev.js@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

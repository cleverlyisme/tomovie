import Head from "../../components/Head";
import Layout from "../../components/Layout";

import { FiMail, FiPhoneCall, FiMapPin } from "react-icons/fi";

const ContactUs = () => {
  const contacts = [
    {
      id: 1,
      title: "Email Us",
      infor: "Interactively grow backend ideas for cross-platform models.",
      icon: FiMail,
      contact: "tuananhdao.dev.js@gmail.com",
    },
    {
      id: 2,
      title: "Call Us",
      infor:
        "Distinctively exploit optimal alignments for intuitive bandwidth.",
      icon: FiPhoneCall,
      contact: "+337 223 434",
    },
    {
      id: 3,
      title: "Location",
      infor: "Ha Noi, Viet Nam.",
      icon: FiMapPin,
      contact: "",
    },
  ];

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="Contact Us" />
        <div className="grid md:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="border border-border flex-colo p-10 bg-dry rounded-lg text-center"
            >
              <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl">
                <contact.icon />
              </span>
              <h5 className="text-xl font-semibold mb-2">{contact.title}</h5>
              <p className="mb-0 text-sm text-text leading-7">
                <a href={`mailto:${contact.contact}`} className="text-blue-600">
                  {contact.contact}
                </a>{" "}
                {contact.infor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;

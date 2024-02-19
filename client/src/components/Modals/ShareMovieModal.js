import MainModal from "./MainModal";
import {
  FaFacebook,
  FaPinterest,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const ShareMovieModal = ({ open, setOpen, movie }) => {
  const shares = [
    {
      icon: FaFacebook,
      shareButton: FacebookShareButton,
    },
    {
      icon: FaTwitter,
      shareButton: TwitterShareButton,
    },
    {
      icon: FaTelegram,
      shareButton: TelegramShareButton,
    },
    {
      icon: FaWhatsapp,
      shareButton: WhatsappShareButton,
    },
    {
      icon: FaPinterest,
      shareButton: PinterestShareButton,
    },
    {
      icon: MdEmail,
      shareButton: EmailShareButton,
    },
  ];

  const url = `${window.location.protocol}//${window.location.host}/movies/${movie?._id}`;

  return (
    <MainModal open={open} setOpen={setOpen}>
      <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl opacity-100 scale-100">
        <h2 className="text-2xl font-bold">
          Share <span className="text-xl font-bold"> "{movie?.name}"</span>
        </h2>
        <form className="flex-rows flex-wrap gap-6 mt-6">
          {shares.map((share, index) => (
            <share.shareButton
              key={index}
              url={url}
              quote="Tomovie || Free Movies Website"
            >
              <div className="w-12 transitions hover:bg-subMain flex-colo text-lg h-12 bg-white rounded bg-opacity-30">
                <share.icon />
              </div>
            </share.shareButton>
          ))}
        </form>
      </div>
    </MainModal>
  );
};

export default ShareMovieModal;

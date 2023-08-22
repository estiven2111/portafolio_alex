import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

const Footer: React.FC = () => {
  const url = "https://yeraldinne-sanabria.vercel.app/";

  return (
    <div className=" flex flex-col text-center">
      <div className="grid sm:grid-cols-2">
        <div className="flex gap-3 justify-center">
          <p className=" mt-1  my-2 opacity-60 dark:opacity-40">Share:</p>
          <WhatsappShareButton url={url}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <FacebookShareButton url={url}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </div>
        <div className="sm:text-sm text-sm my-2 pb-1 opacity-60 dark:opacity-40">
          Yeraldinne Sanabria © 2023 - All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;

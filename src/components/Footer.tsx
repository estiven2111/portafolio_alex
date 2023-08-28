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
  const url = "https://alexandermeneses.info";

  return (
    <div className=" py-5 flex flex-col text-center">
      <div className="grid sm:grid-cols-2">
        <div className="flex gap-3 justify-center text-center">
          <p className=" mt-1 my-2 opacity-60 dark:opacity-40">Comparte con tus amigos:</p>
          <WhatsappShareButton url={url}>
            <WhatsappIcon size={60} round={true} />
          </WhatsappShareButton >
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={60} round={true} />
          </LinkedinShareButton>
          <FacebookShareButton url={url}>
            <FacebookIcon size={60} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <TwitterIcon size={60} round={true} />
          </TwitterShareButton>
        </div>
        <div className="sm:text-sm  my-2 pb-1 opacity-60 dark:opacity-40">
          <a href="https://tecnoeam.com/" target="_blank">Estiven Arboleda - TECNOEAM  © 2023 - All rights reserved</a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;

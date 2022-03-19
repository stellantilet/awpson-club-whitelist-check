import { FaDiscord, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed z-10 w-full">
      <div className="container mx-auto px-4 py-6 flex justify-between">
        <div>AWPSONClub x Spaceships</div>
        <div className="flex gap-5 text-3xl">
          <a href="https://twitter.com/awpsonclub">
            <FaTwitter />
          </a>
          <a href="https://discord.gg/awpson">
            <FaDiscord />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

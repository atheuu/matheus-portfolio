import Link from "next/link";
import { FaGithub, FaLinkedin, FaSteam, FaSpotify } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/atheuu" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/matheus-rodrigues-oliveira-5501521b4/" },
  { icon: <FaSteam />, path: "https://steamcommunity.com/id/atheuu/" },
  { icon: <FaSpotify />, path: "https://open.spotify.com/user/bcsbrvxo7qsbcj0vncxnsmqhc" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles} target='_blank' rel='noopener noreferrer'>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;

import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa"


const socials = [
    {
        icons: <FaGithub />,
        path: "https://github.com/Niz46",
    },
    {
        icons: <FaLinkedinIn />,
        path: "www.linkedin.com/in/nzeh-favour",
    },
    {
        icons: <FaYoutube />,
        path: "https://www.youtube.com/@nzehfavournizplu5003",
    },
    {
        icons: <FaTwitter />,
        path: "https://x.com/Nizplus46",
    },
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icons}
            </Link>
        })}
    </div>
  )
}

export default Social
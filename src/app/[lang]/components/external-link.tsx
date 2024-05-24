import LinkedinIcon from "@/app/[lang]/components/linkedin-icon";
import GithubIcon from "@/app/[lang]/components/github-icon";

type Props = {
  icon: string;
  text: string;
  link: string;
  className?: string;
}

const ICONS: Record<string, any> = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
}

export default function ExternalLink({icon, text, link, className}: Props) {

  const Icon = ICONS[icon]

  return (
    <a href={link} rel="noopener noreferrer" target="_blank" className={`group flex bg-sky-900 shadow-sky-900/50 py-1.5 px-4 rounded-full hover:bg-sky-500 shadow-lg hover:shadow-md hover:shadow-sky-500/50 transition-all ease-in-out ${className}`}>
      <Icon className="w-6 h-6 fill-white group-hover:fill-sky-50 transition-all ease-in-out"/>
      <p className="ms-1 text-white group-hover:text-sky-50 transition-all ease-in-out">{text}</p>
    </a>
  )
}
import { NavigationType } from "../../types/leftbar";

export const navigationLeftbar: NavigationType[] = [
  {
    name: "Bridge",
    href: "/",
    //icon: ArrowPathIcon,
    iconDark: "/images/icons/bridge-dark.png",
    iconLight: "/images/icons/bridge-light.png",
    current: false,
  },
  // {
  //   name: "Transactions",
  //   href: "/transactions",
  //   icon: AiOutlineHistory,
  //   iconDark: "/images/icons/transactions-dark.png",
  //   iconLight: "/images/icons/transactions-light.png",
  //   current: false,
  // },
  // {
  //   name: "Dashboard",
  //   href: "/dashboard",
  //   icon: BsFillGridFill,
  //   iconDark: "/images/icons/dashboard-dark.png",
  //   iconLight: "/images/icons/dashboard-light.png",
  //   current: false,
  // },
  {
    name: "Feedback",
    href: "/feedback",
    //icon: MdFeedback,
    iconDark: "/images/icons/feedback-dark.png",
    iconLight: "/images/icons/feedback-light.png",
    current: false,
  },
  {
    name: "Docs",
    href: "https://docs.anetabtc.io",
    //icon: SiReadthedocs,
    iconDark: "/images/icons/docs-dark.png",
    iconLight: "/images/icons/docs-light.png",
    current: false,
  },
];

export const socialLinks = [
  {
    name:  'twitter',
    url: 'https://twitter.com/anetaBTC',
    icon: '/images/icons/twitter.svg#icon'
  },
  {
    name:  'telegram',
    url: 'https://t.me/anetaBTC',
    icon: '/images/icons/telegram.svg#icon'
  },
  {
    name:  'discord',
    url: 'https://discord.com/invite/ScXG76dJXM',
    icon: '/images/icons/discord.svg#icon'
  },
  {
    name:  'medium',
    url: 'https://medium.com/@anetaBTC',
    icon: '/images/icons/medium.svg#icon'
  },
  {
    name:  'github',
    url: 'https://github.com/anetaBTC',
    icon: '/images/icons/github.svg#icon'
  }
]

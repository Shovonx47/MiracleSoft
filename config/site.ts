export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "miraclesoft",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
      submenu: [
        {
          label: "Account  Management",
          href: "/services/account-management",
        },
        {
          label: "Institute Management",
          href: "/services/institute-management",
        },
        { label: "Hospital Management", href: "/services/hospital-management" },
        {
          label: "Cafe/Restaurant management",
          href: "/services/cafe&restaurant-management",
        },
      ],
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
      submenu: [
        {
          label: "Account  Management",
          href: "/services/account-management",
        },
        {
          label: "Institute Management",
          href: "/services/institute-management",
        },
        { label: "Hospital Management", href: "/services/hospital-management" },
        {
          label: "Cafe/Restaurant management",
          href: "/services/cafe&restaurant-management",
        },
      ],
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

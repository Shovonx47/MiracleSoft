export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
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
          label: "Digital Transformation",
          href: "/services/digital-transformation",
        },
        { label: "Product Engineering", href: "/services/product-engineering" },
        { label: "Digital Innovation", href: "/services/digital-innovation" },
        { label: "Managed Services", href: "/services/managed-services" },
        { label: "Team Augmentation", href: "/services/team-augmentation" },
        { label: "ERP", href: "/services/erp" },
        { label: "CRM Solutions", href: "/services/crm-solutions" },
        { label: "Enterprise Mobility", href: "/services/enterprise-mobility" },
        {
          label: "Big Data & Analytics Services",
          href: "/services/big-data-analytics",
        },
        { label: "eCommerce", href: "/services/ecommerce" },
        { label: "ITSM & ITOM", href: "/services/itsm-itom" },
        { label: "IOT (Internet of Things)", href: "/services/iot" },
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
          label: "Digital Transformation",
          href: "/services/digital-transformation",
        },
        { label: "Product Engineering", href: "/services/product-engineering" },
        { label: "Digital Innovation", href: "/services/digital-innovation" },
        { label: "Managed Services", href: "/services/managed-services" },
        { label: "Team Augmentation", href: "/services/team-augmentation" },
        { label: "ERP", href: "/services/erp" },
        { label: "CRM Solutions", href: "/services/crm-solutions" },
        { label: "Enterprise Mobility", href: "/services/enterprise-mobility" },
        {
          label: "Big Data & Analytics Services",
          href: "/services/big-data-analytics",
        },
        { label: "eCommerce", href: "/services/ecommerce" },
        { label: "ITSM & ITOM", href: "/services/itsm-itom" },
        { label: "IOT (Internet of Things)", href: "/services/iot" },
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

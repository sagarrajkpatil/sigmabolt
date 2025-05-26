import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
 
  // {
  //   id: 2,
  //   title: "Features",
  //   newTab: false,
  //   path: "/#features",
  // },
  // {
  //   id: 2.1,
  //   title: "Blog",
  //   newTab: false,
  //   path: "/blog",
  // },
  // {
  //   id: 2.3,
  //   title: "Docs",
  //   newTab: false,
  //   path: "/docs",
  // },
  {
    id: 3,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Bolts",
        newTab: false,
        path: "/",
        // path: "/products/Bolts",
      },
      {
        id: 31,
        title: "Screws",
        newTab: false,
        path: "/",
        // path: "/products/Screws",
      },
      {
        id: 31,
        title: "Stud-bolts",
        newTab: false,
        path: "/",
        // path: "/products/Stud-bolts",
      },
      {
        id: 31,
        title: "Threaded-rods",
        newTab: false,
        path: "/",
        // path: "/products/Threaded-rods",
      },
      {
        id: 31,
        title: "Nuts",
        newTab: false,
        path: "/",
        // path: "/products/Nuts",
      },

      {
        id: 31,
        title: "Bent-bolts",
        newTab: false,
        path: "/",
        // path: "/products/Bent-bolts",
      },
      {
        id: 31,
        title: "Anchor-fasteners",
        newTab: false,
        path: "/",
        // path: "/products/Anchor-fasteners",
      },
      {
        id: 31,
        title: "Washers",
        newTab: false,
        path: "/",
        // path: "/products/Washers",
      },

      {
        id: 31,
        title: "Coated-fasteners",
        newTab: false,
        path: "/",
        // path: "/products/Coated-fasteners",
      },
      {
        id: 31,
        title: "Springs",
        newTab: false,
        path: "/",
        // path: "/products/Springs",
      },
      {
        id: 31,
        title: "Custom-fasteners",
        newTab: false,
        path: "/",
        // path: "/products/Custom-fasteners",
      },
      // {
      //   id: 34,
      //   title: "Sign In",
      //   newTab: false,
      //   path: "/auth/signin",
      // },
      // {
      //   id: 35,
      //   title: "Sign Up",
      //   newTab: false,
      //   path: "/auth/signup",
      // },
      // {
      //   id: 35,
      //   title: "Docs",
      //   newTab: false,
      //   path: "/docs",
      // },
      // {
      //   id: 35.1,
      //   title: "Support",
      //   newTab: false,
      //   path: "/support",
      // },
      // {
      //   id: 36,
      //   title: "404",
      //   newTab: false,
      //   path: "/error",
      // },
    ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;

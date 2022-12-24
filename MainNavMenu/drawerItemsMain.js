export const drawerItemsMain = [
  {
    key: "Home1",
    title: "Home",
    routes: [{ nav: "MainDrawer", routeName: "Home", title: "Home" }],
  },
  {
    key: "Users",
    title: "User Management",
    routes: [
      { nav: "MainDrawer", routeName: "Users", title: "Users" },
      { nav: "MainDrawer", routeName: "Doctors", title: "Doctors" },
      { nav: "MainDrawer", routeName: "Admin", title: "Admin" },
    ],
  },
  {
    key: "Settings",
    title: "Settings",
    routes: [
      { nav: "MainDrawer", routeName: "Settings1", title: "Settings 1" },
      { nav: "MainDrawer", routeName: "Settings2", title: "Settings 2" },
      { nav: "MainDrawer", routeName: "Settings3", title: "Settings 3" },
      { nav: "MainDrawer", routeName: "Splash", title: "Doctor Splash" },
    ],
  },
];

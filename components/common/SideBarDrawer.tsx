
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
    DrawerTitle
} from "@/components/ui/drawer";
import { TiThMenu } from "react-icons/ti";
import SideNavBar from "./SidebarNav";
import { UserRoutes } from "./routes";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
//   import { Role } from "@prisma/client";
//   import ThemeToggle from "./ThemeToggler";
//   import LogOutButton from "./LogOutBtn";

//   const getNavItems = (role: Role) => {
//     switch (role) {
//       case "ADMIN":
//         return AdminRoutes;
//       case "INSTRUCTOR":
//         return InstructorRoutes;
//       case "USER":
//         return UserRoutes;
//       default:
//         return LoginRoute;
//     }
//   };

const SideBarDrawer = () => {
    // const navItems = getNavItems(role);

    return (
        <Drawer>
            <DrawerTrigger className="rounded-full bg-blue-100 p-2 text-blue-500">
                <TiThMenu size={24} />
            </DrawerTrigger>
            <DrawerContent className="fixed inset-0 mt-0 h-screen w-40">
                <DrawerTitle className='hidden' />
                <DrawerHeader>
                    <div className="flex justify-center">
                        <Avatar>
                            <AvatarImage src="https://img.logoipsum.com/296.svg" alt="de-mawo" />
                            <AvatarFallback>IN</AvatarFallback>
                        </Avatar>
                    </div>
                </DrawerHeader>
                <SideNavBar items={UserRoutes} showTooltip={false} className="p-4" />
                <Separator className="my-4" />
                <div className="space-y-3 p-4">
                    <p>
                        Dark/Light
                    </p>
                    <p>
                        Sign Out
                    </p>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default SideBarDrawer;
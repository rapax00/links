declare global {
  interface Window {
    webln: any;
  }
}

import { useEffect } from "react";

import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import MenuItems from "./MenuItems";

interface MenuButtonProps {
  className?: string;
}

export const MenuButton = ({ className }: MenuButtonProps) => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
  }, []);

  const connect = async () => {
    try {
      if (!window.webln.enabled) {
        await window.webln.enable();
      }

      // const res = await window.webln.lnurl("YOUR_LN_URL");
      // console.dir(res);
      alert("DONE");
    } catch (err: any) {
      // Tell the user what went wrong
      console.dir(err);
      alert(err.message);
    }
  };

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center rounded-full bg-black/10 bg-opacity-20 p-2 text-xs font-medium hover:bg-black/25 active:bg-black/50 text-white/50 hover:text-white/75 active:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          <AdjustmentsHorizontalIcon className='h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>
      <Transition
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <MenuItems />
      </Transition>
    </Menu>
  );
};

export default MenuButton;

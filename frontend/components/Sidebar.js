/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/solid';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from '@heroicons/react/outline';
import SidebarLink from './SidebarLink';

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="fixed hidden h-full flex-col items-center p-2 sm:flex xl:w-[340px] xl:items-start">
      <div className="flex items-center justify-center p-0 hoverAnimation h-14 w-14 xl:ml-24">
        <Image src="https://rb.gy/ogau5a" alt="" width={30} height={30} />
      </div>
      <div className="mt-2.5 space-y-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button
        className="hidden w-56 h-12 ml-auto text-lg font-bold text-center rounded-full shadow-md mt-7 bg-twitter-blue text-twitter-white hover:bg-twitter-blue-hover xl:inline"
      >
        Tweet
      </button>
      <div
        className="flex items-center justify-center mt-auto hoverAnimation text-twitter-white xl:ml-auto xl:-mr-5"
        onClick={signOut}
      >
        <img src={session.user.image} alt="" className="h-10 w-10 rounded-full xl:mr-2.5" />
        <div className="hidden leading-5 xl:inline">
          <h4 className="font-bold">{session.user.username}</h4>
          <p className="text-[#6e767d]">@{session.user.tag}</p>
        </div>
        <DotsHorizontalIcon className="hidden h-5 ml-10 xl:inline" />
      </div>
    </div>
  );
}

export default Sidebar;

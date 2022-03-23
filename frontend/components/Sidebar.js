import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/solid';
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
  return (
    <div className="fixed hidden h-full flex-col items-center p-2 sm:flex xl:w-[340px] xl:items-start">
      <div className="hoverAnimation flex h-14 w-14 items-center justify-center p-0 xl:ml-24">
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
        className="ml-auto mt-7 hidden h-12 w-56 rounded-full bg-twitter-blue text-center text-lg font-bold 
            text-twitter-white shadow-md hover:bg-twitter-blue-hover xl:inline"
      >
        Tweet
      </button>
      <div
        className="hoverAnimation mt-auto flex items-center 
            justify-center text-twitter-white xl:ml-auto xl:-mr-5"
      >
        <img
          className="h-10 w-10 rounded-full xl:mr-2.5"
          src="https://yt3.ggpht.com/yti/APfAmoHMKH1J_tx53DJDAcJNqIpfD565RP6in4FZuw=s88-c-k-c0x00ffffff-no-rj-mo"
          alt=""
        />
        <div className="hidden leading-5 xl:inline">
          <h4 className="font-bold">martijnbassa</h4>
          <p className="text-twitter-tag-colour">@martijnbassa2000</p>
        </div>
        <DotsHorizontalIcon className="ml-10 hidden h-5 xl:inline" />
      </div>
    </div>
  );
}

export default Sidebar;

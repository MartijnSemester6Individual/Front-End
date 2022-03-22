import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import {
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    ClipboardListIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
} from "@heroicons/react/outline";
import SidebarLink from "./SidebarLink";

function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
            <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
                <Image src="https://rb.gy/ogau5a" width={30} height={30} />
            </div>
            <div className="space-y-2.5 mt-2.5 xl:ml-24">
                <SidebarLink text="Home" Icon={HomeIcon} active />
                <SidebarLink text="Explore" Icon={HashtagIcon} />
                <SidebarLink text="Notifications" Icon={BellIcon} />
                <SidebarLink text="Messages" Icon={InboxIcon} />
                <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarLink text="Lists" Icon={ClipboardListIcon} />
                <SidebarLink text="Profile" Icon={UserIcon} />
                <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
            </div>
            <button className="hidden xl:inline ml-auto bg-twitter-blue rounded-full w-56 h-12 text-lg font-bold shadow-md 
            hover:bg-twitter-blue-hover text-twitter-white text-center mt-7">
                Tweet
            </button>
            <div className="text-twitter-white flex items-center justify-center 
            hoverAnimation xl:ml-auto xl:-mr-5 mt-auto">
                <img
                    className="h-10 w-10 rounded-full xl:mr-2.5"
                    src="https://yt3.ggpht.com/yti/APfAmoHMKH1J_tx53DJDAcJNqIpfD565RP6in4FZuw=s88-c-k-c0x00ffffff-no-rj-mo"
                    alt=""
                />
                <div className="hidden xl:inline leading-5">
                    <h4 className="font-bold">martijnbassa</h4>
                    <p className="text-twitter-tag-colour">@martijnbassa2000</p>
                </div>
                <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10"
                />
            </div>
        </div>
    )
}

export default Sidebar
import {
    ChartBarIcon,
    ChatIcon,
    DotsHorizontalIcon,
    HeartIcon,
    ShareIcon,
    SwitchHorizontalIcon,
    TrashIcon,
} from "@heroicons/react/outline";
import {
    HeartIcon as HeartIconFilled,
    ChatIcon as ChatIconFilled,
} from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import Moment from "react-moment";
// import { useRecoilState } from "recoil";
// import { modalState, postIdState } from "../atoms/modalAtom";

function Post({ id, post, postPage }) {
    const { data: session } = useSession();
    //const [isOpen, setIsOpen] = useRecoilState(modalState);
    //const [postId, setPostId] = useRecoilState(postIdState);
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [liked, setLiked] = useState(false);
    const router = useRouter();

    const likePost = async () => {

    };

    return (
        <div className="p-3 flex cursor-pointer border-b border-gray-700"
            onClick={() => router.push(`/${id}`)}
        >
            {!postPage && (
                <img
                    src={/*post?.tweetImage*/session.user.image}
                    alt=""
                    className="h-11 w-11 rounded-full mr-4"
                />
            )}
            <div className="flex flex-col space-y-2 w-full">
                <div className={`flex ${!postPage && "justify-between"}`}>
                    {postPage && (
                        <img
                            src={/*post?.tweetImage*/session.user.image}
                            alt="Profile Pic"
                            className="h-11 w-11 rounded-full mr-4"
                        />
                    )}
                    <div className="text-twitter-tag-colour">
                        <div className="inline-block">
                            <h4 className={`font-bold text-[0.9375em] sm:text-base text-twitter-white hover:underline ${!postPage && "inline-block"}`}>
                                {post?.tweetUserName}
                            </h4>
                            <span className={`text-sm sm:text-[0.9375em] ${!postPage && "ml-1.5"}`}>
                                @{post?.tweetUserTag}
                            </span>
                        </div>{" "}
                        ·{" "}
                        <span className="hover:underline text-sm sm:text-[0.9375em]">
                            {/* <Moment fromNow>{post?.tweetTimeStamp?.toDate()}</Moment> */}
                        </span>
                        {!postPage && (
                            <p className="text-twitter-white text-[0.9375em] sm:text-base mt-0.5">{post?.tweetText}</p>
                        )}
                    </div>
                    <div className="icon group flex-shrink-0 ml-auto">
                        <DotsHorizontalIcon className="h-5 text-twitter-tag-colour group-hover:text-[#1d9bf0]" />
                    </div>
                </div>
                {postPage && (
                    <p className="text-twitter-white text-[0.9375em] sm:text-base mt-0.5">
                        {post?.tweetText}
                    </p>
                )}
                <img src={/*post?.tweetImage*/session.user.image} alt="" className="rounded-2xl max-h-[30em] object-cover mr-2"
                />
                <div className={`text-twitter-tag-colour flex justify-between w-10/12 ${postPage && (
                    "mx-auto"
                )}`}
                >
                    <div
                        className="flex items-center space-x-1 group"
                        onClick={(e) => {
                            e.stopPropagation();
                            setPostId(id);
                            setIsOpen(true);
                        }}
                    >
                        <div className="icon group-hover:bg-twitter-blue-hover group-hover:bg-opacity-10">
                            <ChatIcon className="h-5 group-hover:text-twitter-blue-hover" />
                        </div>
                        {comments.length > 0 && (
                            <span className="group-hover:text-twitter-blue-hover text-sm">
                                {comments.length}
                            </span>
                        )}
                    </div>

                    {session.user.uid == post?.id ? (
                        <div
                            className="flex items-center space-x-1 group"
                            onClick={(e) => {
                                e.stopPropagation();
                                //deleteDoc(doc(db, "posts", id));
                                router.push("/");
                            }}
                        >
                            <div className="icon group-hover:bg-red-600/10">
                                <TrashIcon className="h-5 group-hover:text-red-600" />
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-1 group">
                            <div className="icon group-hover:bg-green-500/10">
                                <SwitchHorizontalIcon className="h-5 group-hover:text-green-500" />
                            </div>
                        </div>
                    )}

                    {/* <div
                        className="flex items-center space-x-1 group"
                        onClick={(e) => {
                            e.stopPropagation();
                            likePost();
                        }}
                    >
                        <div className="icon group-hover:bg-pink-600/10">
                            {liked ? (
                                <HeartIconFilled className="h-5 text-pink-600" />
                            ) : (
                                <HeartIcon className="h-5 group-hover:text-pink-600" />
                            )}
                        </div>
                        {likes.length > 0 && (
                            <span
                                className={`group-hover:text-pink-600 text-sm ${liked && "text-pink-600"
                                    }`}
                            >
                                {likes.length}
                            </span>
                        )}
                    </div> */}

                    {/* <div className="icon group">
                        <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
                    </div>
                    <div className="icon group">
                        <ChartBarIcon className="h-5 group-hover:text-[#1d9bf0]" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Post
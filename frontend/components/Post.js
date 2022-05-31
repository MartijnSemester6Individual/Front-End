/* eslint-disable @next/next/no-img-element */
import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  SwitchHorizontalIcon,
  TrashIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled, ChatIcon as ChatIconFilled } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Moment from 'react-moment';
import { useRecoilState } from 'recoil';
import { modalState, postIdState } from '../atoms/modalAtom';
import axios from 'axios';

function Post({ id, post, postPage }) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v2/delete/${id}`;

  const likePost = async () => {
    if (liked) {
    }
  };


  const deletePost = async (e) => {
    await axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: '' + session.accessToken,
      },
    });
  };

  return (
    <div
      className="flex cursor-pointer border-b border-gray-700 p-3"
    //onClick={() => router.push(`/${post.tweetUserTag}/status/${id}`)}
    >
      {!postPage && (
        <img
          src={post?.tweetUserImage}
          alt="Profile Pic"
          className="mr-4 h-11 w-11 rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/${post.tweetUserTag}`);
          }}
        />
      )}
      <div className="flex w-full flex-col space-y-2">
        <div className={`flex ${!postPage && 'justify-between'}`}>
          {postPage && (
            <img
              src={post?.tweetUserImage}
              alt="Profile Pic"
              className="mr-4 h-11 w-11 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/${post.tweetUserTag}`);
              }}
            />
          )}
          <div className="text-twitter-tag-colour">
            <div
              className="inline-block"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/${post.tweetUserTag}`);
              }}
            >
              <h4
                className={`text-[0.9375em] font-bold text-twitter-white hover:underline sm:text-base ${!postPage && 'inline-block'
                  }`}
              >
                {post?.tweetUserName}
              </h4>
              <span className={`text-sm sm:text-[0.9375em] ${!postPage && 'ml-1.5'}`}>
                @{post?.tweetUserTag}
              </span>
            </div>{' '}
            ·{' '}
            <span className="text-sm hover:underline sm:text-[0.9375em]">
              {<Moment fromNow>{post?.tweetTimeStamp}</Moment>}
            </span>
            {!postPage && (
              <p className="mt-0.5 text-[0.9375em] text-twitter-white sm:text-base">
                {post?.tweetText}
              </p>
            )}
          </div>
          <div className="icon group ml-auto flex-shrink-0">
            <DotsHorizontalIcon className="h-5 text-twitter-tag-colour group-hover:text-[#1d9bf0]" />
          </div>
        </div>
        <img src={post?.tweetImage} alt="" className="mr-2 max-h-[30em] rounded-2xl object-cover" />
        <div
          className={`flex w-10/12 justify-between text-twitter-tag-colour ${postPage && 'mx-auto'
            }`}
        >
          <div
            className="group flex items-center space-x-1"
            onClick={(e) => {
              e.stopPropagation();
              deletePost();
            }}
          >
            <div className="icon group-hover:bg-red-600/10">
              <TrashIcon className="h-5 group-hover:text-red-600" />
            </div>
          </div>

          {session.user.userId == post?.tweetUserId ? (
            <div
              className="group flex items-center space-x-1"
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
                <span className="text-sm group-hover:text-twitter-blue-hover">{comments.length}</span>
              )}
            </div>
          ) : (
            <div className="group flex items-center space-x-1"
              onClick={(e) => {
                e.stopPropagation();
                deletePost();
              }}>
              <div className="icon group-hover:bg-green-500/10">
                <SwitchHorizontalIcon className="h-5 group-hover:text-green-500" />
              </div>
            </div>
          )}

          <div
            className="group flex items-center space-x-1"
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
              <span className={`text-sm group-hover:text-pink-600 ${liked && 'text-pink-600'}`}>
                {likes.length}
              </span>
            )}
          </div>

          <div className="icon group"
            onClick={(e) => {
              e.stopPropagation();
              likePost()
            }}>
            <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
          <div className="icon group"
            onClick={(e) => {
              e.stopPropagation();
              likePost()
            }}>
            <ChartBarIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

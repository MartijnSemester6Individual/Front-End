/* eslint-disable @next/next/no-img-element */
import { useRecoilState } from 'recoil';
import { modalState, postIdState } from '../atoms/modalAtom';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Moment from 'react-moment';
import axios from 'axios';

function Modal() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [post, setPost] = useState();
  const [comment, setComment] = useState('');
  const router = useRouter();

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(`http://localhost:8080/api/v2/tweets/${parseInt(postId)}`);
      setPost(response.data);
    };
    getPost();
  }, [postId]);

  const sendComment = async (e) => {};

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 pt-8" onClose={setIsOpen}>
        <div className="flex min-h-[800px] items-start justify-center px-4 pt-4 pb-20 text-center sm:block sm:min-h-screen sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[#5b7083] bg-opacity-40 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block transform overflow-hidden rounded-2xl bg-black text-left align-bottom 
                        shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:align-middle"
            >
              <div className="flex items-center border-b border-gray-700 px-1.5 py-2">
                <div
                  className="hoverAnimation flex h-9 w-9 items-center justify-center xl:px-0"
                  onClick={() => setIsOpen(false)}
                >
                  <XIcon className="h-[22px] text-white" />
                </div>
              </div>
              <div className="flex px-4 pt-5 pb-2.5 sm:px-6">
                <div className="w-full">
                  <div className="relative flex gap-x-3 text-twitter-tag-colour">
                    <span className="absolute left-5 top-11 z-[-1] h-full w-0.5 bg-gray-600" />
                    <img src={post?.tweetUserImage} alt="" className="h-11 w-11 rounded-full" />
                    <div>
                      <div className="group inline-block">
                        <h4 className="inline-block text-[0.9375em] font-bold text-[#d9d9d9] sm:text-base">
                          {post?.tweetUserName}
                        </h4>
                        <span className="ml-1.5 text-sm sm:text-[0.9375em]">
                          @{post?.tweetUserTag}{' '}
                        </span>
                      </div>{' '}
                      ·{' '}
                      <span className="text-sm hover:underline sm:text-[0.9375em]">
                        <Moment fromNow>{post?.tweetTimeStamp}</Moment>
                      </span>
                      <p className="text-[0.9375em] text-twitter-white sm:text-base">
                        {post?.tweetText}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex w-full space-x-3">
                    <img src={session.user.image} alt="" className="h-11 w-11 rounded-full" />
                    <div className="mt-2 flex-grow">
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Tweet your reply"
                        rows="2"
                        className="no-scrollbar min-h-[5em] w-full bg-transparent text-lg tracking-wide text-twitter-white placeholder-gray-500 outline-none"
                      />

                      <div className="flex items-center justify-between pt-2.5">
                        <div className="flex items-center">
                          <div className="icon">
                            <PhotographIcon className="h-[1.375em] text-twitter-blue" />
                          </div>

                          <div className="icon rotate-90">
                            <ChartBarIcon className="h-[1.375em] text-twitter-blue" />
                          </div>

                          <div className="icon">
                            <EmojiHappyIcon className="h-[1.375em] text-twitter-blue" />
                          </div>

                          <div className="icon">
                            <CalendarIcon className="h-[1.375em] text-twitter-blue" />
                          </div>
                        </div>
                        <button
                          className="rounded-full bg-twitter-blue px-4 py-1.5 font-bold text-white shadow-md hover:bg-twitter-blue-hover disabled:cursor-default 
                                                    disabled:opacity-50 disabled:hover:bg-twitter-blue"
                          type="submit"
                          onClick={sendComment}
                          disabled={!comment.trim()}
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;

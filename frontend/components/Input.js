/* eslint-disable @next/next/no-img-element */
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
  LocationMarkerIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline';
import 'emoji-mart/css/emoji-mart.css';
import { useRef, useState } from 'react';
import { Picker } from 'emoji-mart';
import TextareaAutosize from 'react-textarea-autosize';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/router';

function Input() {
  const { data: session } = useSession();
  const [input, setInput] = useState('');
  const [likeCount, setLikeCount] = useState(null);
  const [retweetCount, setRetweetCount] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [loading, setLoading] = useState(false);
  const [textLimitReached, setTextLimitReached] = useState(false);
  const [textLimit, setTextLimit] = useState(160);
  const filePickerRef = useRef(null);
  const router = useRouter();
  const [isValid, setIsValid] = useState(false);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const addEmoji = (e) => {
    setInput(input + e.native);
  };

  const checkWhileTweeting = (e) => {
    setInput(e.target.value);
    checkForSpaces(input);
  };

  const checkForSpaces = (value) => {
    if (!value.trim()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const sendPost = () => {
    if (loading) return;
    setLoading(true);

    if (!isValid) {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v2/tweet`,
          {
            tweetUserId: session.user.userId,
            tweetUserName: session.user.username,
            tweetUserImage: session.user.image,
            tweetImage: 'https://rb.gy/1q2s0t',
            tweetUserTag: session.user.tag,
            tweetText: input,
            tweetTimeStamp: Date().toLocaleString(),
            retweetCount: retweetCount,
            likeCount: likeCount,
          },
          {
            headers: { 'Content-Type': 'application/json' },
          },
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      setLoading(false);
      setInput('');
      setLikeCount(null);
      setRetweetCount(null);
      setSelectedFile(null);
      setShowEmojis(false);

      router.reload('');
    }
  };

  return (
    <div
      className={`no-scrollbar flex space-x-3 border-b border-gray-700 p-3 ${
        loading && 'opacity-60'
      }`}
    >
      <img src={session.user.image} alt="" className="h-11 w-11 cursor-pointer rounded-full" />
      <div className="w-full divide-y divide-gray-700">
        <div className={`${selectedFile && 'pb-7'} ${input && 'space-y-2.5'}`}>
          <TextareaAutosize
            value={input}
            onChange={(e) => checkWhileTweeting(e)}
            rows="2"
            placeholder="What's happening?"
            className="no-scrollbar max-h-28 min-h-[3.125em] w-full bg-transparent text-lg tracking-wide text-twitter-white placeholder-gray-500 outline-none"
            maxLength={160}
          />

          {selectedFile && (
            <div className="relative">
              <div
                className="absolute top-1 left-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#15181c] bg-opacity-75 hover:bg-[#272c26]"
                onClick={() => setSelectedFile(null)}
              >
                <XIcon className="h-5 text-white" />
              </div>
              <img src={selectedFile} alt="" className="max-h-80 rounded-2xl object-contain" />
            </div>
          )}
        </div>

        {/* Removes icons and tweet button when tweeting */}
        {!loading && (
          <div className="flex items-center justify-between pt-2.5">
            <div className="flex items-center">
              <div className="icon" onClick={() => filePickerRef.current.click()}>
                <PhotographIcon className="h-[1.375em] text-twitter-blue" />
                <input type="file" hidden onChange={addImageToPost} ref={filePickerRef} />
              </div>
              <div className="icon">
                <VideoCameraIcon className="h-[1.375em] text-twitter-blue" />
              </div>
              <div className="icon rotate-90">
                <ChartBarIcon className="h-[1.375em] text-twitter-blue" />
              </div>
              <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                <EmojiHappyIcon className="h-[1.375em] text-twitter-blue" />
              </div>
              <div className="icon">
                <CalendarIcon className="h-[1.375em] text-twitter-blue" />
              </div>
              <div className="icon">
                <LocationMarkerIcon className="h-[1.375em] text-twitter-blue" />
              </div>
              {showEmojis && (
                <Picker
                  onSelect={addEmoji}
                  style={{
                    position: 'absolute',
                    marginTop: '465px',
                    marginLeft: -40,
                    maxWidth: '320px',
                    borderRadius: '20px',
                  }}
                  theme="dark"
                />
              )}
            </div>
            <div className="pl-48 text-white">{isValid.toString()}</div>
            <button
              className="rounded-full bg-[#1d9bf0] px-4 py-1.5 font-bold text-white shadow-md hover:bg-twitter-blue-hover disabled:cursor-default disabled:opacity-50 disabled:hover:bg-twitter-blue"
              disabled={(!input && !selectedFile) || isValid}
              onClick={sendPost}
            >
              Tweet
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;

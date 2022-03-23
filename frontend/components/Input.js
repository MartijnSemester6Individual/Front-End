import {
    CalendarIcon,
    ChartBarIcon,
    EmojiHappyIcon,
    PhotographIcon,
    XIcon,
    LocationMarkerIcon,
    VideoCameraIcon,
} from "@heroicons/react/outline";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import TextareaAutosize from 'react-textarea-autosize';

function Input() {
    const [input, setInput] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)
    const [showEmojis, setShowEmojis] = useState(false)
    const [loading, setLoading] = useState(false)
    const filePickerRef = useRef(null)

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        }
    }

    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
    };

    const sendPost = (e) => {
        if (loading) return;
        setLoading(true);

        // axios post request to backend to post

        setLoading(false);
        setInput("");
        setSelectedFile(null);
        setShowEmojis(false);
    };

    return (
        <div className={`border-b border-gray-700 p-3 flex space-x-3 no-scrollbar ${loading && "opacity-60"}`}>
            <img
                src="https://yt3.ggpht.com/yti/APfAmoHMKH1J_tx53DJDAcJNqIpfD565RP6in4FZuw=s88-c-k-c0x00ffffff-no-rj-mo"
                alt=""
                className="h-11 w-11 rounded-full cursor-pointer"
            />
            <div className="w-full divide-y divide-gray-700">
                <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
                    <TextareaAutosize
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        rows="2"
                        placeholder="What's happening?"
                        className="bg-transparent outline-none text-twitter-white text-lg placeholder-gray-500 tracking-wide w-full min-h-[3.125em] no-scrollbar max-h-28"
                    />

                    {selectedFile && (
                        <div className="relative">
                            <div
                                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                                onClick={() => setSelectedFile(null)}
                            >
                                <XIcon className="text-white h-5" />
                            </div>
                            <img
                                src={selectedFile}
                                alt=""
                                className="rounded-2xl max-h-80 object-contain"
                            />
                        </div>
                    )}
                </div>
                
                {/* Removes icons and tweet button when tweeting */}
                {!loading && (
                    <div className="flex items-center justify-between pt-2.5">
                        <div className="flex items-center">
                            <div className="icon" onClick={() => filePickerRef.current.click()}>
                                <PhotographIcon className="h-[1.375em] text-twitter-blue" />
                                <input
                                    type="file"
                                    hidden
                                    onChange={addImageToPost}
                                    ref={filePickerRef}
                                />
                            </div>
                            <div className="icon">
                                <VideoCameraIcon className="text-twitter-blue h-[1.375em]" />
                            </div>
                            <div className="icon rotate-90">
                                <ChartBarIcon className="text-twitter-blue h-[1.375em]" />
                            </div>
                            <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                                <EmojiHappyIcon className="text-twitter-blue h-[1.375em]" />
                            </div>
                            <div className="icon">
                                <CalendarIcon className="text-twitter-blue h-[1.375em]" />
                            </div>
                            <div className="icon">
                                <LocationMarkerIcon className="text-twitter-blue h-[1.375em]" />
                            </div>

                            {showEmojis && (
                                <Picker
                                    onSelect={addEmoji}
                                    style={{
                                        position: "absolute",
                                        marginTop: "465px",
                                        marginLeft: -40,
                                        maxWidth: "320px",
                                        borderRadius: "20px",
                                    }}
                                    theme="dark"
                                />
                            )}
                        </div>
                        <button className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-twitter-blue-hover disabled:hover:bg-twitter-blue disabled:opacity-50 disabled:cursor-default"
                            disabled={!input && !selectedFile}
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
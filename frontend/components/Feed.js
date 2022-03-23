import { SparklesIcon } from '@heroicons/react/outline'
import Input from './Input';


function Feed() {
    return (
        <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[4.5625em] xl:ml-[23.125em] ">
            <div className="text-twitter-white flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
                <h2 className="text-lg sm:text-xl font-bold">Home</h2>
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    <SparklesIcon className="h-5 text-white" />
                </div>
            </div>

            <Input />
        </div>
    );
}

export default Feed




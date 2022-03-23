import { SparklesIcon } from '@heroicons/react/outline';
import Input from './Input';

function Feed() {
  return (
    <div className="max-w-2xl flex-grow border-l border-r border-gray-700 sm:ml-[4.5625em] xl:ml-[23.125em] ">
      <div className="sticky top-0 z-50 flex items-center border-b border-gray-700 bg-black py-2 px-3 text-twitter-white sm:justify-between">
        <h2 className="text-lg font-bold sm:text-xl">Home</h2>
        <div className="hoverAnimation ml-auto flex h-9 w-9 items-center justify-center xl:px-0">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>

      <Input />
    </div>
  );
}

export default Feed;

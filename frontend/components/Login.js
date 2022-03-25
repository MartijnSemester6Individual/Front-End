import Image from 'next/image';
import { signIn } from 'next-auth/react';

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <Image src="https://rb.gy/1q2s0t" width={150} height={150} objectFit="contain" />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              className="group relative overflow-hidden rounded bg-twitter-blue px-5 py-2.5 text-white outline-none transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-twitter-blue hover:to-twitter-blue-hover hover:ring-2 hover:ring-twitter-blue-hover hover:ring-offset-2"
            >
              <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
              <span className="relative">Sign in with {provider.name}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;

import Image from 'next/image'
import { signIn } from "next-auth/react";


function Login({ providers }) {
    return (
        <div className="flex flex-col items-center space-y-20 pt-48">
            <Image
                src="https://rb.gy/1q2s0t"
                width={150}
                height={150}
                objectFit="contain"
            />
            <div>
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button onClick={() => signIn(provider.id, { callbackUrl: "/" })} className="relative rounded px-5 py-2.5 overflow-hidden group bg-twitter-blue hover:bg-gradient-to-r hover:from-twitter-blue hover:to-twitter-blue-hover text-white hover:ring-2 hover:ring-offset-2 hover:ring-twitter-blue-hover transition-all ease-out duration-300 outline-none">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Sign in with {provider.name}</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Login
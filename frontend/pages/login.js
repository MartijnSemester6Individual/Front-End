import Image from 'next/image';
import { signIn, getCsrfToken } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

function Login({ csrfToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const signInUser = async (e) => {
    e.preventDefault();
    let options = { redirect: false, email, password };
    const res = await signIn('credentials', options);
    return router.push('/');
  };

  const openRegistrationPage = async (e) => {
    e.preventDefault();
    return router.push('/register');
  };

  return (
    <div className="grid place-items-center">
      <Image src="https://rb.gy/1q2s0t"
        width={250}
        height={250}
        objectFit="contain"
      />
      <div className="flex pt-0 bg-gray-bg1">
        <div className="w-full max-w-md px-16 py-10 m-auto bg-white border rounded-lg border-primaryBorder">
          <h1 className="mt-4 mb-12 text-2xl font-medium text-center text-primary">
            Log in to your account
          </h1>

          <form method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <div>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm mb-4`}
                  id="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm mb-4`}
                  id="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <button
              type="submit"
              className="min-w-full p-3 mt-4 text-center text-white cursor-pointer bg-black rounded-xl"
              onClick={(e) => signInUser(e)}
            >
              Login to 4Energy
            </button>
          </form>

          <div className="pt-3 text-center text-black">
            <p>Forgot password?</p>
          </div>
          <div className="pt-3 text-center">
            <p>
              Don&apos;t have an account?
              <span className="text-black cursor-pointer">
                {' '}
                Register now!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default Login;

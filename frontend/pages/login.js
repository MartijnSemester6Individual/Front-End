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
      <Image src="https://rb.gy/1q2s0t" width={250} height={250} objectFit="contain" alt="" />
      <div className="bg-gray-bg1 flex pt-0">
        <div className="border-primaryBorder m-auto w-full max-w-md rounded-lg border bg-white px-16 py-10">
          <h1 className="text-primary mt-4 mb-12 text-center text-2xl font-medium">
            Log in to your account
          </h1>

          <form method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <div>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  className={`text-primary mb-4 w-full rounded-md border p-2 text-sm outline-none`}
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
                  className={`text-primary mb-4 w-full rounded-md border p-2 text-sm outline-none`}
                  id="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 min-w-full cursor-pointer rounded-xl bg-black p-3 text-center text-white"
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
              <span className="cursor-pointer text-black"> Register now!</span>
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

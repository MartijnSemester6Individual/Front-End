import Head from 'next/head';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Login from './login';
import Modal from '../components/Modal';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { getProviders, getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Home = ({ trendingResults, followResults }) => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const router = useRouter();

  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Kwetter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex min-h-screen max-w-[93.75em] bg-black">
        <Sidebar />
        <Feed />
        {isOpen && <Modal />}
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const trendingResults = await fetch('https://jsonkeeper.com/b/NKEV').then((res) => res.json());
  const followResults = await fetch('https://jsonkeeper.com/b/WWMJ').then((res) => res.json());

  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: {
      trendingResults,
      followResults,
      session,
    },
  };
}

export default Home;

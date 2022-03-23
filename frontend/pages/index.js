import Head from 'next/head';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Login from '../components/Login';
import { getProviders, getSession, useSession } from "next-auth/react";

const Home = ({ trendingResults, followResults, providers }) => {

  const { data: session } = useSession();
  if (!session) return <Login providers={providers} />
  return (
    <div>
      <Head>
        <title>Kwetter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex min-h-screen max-w-[93.75em] bg-black">
        <Sidebar />
        <Feed />
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );

  const providers = await getProviders();
  const session = await getSession(context);
  
  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session
    },
  }
}

export default Home;

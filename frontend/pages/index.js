import Head from 'next/head';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';

const Home = () => {
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

export default Home;

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

      <main className="bg-black min-h-screen flex max-w-[93.75em] mx-auto">
        <Sidebar/>
        <Feed/>
      </main>
    </div>
  );
};

export default Home;

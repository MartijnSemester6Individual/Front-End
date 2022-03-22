import Head from 'next/head';
import Sidebar from '../components/sidebar';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Kwetter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[93.75em] mx-auto">
        <Sidebar/>
      </main>
    </div>
  );
};

export default Home;

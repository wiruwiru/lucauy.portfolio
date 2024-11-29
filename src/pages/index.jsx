import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import RepositoryList from '../components/RepositoryList'
import Stats from '../components/Stats'

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600,
  }
}

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Luca's Portfolio</title>
        <meta name="description" content="Luca's web development portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <Home />
        <RepositoryList />
        <Stats />
      </main>
      <Footer />
    </div>
  )
}
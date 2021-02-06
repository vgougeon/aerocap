import Head from 'next/head'
import FindSection from '../components/findSection';
import Footer from '../components/footer';
import Header from '../components/header'
import ProductSection from '../components/productionSection';
import { Scroller } from '../components/scroller';
import HomeSection from './../components/homeSection';
import TeamSection from './../components/teamSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Aerocap</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <Header />
      <Scroller />
      <HomeSection />
      <FindSection />
      <ProductSection />
      <TeamSection />
      <Footer />
    </div>
  )
}

// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import AOS from 'aos';
import { useEffect } from 'react';
import Navbar from '@/components/organisems/Navbar';
import MainBanner from '@/components/organisems/MainBanner';
import TransactionStep from '@/components/organisems/TransactionStep';
import FeaturedGame from '@/components/organisems/FeaturedGame';
import Reached from '@/components/organisems/Reached';
import Story from '@/components/organisems/Story';
import Footer from '@/components/organisems/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Navbar/>
      <MainBanner/>
      <TransactionStep />
      <FeaturedGame/>
      <Reached/>
      <Story/>
      <Footer/>
    </>
  );
}

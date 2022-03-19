import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Alex_nav from '../Components/Alex_nav'
import Herosection from '../Components/Herosection'
import Feature from '../Components/Feature'
import Cta from '../Components/Cta'
import IntroAlex from '../Components/IntroAlex'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Health </title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <Alex_nav/>
      <Herosection/>
      <Feature/>
      <Cta/>
      <IntroAlex/>
    </div>
  )
}

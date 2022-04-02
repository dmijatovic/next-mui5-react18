import type { NextPage } from 'next'
import Head from 'next/head'

import PageLayout from '../components/PageLayout'
import MuiHelloWorld from '../components/MuiHelloWorld'
import StyledHelloWorld from '../components/StyledHelloWorld'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <MuiHelloWorld />

        <StyledHelloWorld />
      </PageLayout>

    </>
  )
}

export default Home

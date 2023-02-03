import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import NavigationBar from '@/src/components/NavigationBar'
import CustomButton from '@/src/components/utils/CustomButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Abnormal Security Clone</title>
        <meta name="description" content="Abnormal Security Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-[4000px]  relative'>
        <NavigationBar />
        <CustomButton text="Why Abnormal" bgColor='bg-assembly-mint' bgColorHover="hover:bg-assembly-black" color="text-assembly-black" colorHover="hover:text-assembly-white" rightArrow={true}/>
        <CustomButton text="Forrester Total Economic Impact™️ Study" bgColor='bg-assembly-light-yellow' bgColorHover="hover:bg-assembly-black" color="text-assembly-black" colorHover="hover:text-assembly-white" rightArrow={true}/>
      </main>
    </>
  )
}

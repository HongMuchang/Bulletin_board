import { NextPage } from 'next'
import 'tailwindcss/tailwind.css'
// import Head from 'next/head'
// import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <p>HelloWorld</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
  )
}

export default Home

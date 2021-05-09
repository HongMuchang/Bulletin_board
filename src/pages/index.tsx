import { NextPage } from 'next'
import 'tailwindcss/tailwind.css'
import { Layout } from '../components/template/Layout'

const Home: NextPage = () => {
  return (
    <div>
      <Layout title={'hello'}>
        <p>hello</p>
      </Layout>
    </div>
  )
}

export default Home

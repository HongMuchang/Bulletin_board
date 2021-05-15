import { useState, VFC } from 'react'
import { GetStaticProps } from 'next'
import 'tailwindcss/tailwind.css'
import { Card } from '../components/atoms/card'
import { Layout } from '../components/template/Layout'
import { Date } from '../date/index'
import { getCategoryGenre, getCategoryData } from '../lib/index'
import { From } from '../components/atoms/from'

type Props = {
  posts: post[]
}

type post = {
  title: string
  link: string
  category: string
}

const Home: VFC<Props> = ({ posts }) => {
  const [value, setValue] = useState<string>('')

  return (
    <div className="bg-gray-800">
      <Layout title={'hello'}>
        <From setValue={setValue} />
        <ul className="flex w-full flex-wrap justify-around m-auto">
          {posts.map((post, index) =>
            post.title.includes(value) || post.category.includes(value) ? (
              <li className="break-words pt-7" key={index}>
                <a href={post.link} rel="noreferrer" target="_blank">
                  <Card title={post.title} category={post.category} />
                </a>
              </li>
            ) : (
              ''
            )
          )}
        </ul>
      </Layout>
    </div>
  )
}
// getCategoryData('React')
getCategoryData('React')
export const getStaticProps: GetStaticProps = async () => {
  const posts = await Date
  return {
    props: { posts },
  }
}
export default Home

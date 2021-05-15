import type { VFC } from 'react'
import { getCategoryGenre, getCategoryData } from '../../lib/index'
import { GetStaticPaths, GetStaticProps } from 'next'
export const Category: VFC = () => {
  return (
    <header>
      <nav className=" bg-gray-900 w-screen">
        <div className="flex items-center pl-8 h-20">
          <div className="flex space-x-4">1</div>
        </div>
      </nav>
    </header>
  )
}

//
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getCategoryGenre()
  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (params: string) => {
  const post = await getCategoryData(params)
  return {
    props: { post },
  }
}

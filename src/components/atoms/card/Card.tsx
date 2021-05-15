import Link from 'next/link'
import type { VFC } from 'react'

type Props = {
  title: string
  category: string
}

export const Card: VFC<Props> = (props) => {
  const { title, category } = props
  const link = `/category/${category}`
  return (
    <>
      <div className=" w-72 h-38 rounded bg-gray-300 shadow-lg my-5 m-3 hover:opacity-70">
        <div className="px-6 py-4">
          <p className="font-bold text-lg mb-2 center items-center pt-2 m-auto">
            {title}
          </p>
          <div>
            <Link href={link}>
              <a className="text-blue-500 text-base  hover:text-pink-400">
                #{category}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

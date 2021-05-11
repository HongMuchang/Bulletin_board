import Head from 'next/head'
import { ReactNode, VFC } from 'react'
import { Header, Footer } from '../atoms/layout/index'

type Props = {
  title: string
  children: ReactNode
}

export const Layout: VFC<Props> = (props) => {
  const { title, children } = props

  return (
    <>
      <div>
        <Head>
          <title>{title}</title>
        </Head>

        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

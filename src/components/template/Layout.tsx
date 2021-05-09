import Head from 'next/head'
import { ReactNode, VFC } from 'react'
import { Footer } from '../atoms/layout/Footer'
import { Header } from '../atoms/layout/header'

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
        <main className="h">{children}</main>
        <Footer />
      </div>
    </>
  )
}

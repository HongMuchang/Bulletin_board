import Link from 'next/link'
import type { VFC } from 'react'

export const Header: VFC = () => {
  return (
    <header>
      <nav className=" bg-gray-900 w-screen">
        <div className="flex items-center pl-8 h-20">
          <div className="flex space-x-4">
            <Link href="/">
              <a className="text-gray-300 hover:bg-gray-700  text-3xl px-3 py-2 rounded">
                Home
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

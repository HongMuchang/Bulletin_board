import type { VFC } from 'react'
import { useState } from 'react'

type Props = {
  setValue: any
}

export const From: VFC<Props> = (props) => {
  const { setValue } = props
  const [title, setTitle] = useState('')

  const changes = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    setValue(e.target.value)
  }

  return (
    <>
      <form className="pt-5 w-2/4 m-auto">
        <div className="mb-4">
          <input
            className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="検索"
            onChange={changes}
            value={title}
          />
        </div>
      </form>
    </>
  )
}

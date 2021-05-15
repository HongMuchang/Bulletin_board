import { Date } from '../date/index'

export async function getCategoryData(category: string): Promise<any> {
  const res = await Date
  const Ary = []
  res.map((r) => {
    if (r.category == category) {
      Ary.push(r)
      console.log(r)
      return {
        params: {
          title: r,
        },
      }
    }
    return
  })
}

//--------------------------
//カテゴリーのジャンル作成
//--------------------------
export async function getCategoryGenre(): Promise<void> {
  const res = await Date
  const ary: [] = []
  res.map((r) => {
    ary.push(r.category)
  })

  const newAry = [...new Set(ary)]

  newAry.map((n) => {
    console.log(n)
    return {
      params: {
        id: n,
      },
    }
  })
}

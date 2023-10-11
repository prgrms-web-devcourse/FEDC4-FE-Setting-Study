import { useState } from 'react'

export const usePractice = () => {
  const [data, setData] = useState('practice')
  const updateState = (newData: string) => {
    setData(newData)
  }
  return { data, updateState }
}

import { useState } from 'react'

export const usePractice = () => {
  const [data, setData] = useState('practice')
  return { data }
}

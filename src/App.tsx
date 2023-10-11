import { useState } from 'react'
import { Button } from '@/components/common'
import './style/global.css'

// TODO : 절대경로 test

function App() {
  const [count, setCount] = useState(0)

  // ❗️TODO : 연습용 레포라서 에러들을 몇 개 내보았습니다!
  // const array_function = (number) => number
  // const myNumber = 10
  // const my_number = 20 // 얘 에러남!
  // const mynumber = 20
  return (
    <>
        <Button label='안녕' primary={true}></Button>
        <button className='text-3xl text-blue-500 bg-pink'>크아악</button>
    </>
  )
}

export default App

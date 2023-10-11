import { useState } from 'react'
import reactLogo from './assets/img/react.svg'
import { Box, Button } from '@/components/common'
import viteLogo from '/vite.svg'
import './App.css'

// TODO : 절대경로 test

function App() {
  const [count, setCount] = useState(0)

  // ❗️TODO : 연습용 레포라서 에러들을 몇 개 내보았습니다!
  // const array_function = (number) => number
  // const myNumber = 10
  // const my_number = 20 // 얘 에러남!
  // const mynumber = 20
  console.log('안녕!')
  return (
    <>
      <div>
        <Box></Box>
        <Button text={'wdwdwd'} />
        <a href={'https://vitejs.dev'} target={'_blank'}>
          <img src={viteLogo} className={'logo'} alt={'Vite logo'} />
        </a>
        <a href={'https://react.dev'} target={'_blank'}>
          <img src={reactLogo} className={'logo react'} alt={'React logo'} />
        </a>
      </div>
      <h1>{'Vite + React'}</h1>
      <div className={'card'}>
        <button onClick={() => setCount((count) => count + 1)}>
          {'count is '}
          {count}
        </button>
        <p>
          {'Edit '}
          <code>{'src/App.tsx'}</code> {'and save to test HMR'}
        </p>
      </div>
      <p className={'read-the-docs'}>
        {'Click on the Vite and React logos to learn more'}
      </p>
    </>
  )
}

export default App

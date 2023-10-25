
import Button from '@/components/common/Button/Button'
import './style/global.css'

// TODO : 절대경로 test

function App() {
  return (
    <>
        <Button label='안녕' primary={true}></Button>
        <button className='text-3xl text-blue-500 bg-pink'>크아악</button>
    </>
  )
}

export default App

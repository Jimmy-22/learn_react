import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('副作用执行了')
  }, [count])
  return (
    <button
      onClick={() => {
        setCount(count + 1)
      }}
    >
      {count}
    </button>
  )
}

export default App

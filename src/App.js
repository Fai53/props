import React from 'react'
import NavBar from './components/NavBar'
import Todo from './components/Todo'

function App() { 1

  let title ="My activities to do for the week"
  return (
    <div>
<NavBar title={title}/>
<main>
<Todo title="learning react"datetime="15th August2022" />
<Todo title="raning everyday"datetime="15th August2022" />
<Todo title="sleping allningt"datetime="15th August2022" />
<Todo title="learning react"datetime="15th August2022" />
<Todo title="learning react"datetime="15th August2022" />
</main>


    </div>
  )
}

export default App
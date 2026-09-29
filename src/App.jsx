import { ButtonGroup } from '@heroui/react'
import './App.css'
import { Counter } from './components/Counter'
import { Dices } from './components/Dices'
import { Programs } from './components/Programs'
import { Button } from '@heroui/react'
import { useState } from 'react'
import { MyTodos } from './components/MyTodos'

function App() {
  const [selected, setSelected] = useState('programs')

  //const nap='kedd'
  //const nr=110

  return (
    <div>
      <h1 className='text-center font-bold text-3xl'>My first App</h1>

      <div className='flex flex-col items-center gap-6 p-10'>
        <ButtonGroup variant="primary">
          <Button onClick={()=>setSelected('counter')} 
                  className={selected=='counter' ? 'bg-indigo-200 text-indigo-700':'text-indigo-200 bg-indigo-700'}>Counter</Button>
          <Button onClick={()=>setSelected('dice')}
                className={selected=='dice' ? 'bg-indigo-200 text-indigo-700':'text-indigo-200 bg-indigo-700'}>
            <ButtonGroup.Separator />
            Dice Roller
          </Button>
          <Button onClick={()=>setSelected('programs')}
                className={selected=='programs' ? 'bg-indigo-200 text-indigo-700':'text-indigo-200 bg-indigo-700'}>
            <ButtonGroup.Separator />
            Programs
          </Button>
        </ButtonGroup>
        <Button onClick={()=>setSelected('todo')}
              className={selected=='todo' ? 'bg-indigo-200 text-indigo-700':'text-indigo-200 bg-indigo-700'}>
          Todo
        </Button>
      </div>

      {/*<p>Ma {nap} van.</p>
      <p>A szám {nr%2==0 ? 'páros' :'páratlan'} !</p>*/}

      { selected=='counter' && <Counter />}
      {selected=='dice' && <Dices/>}
      {(selected=='programs' || !selected) && <Programs/>}
      {selected=='todo' && <MyTodos/>}
    </div>
  )
}

export default App

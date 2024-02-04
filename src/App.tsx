import Fretboard from './components/Fretboard'
import { STANDARD } from './constants'

import './App.css'

function App() {

  return (
    <>
      <Fretboard tuning={STANDARD} fretCount={24}/>
    </>
  )
}

export default App

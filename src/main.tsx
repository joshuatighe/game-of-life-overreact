import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GameOfLife } from './components/GameOfLife.tsx'
import { Engine } from '@overreact/engine'
import './Main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Engine>
      <GameOfLife />
    </Engine>
  </StrictMode>,
)

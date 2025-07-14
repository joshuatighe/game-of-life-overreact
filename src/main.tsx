import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GameOfLife } from './GameOfLife.tsx'
import { Engine } from '@overreact/engine'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Engine>
      <GameOfLife />
    </Engine>
  </StrictMode>,
)

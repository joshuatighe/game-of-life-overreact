
import { createContext, useContext } from 'react'
import { GameOfLifeState } from '../state/GameOfLifeState'

export const GameOfLifeContext = createContext<GameOfLifeState>(new GameOfLifeState());

export const useGameOfLife = () => {
  return useContext(GameOfLifeContext)
}

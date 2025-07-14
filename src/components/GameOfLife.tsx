import { Board } from './Board'
import { GameOfLifeContext, useGameOfLife } from '../hooks/useGameOfLife'

export const GameOfLife = () => {
  const game = useGameOfLife();

  return (
    <GameOfLifeContext.Provider value={game}>
      <div className="min-h-screen bg-gray-700 flex flex-col justify-around items-center">
        <h1 className="text-neutral-50 font-bold text-3xl">game of life!</h1>
        <Board />
      </div>
    </GameOfLifeContext.Provider>
  )
}

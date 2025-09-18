import { useEffect, useState } from "react"
import Field from "./Comps/Field"

function App() {

  const [gameFielef, setGameField] = useState<string[][]>([
    ['','',''],
    ['','',''],
    ['','','']
  ])

  const [currentPlayer, setCurrentPlayer] = useState<"x"|"o">("x")

  function setOwner(row:number, col:number){

    let newGameField = [...gameFielef]
    newGameField[row][col] = currentPlayer
    setCurrentPlayer(prev=> prev === 'o' ? 'x' :'o')
    setGameField(newGameField)
  }

  

  return (
    <>
      <div className="flex min-h-screen justify-center items-center bg-[#192a32]">
        {/* <h1 className="text-5xl font-bold ">HEllo tictactoe</h1> */}

        <section className="grid grid-cols-3 gap-5">
          {
            gameFielef.map((row, rId)=>(
              row.map((e, cId)=><Field owner={e} row={rId} col={cId} setOwner={setOwner}></Field>)
            ))
          }
        </section>
   
      </div>
    </>
  )
}

export default App

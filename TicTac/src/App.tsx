import { useEffect, useState } from "react"
import Field from "./Comps/Field"

function App() {

  const [gameFielef, setGameField] = useState<string[][]>([
    ['','',''],
    ['','',''],
    ['','','']
  ])

  const [winner, setWinner] = useState<"o"|"x"|undefined|"draw">(undefined)
  const [currentPlayer, setCurrentPlayer] = useState<"x"|"o">("x")

  const setOwner = (row:number, col:number) =>{

    let newGameField = [...gameFielef]
    newGameField[row][col] = currentPlayer
    setCurrentPlayer(prev=> prev === 'o' ? 'x' :'o')
    setGameField(newGameField)
  }

  const runTest = () =>{
    gameFielef.forEach(row =>{
      if(row[0]!=='' && row[0]===row[1] && row[1]===row[2]) {
        setWinner(row[0] as "x"|"o")
        return;
      }
    })

    for (let i = 0; i < 3; i++) {
      if(gameFielef[0][i] !=="" &&gameFielef[0][i] === gameFielef[1][i]&& gameFielef[1][i]===gameFielef[2][i]){
        setWinner(gameFielef[0][i] as "x"|"o")
         return;
      }
      
    }

    if(gameFielef[0][0] !== ''&& gameFielef[0][0] === gameFielef[1][1] && gameFielef[1][1] === gameFielef[2][2]){

      setWinner(gameFielef[0][0] as "x" |"o")
       return;
    }

       if(gameFielef[0][2] !== ''&& gameFielef[0][2] === gameFielef[1][1] && gameFielef[1][1] === gameFielef[2][0]){

      setWinner(gameFielef[0][2] as "x" |"o")
       return;
    }

    for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 3; k++) {
        if(gameFielef[i][k] === ''){
          return;
        }
        
      }
      
    }

    setWinner("draw")


  }
  
  useEffect(runTest,[gameFielef])

  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center bg-[#192a32]">
        {/* <h1 className="text-5xl font-bold ">HEllo tictactoe</h1> */}
        {
          winner?  <h1 className={`absolute top-[50%] left-[50%] text-center text-7xl transform-[translate(-50%,-50%)] w-full p-52
          ${winner === "o" ? "bg-[#efb339]" : winner === "x"? "bg-[#31c3c0]" :"bg-gray-500"} `}
          onClick={()=>{window.location.reload()}}>{winner}</h1>:<></>
        }
      
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

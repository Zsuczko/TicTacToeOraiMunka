const Field = (props:{owner: string, row:number, col:number, setOwner:(row:number, col:number)=>void}) => {
  return (
    <button
    onClick={()=>{props.setOwner(props.row, props.col)}} 
    className="bg-[#1f3540] h-44 w-44 rounded-3xl shadow-2xl shadow-[#132127]  aspect-square text-7xl active:transform-[translateY(10px)] transition-[0.2]" disabled={props.owner !==''}>
        {props.owner ==='x'&&
        <i className="fa-solid fa-x text-[#31c3c0]"></i>
        }
         {props.owner ==='o'&&
        <i className="fa-solid fa-o text-[#efb339]"></i>
        }
    </button>
  )
}

export default Field
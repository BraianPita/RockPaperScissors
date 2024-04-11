import { IconMountain } from "@tabler/icons-react"


const PlayingCard = ({MyIcon}: {MyIcon: typeof IconMountain}) => {
   return ( 
   <div className="flex bg-slate-800 rounded-2xl w-100 h-100 justify-center align-middle flex-grow aspect-[5/6]">
        <MyIcon className="self-center text-white" size={"75%"} />
    </div>
    )
}

export default PlayingCard
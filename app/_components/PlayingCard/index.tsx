import { IconMountain } from "@tabler/icons-react"
import styles from './index.module.scss'

const PlayingCard = ({MyIcon}: {MyIcon: typeof IconMountain}) => {
   return ( 
   <div className={"flex bg-slate-800 rounded-2xl h-full justify-center overflow-clip " +
                    "align-middle flex-grow aspect-[5/6] hover:scale-110 hover:transition-transform " + styles.reflection}>
        
        <MyIcon className="self-center text-white" size={"75%"} />

    </div>
    )
}

export default PlayingCard
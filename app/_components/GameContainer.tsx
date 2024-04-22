import { IconMountain, IconScissors, IconWallpaper } from "@tabler/icons-react";
import PlayingCard from "./PlayingCard";

const GameContainer = () => {
    return (
        <div className="h-[100vh] w-full bg-slate-600 flex flex-col align-middle flex-grow">
            <h1 className="text-center text-5xl text-white my-4">Rock Paper Scissors</h1>

            <div className="w-100 h-[70%] bg-slate-700 flex flex-col justify-center p-2 gap-2">
                <div className="bg-slate-800 rounded-md h-2/4 aspect-[5/6] m-auto"></div>

                <div id="allySlot" className="bg-slate-800 rounded-md h-2/4 aspect-[5/6] m-auto"></div>
            </div>

            <div className="h-[30%] w-100 grid grid-cols-3 gap-6 p-3 max-w-[900px] self-center">
                <PlayingCard MyIcon={IconMountain} />
                <PlayingCard MyIcon={IconWallpaper} />
                <PlayingCard MyIcon={IconScissors} />
            </div>
        </div>
    )
}

export default GameContainer;
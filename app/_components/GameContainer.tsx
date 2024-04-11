import { IconMountain, IconScissors, IconWallpaper } from "@tabler/icons-react";
import PlayingCard from "./PlayingCard";

const GameContainer = () => {
    return (
        <div className="h-full w-full bg-slate-600 flex flex-col align-middle">
            <h1 className="text-center text-5xl text-white my-4">Rock Paper Scissors</h1>
            <div className="h-100 w-100 grid grid-cols-3 gap-6 p-3 max-w-[900px] self-center">
                <PlayingCard MyIcon={IconMountain} />
                <PlayingCard MyIcon={IconWallpaper} />
                <PlayingCard MyIcon={IconScissors} />
            </div>
        </div>
    )
}

export default GameContainer;
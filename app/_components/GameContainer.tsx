import { IconMountain, IconScissors, IconWallpaper } from "@tabler/icons-react";
import PlayingCard from "./PlayingCard";

const GameContainer = () => {
    return (
        <div className="h-full w-full bg-slate-600">
            <h1 className="text-center text-5xl text-white">Rock Paper Scissors</h1>
            <div className="h-100 w-100 grid grid-cols-3 gap-3 p-3">
                <PlayingCard MyIcon={IconMountain} />
                <PlayingCard MyIcon={IconWallpaper} />
                <PlayingCard MyIcon={IconScissors} />
            </div>
        </div>
    )
}

export default GameContainer;
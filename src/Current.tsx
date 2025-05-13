import Primary from "./Primary";
import Stat from "./Stat";
import type { CurrentProps } from "./types";

function Current({ updated, current: { primary, stats } }: CurrentProps) {
    return (
        <div className="flex flex-col h-full">

            <div className="my-4">
                <Primary {...primary} />
            </div>
            <div className="flex flex-col h-full justify-evenly">
                {stats.map((stat, idx) => <Stat key={idx} {...stat} />)}
            </div>
                        <div className="my-4">
                {updated}
            </div>
        </div>
    )
}

export default Current
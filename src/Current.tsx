import Primary from "./Primary";
import Stat from "./Stat";
import type { CurrentProps } from "./types";

function Current({ updated, current: { primary, stats } }: CurrentProps) {
    return (
        <div>
            <div>
                {updated}
            </div>
            <Primary {...primary} />
            {stats.map((stat, idx) => <Stat key={idx} {...stat} />)}
        </div>
    )
}

export default Current
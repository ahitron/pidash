import Day from "./Day";
import type { DailyProps } from "./types";

function Daily({ days }: DailyProps) {
    return (
        <div>
            {days.map((day, idx) => <Day key={idx} {...day} />)}
        </div>
    )
}

export default Daily
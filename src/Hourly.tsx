import Hour from "./Hour";
import type { HourlyProps } from "./types";

function Hourly({ hours }: HourlyProps) {
    return (
        <div className="flex flex-row justify-evenly items-center h-full">
            {hours.map((hour, idx) => <Hour key={idx} {...hour} />)}
        </div>
    )
}

export default Hourly
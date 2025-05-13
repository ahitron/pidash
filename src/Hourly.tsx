import Hour from "./Hour";
import type { HourlyProps } from "./types";

function Hourly({ hours }: HourlyProps) {
    return (
        <div>
            {hours.map((hour, idx) => <Hour key={idx} {...hour} />)}
        </div>
    )
}

export default Hourly
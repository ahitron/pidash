import type { HourlyProps } from "./types";

function Hourly({ hours }: HourlyProps) {
    return (
        <div>
            {hours.map(
                ({ time, condition, temp, precip }, idx) => (
                    <div key={idx}>
                        <div>
                            {time}
                        </div>
                        <div>
                            {condition}
                        </div>
                        <div>
                            {temp}
                        </div>
                        <div>
                            {precip}
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default Hourly
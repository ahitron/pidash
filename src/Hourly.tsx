import type { HourlyProps } from "./types";

function Hourly({ hours }: HourlyProps) {
    return (
        <div>
            {hours.map(
                ({ time, condition, icon, temp, precip }, idx) => (
                    <div key={idx}>
                        <div>
                            {time}
                        </div>
                        <div>
                            <img src={icon} />
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
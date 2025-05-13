import type { HourProps } from "./types";

function Hour({ time, condition, icon, temp, precip }: HourProps) {
    return (
        <div>
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
}

export default Hour
import type { HourProps } from "./types";

function Hour({ time, condition, icon, temp, precip }: HourProps) {
    return (
        <div className="text-3xl">
            <div className="text-4xl font-bold">
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
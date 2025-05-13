import type { DayProps } from "./types";

function Day({ name, condition, icon, hi, lo, precip }: DayProps) {
    return (
        <div className="text-xl">
            <div className="text-2xl font-bold">
                {name.toUpperCase()}
            </div>
            <div>
                <img src={icon} className="mx-auto" />
                {condition}
            </div>
            <div>
                {hi} / {lo}
            </div>
            <div>
                {precip}
            </div>
        </div>
    )
}

export default Day
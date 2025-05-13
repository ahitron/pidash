import type { DayProps } from "./types";

function Day({ name, condition, icon, hi, lo, precip }: DayProps) {
    return (
        <div>
            <div>
                {name}
            </div>
            <div>
                <img src={icon} />
                {condition}
            </div>
            <div>
                {hi}
            </div>
            <div>
                {lo}
            </div>
            <div>
                {precip}
            </div>
        </div>
    )
}

export default Day
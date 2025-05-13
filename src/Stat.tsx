import type { StatProps } from "./types";

function Stat({ title, value }: StatProps) {
    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                {value}
            </div>
        </div>
    )
}

export default Stat
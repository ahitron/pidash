import type { StatProps } from "./types";

function Stat({ title, value }: StatProps) {
    return (
        <div>
            <div>
                {title.toUpperCase()}
            </div>
            <div className="text-3xl font-bold">
                {value.toUpperCase()}
            </div>
        </div>
    )
}

export default Stat
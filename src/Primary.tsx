import type { PrimaryProps } from "./types";

function Primary({ city, temp, condition }: PrimaryProps) {
    return (
        <div>
            <div className="text-2xl">
                {city}
            </div>
            <div className="text-8xl my-2">
                {temp}
            </div>
            <div className="text-5xl">
                {condition}
            </div>
        </div>
    )
}

export default Primary
import type { PrimaryProps } from "./types";

function Primary({ city, temp, condition, icon }: PrimaryProps) {
    return (
        <div>
            <div>
                {city}
            </div>
            <div>
                {temp}
            </div>
            <div>
                <img src={icon} />
                {condition}
            </div>
        </div>
    )
}

export default Primary
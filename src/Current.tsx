import type { CurrentProps } from "./types";

function Current({ updated, current: { primary, stats } }: CurrentProps) {
    const { city, temp, condition } = primary
    return (
        <div>
            <div>
                {updated}
            </div>
            <div>
                {city}
            </div>
            <div>
                {temp}
            </div>
            <div>
                {condition}
            </div>
            {stats.map(
                ({ title, value }, idx) => (
                    <div key={idx}>
                        <div>
                            {title}
                        </div>
                        <div>
                            {value}
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default Current
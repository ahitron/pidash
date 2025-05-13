import type { DailyProps } from "./types";

function Daily({ days }: DailyProps) {
    return (
        <div>
            {days.map(
                ({ name, condition, hi, lo, precip }, idx) => (
                    <div key={idx}>
                        <div>
                            {name}
                        </div>
                        <div>
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
            )}
        </div>
    )
}

export default Daily
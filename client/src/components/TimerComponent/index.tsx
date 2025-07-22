import { type FC } from 'react'


type TimerComponentProps = {
    number: number;
    label: string;
}
const TimerComponent: FC<TimerComponentProps> = ({ number, label }) => {
    return (
        <div className="flex flex-col justify-start items-center">
            {/* angka */}
            <p className="text-4xl font-bold text-white min-w-[3.2rem] flex justify-center items-center">
                {number}
            </p>
            {/* label */}
            <p className="text-to-small font-semibold text-white">
                {label}
            </p>
        </div>
    )
}

export default TimerComponent

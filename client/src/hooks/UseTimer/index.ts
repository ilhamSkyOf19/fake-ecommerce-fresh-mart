import { differenceInSeconds } from 'date-fns';
import { useEffect, useState } from 'react';

export const useTimer = (targetDate: Date) => {
    // state selisih waktu target - waktu sekarang
    const [remindingTime, setRemindingTime] = useState(differenceInSeconds(targetDate, new Date()));

    // interval selisih waktu target - waktu sekarang
    useEffect(() => {
        const timer = setInterval(() => {
            // ambil selisih waktu target - waktu sekarang dalam seconds
            const seconds = differenceInSeconds(targetDate, new Date());
            setRemindingTime(seconds);
        }, 1000)

        return () => clearInterval(timer);
    }, [targetDate])


    // ambil nial dari hari, jam, menit, detik
    const days = Math.floor(remindingTime / (3600 * 24));
    const hours = Math.floor((remindingTime % (3600 * 24)) / 3600);
    const minutes = Math.floor((remindingTime % 3600) / 60);
    const seconds = remindingTime % 60;

    return { days, hours, minutes, seconds };

}
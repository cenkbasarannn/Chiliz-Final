import { useBalances } from "@/hooks/useBalances";
import React from "react";
import styles from "@/styles/Home.module.css";
import Countdown from "react-countdown";
import { formatBalance } from "@/util/formatBalance";

const Meeting = () => {
    const { message, nativeBalance } = useBalances();

    const native =
        nativeBalance && Number(nativeBalance.balance) > 0
            ? formatBalance(nativeBalance.balance)
            : 0;
    const isEligible = Number(native) > 0;
    const countdownDate = new Date("2023-12-31T23:59:59");

    if (message) return <p>{message}</p>;
    return (
        <div className={styles.center}>
            <div>
                <h1 className="my-8 text-center text-3xl font-bold  ">
                Time left for the meeting
                </h1>

                <Countdown date={countdownDate} className={styles.countdown} />

                <h2 className="my-8 text-center text-xl font-bold">
                    
                    
                    
                </h2>
            </div>
        </div>
    );
};

export default Meeting;

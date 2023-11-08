import ConnectWalletBtn from "@/components/ConnectWalletBtn";
import Meeting from "@/components/Meeting";
import { useAppContext } from "@/contexts/AppContext";
import { useAuth } from "@/hooks/useAuth";
import styles from "@/styles/Home.module.css";

function Hub() {
    const { isConnected } = useAppContext();
    const { handleConnect } = useAuth();

    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <div>
                    <h1 className="text-6xl font-semibold my-4 text-center">
                    Welcome to my Final Project
                    </h1>

                    <h2 className="text-4xl text-center">
                        <div className="my-8">People with the same token can use it</div>
                        <div className="mt-8">
                         Meet token holders
                        </div>
                    </h2>
                </div>
            </div>
            {isConnected ? (
                <Meeting />
            ) : (
                <ConnectWalletBtn onClick={handleConnect} />
            )}
        </main>
    );
}
export default Hub;

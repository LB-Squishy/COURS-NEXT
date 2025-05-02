import Navbar from "@/components/Navbar";
import SwitchThemeBtn from "@/components/SwitchThemeBtn";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <SwitchThemeBtn />
            {children}
        </>
    );
}

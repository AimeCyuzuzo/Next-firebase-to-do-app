import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
        
    const openNav = () =>{
        document.getElementById("navContainer").style.padding = "5% 30%";
        document.getElementById("navContainer").style.height = "100%";
    }
    const closeNav = () =>{
        document.getElementById("navContainer").style.height = "0";
        document.getElementById("navContainer").style.padding = "0";
    }

    return ( 
        <header className="p-0">
        <div className="background1"></div>
            <div className="topheader container-fluid">
                <img src="/headerlogo.svg" alt="Header logo" />
            </div>
            <div className="container-fluid header">
                <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <img src="" alt="" />
                        </div>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Aime Cyuzuzo</p>
                    <img src="" alt="" />
                </div>
            </div>
        </header>
     );
}
 
export default NavBar;
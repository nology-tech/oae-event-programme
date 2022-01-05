import { useState } from "react";
import "./Layout.scss"

const Layout = () => {
    const [currentTheme, setTheme] = useState("modern");
    const fontType = 2; 
    
    const getNewTheme = (fontType) => {
        if (fontType === 1) {
            setTheme("modern")
        } else if (fontType === 2) {
            setTheme("classic")
        }
    }
    getNewTheme(fontType)
    console.log(currentTheme)
    /* <div className ={currentTheme}/*{`home ${currentTheme}`}*/
    /* </div> */
    return (
    <>
    <h1>Hello</h1>
    </>);
}
 
export default Layout;
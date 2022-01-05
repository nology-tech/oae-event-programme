import "./Layout.scss"

const Layout = (props) => {
    const {fontType, children} = props;
    let theme ="";
    if (fontType === 1){
        theme = "modern";
    }else if (fontType === 2){
        theme = "classic";
    }

    return (
    <>
    <div className={theme}>
        {children}
    </div>
    </>);
}
 
export default Layout;
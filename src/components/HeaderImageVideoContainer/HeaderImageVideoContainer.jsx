import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
//import placeHolderImg from "../../assets/images/image33";
import "./HeaderImageVideoContainer.scss";

const HeaderImageVideoContainer = (props) => {
    const {embedId, imgSrc } = props;

    if(embedId){
        return <div className= "header-container">
            <YoutubeEmbed embedId={embedId}/>
            </div>
    } else            
    if(imgSrc){
        return <div className= "header-container">
        <img src={imgSrc} className="header-image" alt=""/>
        </div>
    } else{
        console.error("No props provided to header container.")
        return null;
    }
}

export default HeaderImageVideoContainer;
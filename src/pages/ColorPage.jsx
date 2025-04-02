import { useParams } from "react-router";


const allowedColors = ["red", "green", "gray", "blue"];

function ColorPage() {
    //One way --> let params = useParams()
    const { color } = useParams();
    const isValidColor = allowedColors.includes(color.toLowerCase());
    

    const pageStyle = {
        backgroundColor: isValidColor ? color : "black",
        color: "white",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    };

    return (
        <div style={pageStyle}>
            <h1>{isValidColor ? color.toUpperCase() : "COLOR NOT FOUND"}</h1>
        </div>
    )
}


export default ColorPage;
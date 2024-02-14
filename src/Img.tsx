import { useState } from "react";
import Amnesiac from "./images/Amnesiac.jpg";
import record2 from "./images/record2.png";

const Img = () => {
    const [currentImage, setCurrentImage] = useState(Amnesiac);

    const handleChangeImage = (imageSrc:any) => {
        console.log(imageSrc)
        setCurrentImage(imageSrc);
    };
 
    const hairetu = [Amnesiac, record2, Amnesiac];

    return (
        <div>
            <div>
                <img src={currentImage} alt="" style={{ width: "300px", height: "300px" }} />
            </div>
            <div style={{ display: "flex" }}>
                {hairetu.map((imageSrc, index) => (
                    <div key={index}>
                        <button onClick={() => handleChangeImage(imageSrc)}>
                            <img src={imageSrc} alt="" style={{ width: "300px", height: "300px" }} />
                        </button>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default Img;

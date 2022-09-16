import { useState } from "react";
import './Button.css'

const Buttons = (props) => {
//Only the Like button works.  Even if I click dislike it highlights the like...
    const [approveButton, setApproveButton ] = useState("inactive");
    const [disapproveButton, setDisapproveButton] = useState("inactive")

    function handleClickLike(){
        if(approveButton === "inactive"){
            setApproveButton('active');
            setDisapproveButton('inactive');
        } else {
            setApproveButton('inactive');
        }         
    }

    function handleClickDislike(){
        if(disapproveButton === "inactive"){
            setDisapproveButton('active');
            setApproveButton('inactive');
        } else {
            setDisapproveButton('inactive');
        }
    }

    return (
        <div className="Buttons" id="buttons">
            <div>
                <button className={approveButton} onClick={handleClickLike} name="approve" id="approve">Like 😀</button>
            </div>
            <div>
                <button className={disapproveButton} onClick={handleClickDislike} name="disapprove" id="disapprove">Dislike 🥵</button>
            </div>

        </div>
    )
}

export default Buttons;
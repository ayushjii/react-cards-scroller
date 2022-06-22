import React from "react";
import Random from "./download.jpg"; 

export default function Cards() {
    return(
        <div>
            <article className="card">
                <img src={Random} alt=" " className="card__img" />
                <div className="card__data">
                <h2 className="card__title">The F1</h2>
                <p className="card__descrption">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
              
                </p>
                <a href="/" className="card__btn">For More</a>
                </div>
            </article>
        </div>
    );
}
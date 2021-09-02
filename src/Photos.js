import React from "react";
import "./Photo.css";

export default function Photos(props) {
    if (props.photos) {
        console.log(props.photos);
        return (
            <section className="Photos">
                <div className="row">
                    {props.photos.map((photo, index) => {
                        return (
                            <div className="col-4" key={index}>
                                <img src={photo.src.tiny} alt="" className="img-fluid" />
                            </div>
                        )
                    })}
                </div>
            </section>
        );
    } else {
        return null;
    }
}
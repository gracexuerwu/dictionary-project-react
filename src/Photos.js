import React from "react";
import "./Photo.css";

export default function Photos(props) {
    if (props.photos) {
        return (
            <section className="Photos">
                <div className="row">
                    <h1>Photo results of {props.results.word} ... </h1>
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
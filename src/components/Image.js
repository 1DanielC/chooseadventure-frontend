import React from "react";

export default function Image(props) {
    const {src, srcHovered} = props;

    return (
        <div class="image"><img class="imageNotHovered" src={src}/><img class="imageHovered" src={srcHovered}/></div>
    )
}
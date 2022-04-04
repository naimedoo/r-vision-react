import React from "react";

export default function Button(props) {
return (
    <div>
     <button onClick={(props.children)}>cliquez</button>
    </div>
)
}
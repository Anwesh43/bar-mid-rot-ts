import React from "react";
import { useStyle } from "./hooks";
import withContext from "./withContext";

interface BMDProps {
    w : number,
    h : number,
    scale : number, 
    cb : () => void 
}

const BarMidDown = (props : BMDProps) => {
    const {barStyle, parentStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <div style = {parentStyle()}>
            <div style = {barStyle()} onClick = {() => props.cb()}></div>
        </div>
    )
}

export default withContext(BarMidDown)
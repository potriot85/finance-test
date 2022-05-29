import { useEffect, useRef } from "react";
import s from './Elements.module.css'
import React from "react";
import arrowUp from '../../images/arrowUp.png';
import arrowDown from '../../images/arrowDown.jpg';

const Yield = (props) => {
    const prevCount = usePrevious(props.props);
    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }
    let difference = props.props - prevCount;
    if (difference >= 0) {
            return (
                <div class="text-success">
                    {props.props} <img src={arrowUp} className={s.arrow} alt="arrowUp" />
                </div>
            );
        } else {
            return (
                <div class="text-danger">
                    {props.props} <img src={arrowDown} className={s.arrow} alt="arrowDown" />
                </div>
            );
        };
}
export default Yield
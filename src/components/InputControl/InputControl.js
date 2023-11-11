import React from "react";

import styles from "./inputcontrol.module.css";

function InputControl(props) {
    
    let field = props.label
    
    return (
        <div className={styles.container}>
            {props.label && <label>{props.label}</label>}
            
            {/* <input type="text" {...props} /> */}
            {field==='Password' ? <input type="password" {...props} />
            :
            <input type="text" {...props} /> }
        </div>
    );
}

export default InputControl;
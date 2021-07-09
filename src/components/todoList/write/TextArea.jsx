import React from "react";

import TextField from "@material-ui/core/TextField";

import stringKr from "../../../contents/string/stringKr";

function Textarea() {
    return (
        <TextField
            id="outlined-basic"
            label={stringKr.write.textArea.placeHolder}
            variant="outlined"
        />
    );
}

export default Textarea;

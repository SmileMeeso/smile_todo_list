import React from "react";

import Typography from "@material-ui/core/Typography";

import stringKr from "../../../contents/string/stringKr";

function Title() {
    return (
        <Typography variant="h1" component="h2" gutterBottom>
            {stringKr.title.titleText}
        </Typography>
    );
}

export default Title;

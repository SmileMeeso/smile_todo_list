import React from "react";

import stringKr from "../../../contents/string/stringKr";

import Button from "@material-ui/core/Button";

function DeleteButton() {
    return (
        <Button variant="contained" color="secondary">
            {stringKr.list.deleteButton.text}
        </Button>
    );
}

export default DeleteButton;

import React from "react";

import Checkbox from "@material-ui/core/Checkbox";

import DeleteButton from "./DeleteButton";

function Item({ content }) {
    return (
        <li>
            <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <p>{"2020.01.02"}</p>
            <p>{"롸롸로라ㅗ라롸롸롸로라ㅗ라ㅗ라롸로라롸로"}</p>
            <DeleteButton />
        </li>
    );
}

export default Item;

import React from "react";

import Title from "../../components/todoList/title/Title";
import WriteContainer from "../../components/todoList/write/WriteContainer";
import ListContainer from "../../components/todoList/list/ListContainer";

function todoList() {
    return (
        <>
            <Title />
            <WriteContainer />
            <ListContainer />
        </>
    );
}

export default todoList;

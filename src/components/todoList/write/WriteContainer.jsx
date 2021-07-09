import React from "react";

import TextArea from "./TextArea";
import FormWrapper from "./FormWrapper";
import SubmitButton from "./SubmitButton";
import DateArea from "./DateArea";

function WriteContainer() {
    return (
        <FormWrapper>
            <DateArea />
            <TextArea />
            <SubmitButton />
        </FormWrapper>
    );
}

export default WriteContainer;

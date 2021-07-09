import React from "react";

function FormWrapper({ children }) {
    return (
        <form noValidate autoComplete="off">
            {children}
        </form>
    );
}

export default FormWrapper;

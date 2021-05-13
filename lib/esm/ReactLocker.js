import React from "react";
var ReactLocker = function (props) {
    var pincode = props.pincode;
    var _a = React.useState(""), userInput = _a[0], setUserInput = _a[1];
    var _b = React.useState(false), isCorrect = _b[0], setisCorrect = _b[1];
    var handleChange = function (e) {
        setUserInput(e.target.value);
    };
    var handleOk = function () {
        if (userInput === pincode) {
            setisCorrect(true);
        }
        else
            setisCorrect(false);
    };
    return (React.createElement("div", null, !isCorrect ? (React.createElement("div", null,
        React.createElement("input", { type: "text", onChange: handleChange }),
        React.createElement("button", { onClick: handleOk }, "ok"))) : (props.children)));
};
export default ReactLocker;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ReactLocker = function (props) {
    var pincode = props.pincode;
    var _a = react_1.default.useState(""), userInput = _a[0], setUserInput = _a[1];
    var _b = react_1.default.useState(false), isCorrect = _b[0], setisCorrect = _b[1];
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
    return (react_1.default.createElement("div", null, !isCorrect ? (react_1.default.createElement("div", null,
        react_1.default.createElement("input", { type: "text", onChange: handleChange }),
        react_1.default.createElement("button", { onClick: handleOk }, "ok"))) : (props.children)));
};
exports.default = ReactLocker;

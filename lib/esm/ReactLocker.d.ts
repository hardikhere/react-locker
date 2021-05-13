import React from "react";
interface iLocker {
    pincode: string;
    children: React.ReactNode;
}
declare const ReactLocker: React.FC<iLocker>;
export default ReactLocker;

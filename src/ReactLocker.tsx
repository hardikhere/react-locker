import React from "react";

interface iLocker {
  pincode: string;
  children: React.ReactNode;
}
const ReactLocker:React.FC<iLocker> = (props) => {
  const { pincode } = props;
  const [userInput, setUserInput] = React.useState("");
  const [isCorrect, setisCorrect] = React.useState(false);

  const handleChange = (e: any) => {
    setUserInput(e.target.value);
  };
  const handleOk = () => {
    if (userInput === pincode) {
      setisCorrect(true);
    } else setisCorrect(false);
  };
  return (
    <div>
      {!isCorrect ? (
        <div>
          <input type="text" onChange={handleChange} />
          <button onClick={handleOk}>ok</button>
        </div>
      ) : (
        props.children
      )}
    </div>
  );
};

export default ReactLocker;

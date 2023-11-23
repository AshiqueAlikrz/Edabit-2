import React, { useRef, useEffect } from "react";

function ExampleComponent() {
  const myInputRef = useRef(null);

  useEffect(() => {
    myInputRef.current.focus();
  }, []);

  return (
    <div>
      <label>
        Enter your name:
        <input type="text" ref={myInputRef} />
      </label>
      <p>You entered: {myInputRef.current.value}</p>
    </div>
  );
}

export default ExampleComponent;

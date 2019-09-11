// Importthe React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component

const Run = () => {
  /* 2. Building Content with JSX folder -------------------------------------------- */
  /*
  return (
    <div>
      <label class="quer" for="fullname">
        Enter fullname:
      </label>
      <input id="fullname" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>Enter</button>
    </div>
  );
  */
  /* 6. Referencing JS Variables in JSX.mp4 --------------------- */
  /*
    const enterinfo = "Click Me!";

    return (
        <div>
            <label class="quer" for="fullname">
                Enter fullname:
      </label>
            <input id="fullname" type="text" />
            <button style={{ backgroundColor: "blue", color: "white" }}>
                {enterinfo}
            </button>
        </div>
    );
    */
  /*
    function buttontext(){
    return 'click me please ';
    }

    return (
        <div>
            <label class="quer" for="fullname">
                Enter fullname:
      </label>
            <input id="fullname" type="text" />
            <button style={{ backgroundColor: "blue", color: "white" }}>
                {buttontext()}
            </button>
        </div>
    );
*/
  /*7. Values JSX Can't Show.mp4  */
  /*
  const buttontext = [10, "ty"];
  return (
    <div>
      <label class="quer" for="fullname">
        Enter fullname:
      </label>
      <input id="fullname" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttontext}
      </button>
    </div>
  );
  */
  /* 7. Values JSX Can't Show.mp4 part-two 2*/
  /*
  const buttontext = { tell: " hey click me " };
  const Labletext = "Enter-name:";
  return (
    <div>
      <label class="quer" for="fullname">
        {Labletext}
      </label>
      <input id="fullname" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttontext.tell}
      </button>
    </div>
  );
*/
  /* 8. Finding Forbidden Property Names.mp4 */
  /*
  const buttontext = { tell: " hey click me " };
  const Labletext = "Enter-name:";
  return (
    <div>
      <label className="quer" htmlFor="fullname">
        {Labletext}
      </label>
      <input id="fullname" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttontext.tell}
      </button>
    </div>
  );

/*11. JSX Exercise Solution.mp4 ---
  function localtime() {
    return new Date().toLocaleTimeString();
  }
  return (
    <div>
      <p>Current Time</p>
      <h3>{localtime()}</h3>
    </div>
  );
  */
  /* 2. Building Content with JSX end folder------------------ */
};
// Take the react component and show it on the screen
ReactDOM.render(<Run />, document.querySelector("#root"));

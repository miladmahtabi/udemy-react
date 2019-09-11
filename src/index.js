// Importthe React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
// Create a react component
const Run = () => {
return <div>
<label class="quer" for ="fullname">
Enter fullname:
</label>
<input id="fullname" type="text" />
<button style= {{backgroundColor:'blue' , color:'white'}}>
Enter
</button>
</div>
};
// Take the react component and show it on the screen  
ReactDOM.render(<Run />, document.querySelector('#root'));
  


import React ,{ useState  }  from 'react';

const MyFunctionComponent = props => {
    // declaring the state hooks
    const [name, setName] = useState("Arya Stark");
    // here we use the setter to change the content of the name state
    const handleClick = () => setName('Tyron Lanyster')
    return (
      <div>
        {/* here we use the getter to get the state value */}
        <p>hello my name is {name}</p>
        <button onClick={handleClick}>Click if you want to give the crown to Tyron Lanyster</button>
      </div>
    );
   };

   export default MyFunctionComponent;
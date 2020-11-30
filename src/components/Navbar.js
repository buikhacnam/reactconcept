import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

export default function Navbar() {
   const context = useContext(ThemeContext);
   const contextAuth = useContext(AuthContext);
   const { isLightTheme, light, dark } = context;
   const { isAuthenticated, toggleAuth } = contextAuth; 

   const theme = isLightTheme ? light : dark;

    return (
      <nav style={{background: theme.ui, color: theme.syntax }}>
          <h1>Context App</h1>
          <div onClick={ toggleAuth }>
            {isAuthenticated ? <button>Logged in</button> : <button>Logged out</button>}
          </div>
          <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
      </nav>
    );
}


// import React, { Component } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';

// class Navbar extends Component {
//   static contextType = ThemeContext;
//   render() {
//     console.log(this.context);
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return ( 
//       <nav style={{ background: theme.ui, color: theme.syntax }}>
//         <h1>Context App</h1>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     );
//   }
// }
 
// export default Navbar;

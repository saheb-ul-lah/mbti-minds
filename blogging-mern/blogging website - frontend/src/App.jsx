import UserAuthForm from "./pages/userAuthForm.page";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar />} >
                <Route path="signin" element={<UserAuthForm type="sign-in" />} />
                <Route path="signup" element={<UserAuthForm type="sign-up" />} />
            </Route>
        </Routes>
    );
}

export default App;
// This was version 3
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar.component";

// const App = () => {
//     return (
//         <Routes>
//             <Route path="/" element={<Navbar />} >
//                 <Route path="signin" element={<h1>Sign in Page</h1>} />
//                 <Route path="signup" element={<h1>Sign up Page</h1>} />
//             </Route>
//         </Routes>
//     );
// }

// export default App;

// This was version 2
// import Navbar from "./components/navbar.component";

// const App = () => {
//     return (
//         <Navbar />
//     );
// }

// export default App;


// This was version 1
// const App = () => {
//     return (
//         <h1>MERN Blogging website by modern web</h1>
//     )
// }

// export default App;
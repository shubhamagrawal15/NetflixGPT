import { createBrowserRouter,  } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import {useDispatch} from "react-redux"
import { addUser, removeUser } from "../utils/userSlice";


const Body = () => {

  const dispatch = useDispatch()

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        // update the store
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        // after he signs in navigate him to the browse page
        // using navigation
        // ...
      } else {
        dispatch(removeUser())
        // User is signed out
        // navigate him to the main page
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};
export default Body;

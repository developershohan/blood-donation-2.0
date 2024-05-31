import { useSelector } from "react-redux";
import { authSelector } from "../features/auth/authSlice";
const useAuth = () => {

   const {user} = useSelector(authSelector)
   return { auth: user };
  
}

export default useAuth
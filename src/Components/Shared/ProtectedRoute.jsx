import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/*" replace />;
  }
  return children;
};
export default Protected;

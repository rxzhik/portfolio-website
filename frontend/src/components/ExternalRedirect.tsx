import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ExternalRedirect = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    window.open("https://rashikraj-blog.sanity.studio/structure", "_blank");
    setTimeout(() => setRedirect(true), 500); // Delay navigation slightly
  }, []);

  return redirect ? <Navigate to="/blog" replace /> : null;
};

export default ExternalRedirect;
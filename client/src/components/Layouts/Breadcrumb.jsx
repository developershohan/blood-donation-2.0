import { useLocation } from "react-router-dom";
import { generatePageTitle } from "../../healpers/Healpers";

const Breadcrumb = () => {
  const { pathname } = useLocation();

  const breadCrumbList = ["/login", "/register","/donor-register"];

  if (!breadCrumbList.includes(pathname)) {
    return (
      <div>
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2
                  className="breadcrumb-title"
                  style={{ textTransform: "capitalize" }}>
                  {generatePageTitle(pathname)}
                </h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      {generatePageTitle(pathname)}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Breadcrumb;

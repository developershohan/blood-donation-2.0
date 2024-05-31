import Avatar from "../../components/Layouts/Avatar/Avatar";

import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/auth/authApiSlice";
import { Outlet, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { auth } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logoutUser());
  };

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row">
            {/* Profile Sidebar */}
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      <Avatar url={auth?.photo} />
                    </a>
                    <div className="profile-det-info">
                      <h3>{auth?.name}</h3>
                      <div className="patient-details">
                        <h5>
                          <i className="fas fa-birthday-cake" /> 24 Jul 1983, 38
                          years
                        </h5>
                        {auth?.location && (
                          <h5 className="mb-0">
                            <i className="fas fa-map-marker-alt" /> {auth?.location}
                          </h5>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li className="active">
                        <Link href="dashboard">
                          <i className="fas fa-columns" />
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      <li>
                        <a href="favourites.html">
                          <i className="fas fa-bookmark" />
                          <span>Favourites</span>
                        </a>
                      </li>
                      <li>
                        <a href="chat.html">
                          <i className="fas fa-comments" />
                          <span>Message</span>
                          <small className="unread-msg">23</small>
                        </a>
                      </li>
                      <li>
                        <Link to="profile-settings">
                          <i className="fas fa-user-cog" />
                          <span>Profile Settings</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="password-change">
                          <i className="fas fa-lock" />
                          <span>Change Password</span>
                        </Link>
                      </li>
                      <li>
                        <a onClick={handleLogout}>
                          <i className="fas fa-sign-out-alt" />
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* / Profile Sidebar */}
            <div className="col-md-7 col-lg-8 col-xl-9">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

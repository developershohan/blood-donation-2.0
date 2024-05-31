import React from "react";
import useAuth from "../../hooks/useAuth";
import Avatar from "../../components/Layouts/Avatar/Avatar";

const ProfileSetting = () => {
  const { auth } = useAuth();
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Basic Information</h4>
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <div className="change-avatar">
                  <div className="profile-img">
                    <Avatar url={auth?.photo} />
                  </div>
                  <div className="upload-img">
                    <div className="change-photo-btn">
                      <span>
                        <i className="fa fa-upload" /> Upload Photo
                      </span>
                      <input type="file" className="upload" />
                    </div>
                    <small className="form-text text-muted">
                      Allowed JPG, GIF or PNG. Max size of 2MB
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="mb-2">
                  Username <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" readOnly="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="mb-2">
                  Email <span className="text-danger">*</span>
                </label>
                <input type="email" className="form-control" readOnly="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="mb-2">
                  First Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="mb-2">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="mb-2">Phone Number</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="mb-2">Gender</label>
                <select className="form-select form-control">
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-0">
                <label className="mb-2">Date of Birth</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;

import { useEffect } from "react";
import useForm from "../../hooks/useForm";
import createToast from "../../utils/toastify";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, setMessageEmpty } from "../../features/auth/authSlice";
import { passwordChange } from "../../features/auth/authApiSlice";


const PasswordChange = () => {
  const dispatch = useDispatch();
  const { error, message } = useSelector(authSelector);

  const { input, handleInputChange, resetForm } = useForm({
    oldPass: "",
    newPass: "",
    confPass: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(passwordChange(input));
  };
  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
      resetForm();
    }
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
  }, [error, message, dispatch, resetForm]);
  return (
    <div>

      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              {/* Change Password Form */}
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label className="mb-2">Old Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="oldPass"
                    value={input.oldPass}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-2">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="newPass"
                    value={input.newPass}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-2">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confPass"
                    value={input.confPass}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="submit-section">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordChange;

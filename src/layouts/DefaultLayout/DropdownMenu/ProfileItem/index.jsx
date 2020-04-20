import React, { PureComponent } from "react";
import { connect } from "react-redux";

class ProfileItem extends PureComponent {
  render() {
    const { image, fullname, status } = this.props;
    return (
      <li className="dropdown-profile">
        <div className="dropdown-profile-image">
          <img src={image} alt="avatar" />
        </div>
        <div className="dropdown-profile-textarea">
          <h3 className="dropdown-profile-fullname">{fullname}</h3>

          {status && <span className="dropdown-profile-status">{status}</span>}
        </div>
      </li>
    );
  }
}

export default connect((state) => state.user.data, null)(ProfileItem);

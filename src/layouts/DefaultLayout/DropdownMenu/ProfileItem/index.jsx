import React, { PureComponent } from "react";
import { connect } from "react-redux";

class ProfileItem extends PureComponent {
  render() {
    const { image, fullname, status } = this.props;
    console.log(this.props);
    return (
      <li className="dropdown-profile">
        <img src={image} className="dropdown-profile-image" alt="avatar" />
        <div className="dropdown-profile-textarea">
          <h3 className="dropdown-profile-fullname">{fullname}</h3>

          {status && <span className="dropdown-profile-status">{status}</span>}
        </div>
      </li>
    );
  }
}

export default connect((state) => state.user.data, null)(ProfileItem);

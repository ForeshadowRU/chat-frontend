import React, { PureComponent } from "react";
import { connect } from "react-redux";

class ProfileItem extends PureComponent {
  render() {
    const { avatar, firstname, lastname, status } = this.props;
    return (
      <li className="dropdown-profile">
        <div className="dropdown-profile-image">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="dropdown-profile-textarea">
          <h3 className="dropdown-profile-fullname">
            {firstname} {lastname}
          </h3>

           <span className="dropdown-profile-status">Online</span>
        </div>
      </li>
    );
  }
}

export default connect((state) => state.user.data, null)(ProfileItem);

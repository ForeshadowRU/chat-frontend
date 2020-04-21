import React from "react";
import {connect} from "react-redux";
import {SvgFactory} from "../../../../../assets/SvgFactory";


function Message(props) {
    const {image, firstname} = props;
    return (
        <div className="homepage-chat-message-container">
            <div className="homepage-chat-message-profile">
                <div className="homepage-chat-message-profile-image">
                    <img src={image} alt=" avatar" width="70px" height="70px"/>
                </div>
                <div className="homepage-chat-message-profile-fullname">
                    <p>{firstname}</p>
                </div>
            </div>
            <div className="homepage-chat-message-wrapper">
                <span className="homepage-chat-message-icon">{SvgFactory.edit()}
                </span>
                <p className="homepage-chat-message-text">
                    Hello, Dora Dora! How are u? I'm fine. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed Hello, Dora Dora! How are u? I'm fine. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Hello, Dora Dora! How are u? I'm fine. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Hello, Dora Dora! How are u? I'm fine. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Hello, Dora Dora! How are u? I'm fine. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
                <span className="homepage-chat-message-date">21.04.2020</span>
            </div>
            <div className="homepage-chat-message-profile">
                <div className="homepage-chat-message-profile-image">
                    <img src={image} alt=" avatar" width="70px" height="70px"/>
                </div>
                <div className="homepage-chat-message-profile-fullname">
                    <p>{firstname}</p>
                </div>
            </div>
        </div>
    );
}

export default connect(
    (state) => ({...state.user.data}),
    {}
)(Message);


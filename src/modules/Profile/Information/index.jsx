import React, { Component } from "react";
import { Avatar, Card } from "antd";
const Meta = Card.Meta;
export default class Information extends Component {
  render() {
    return (
      <div>
        <div className="information-title">firstname lastname</div>
        <Card className="information">
          <Avatar
            size={256}
            src="https://static.zerochan.net/Lelouch.Lamperouge.full.545285.jpg"
          />
        </Card>
      </div>
    );
  }
}

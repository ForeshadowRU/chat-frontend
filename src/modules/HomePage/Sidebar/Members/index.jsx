import React from "react";
import { connect } from "react-redux";
import Member from "./Member";
import { Collapse, List } from "antd";
import { useEffect } from "react";
import { getMembers } from "redux/members/actions";
const Panel = Collapse.Panel;
function Members(props) {
  const { values, getMembers } = props;

  useEffect(() => {
    if (!values.length) getMembers();
  });

  return (
    <Collapse defaultActiveKey="1">
      <Panel header="Members" key="1">
        <List
          dataSource={values}
          renderItem={(item) => <Member {...item} key={item.id} />}
        ></List>
      </Panel>
    </Collapse>
  );
}

export default connect((state) => ({ ...state.pms }), {
  getMembers,
})(Members);

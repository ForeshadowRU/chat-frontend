import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { connect } from "react-redux";
import { sendMessage } from "redux/messages/actions";
import { ImageDrop } from "quill-image-drop-module";

ReactQuill.Quill.register("modules/imageDrop", ImageDrop);
class Quill extends React.Component {
  state = {
    value: "",
  };
  componentDidMount() {}

  modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
        [],
      ],
    },
    keyboard: {
      bindings: {
        send: {
          key: "Enter",
          shiftKey: true,
          handler: (range, context) => {
            this.props.sendMessage(this.state.value);
            this.setState({ value: "" });
          },
        },
      },
    },
  };

  render() {
    const { value } = this.state;

    const formats = [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
    ];

    return (
      <div className="homepage-chat-quill">
        <ReactQuill
          ref={(ref) => (this.editor = ref)}
          className="homepage-chat-quill-container"
          theme="snow"
          value={value}
          modules={this.modules}
          formats={formats}
          onChange={(text) => this.setState({ value: text })}
        />
      </div>
    );
  }
}

export default connect((state) => ({}), {
  sendMessage: sendMessage,
})(Quill);

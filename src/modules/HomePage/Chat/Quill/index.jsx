import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { connect } from "react-redux";
import { sendMessage } from "redux/messages/actions";

function Quill(props) {
  const { sendMessage } = props;
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            sendMessage({ message: { text: value } });
            setValue("");
          }
        }}
        className="homepage-chat-quill-container"
        theme="snow"
        value={value}
        modules={modules}
        formats={formats}
        onChange={setValue}
      />
    </div>
  );
}

export default connect((state) => ({}), {
  sendMessage: sendMessage,
})(Quill);

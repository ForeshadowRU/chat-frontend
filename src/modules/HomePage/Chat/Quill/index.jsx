import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function Quill() {
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

export default Quill;

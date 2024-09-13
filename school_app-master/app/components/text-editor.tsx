"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface textEditorProps {
  labelName?: string;
  className?: any;
}

const TextEditor = ({ labelName, className }: textEditorProps) => {
  const [value, setValue] = useState("");
  return (
    <>
      <div>
        <label htmlFor="" className="mb-2 text-[#000000]">
          {labelName}
        </label>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className={`${className} quill_text_editor`}
        />
      </div>
    </>
  );
};

export default TextEditor;

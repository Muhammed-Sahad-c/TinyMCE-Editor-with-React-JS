import { useState } from "react";
import "../../assets/css/style.css";
import { Editor as TinyMECEditor } from "@tinymce/tinymce-react";
import { plugins } from "../../constants/plugins";
import { toolbars } from "../../constants/toolbars";

const Editor = () => {
  const API_KEY = import.meta.env.VITE_TINY_MCE_API_KEY;

  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const onEditorInputChange = (newValue, editor) => {
    setValue(newValue);
    setText(editor.getContent({ format: "text" }));
  }

  return (
    <>
      <div className="editor-body">
        <h1>TINY MCE EDITOR IN REACT</h1>
        <TinyMECEditor
          onEditorChange={(newValue, editor) => onEditorInputChange(newValue, editor)}
          onInit={(evt, editor) => setText(editor.getContent({ format: "text" }))}
          value={value}
          initialValue={'Write your thoughts here...'}
          apiKey={API_KEY}
          init={{
            plugins: plugins,
            toolbar: toolbars
          }}
        />
      </div>
    </>
  )
}

export default Editor
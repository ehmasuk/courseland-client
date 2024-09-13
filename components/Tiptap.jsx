"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function Tiptap() {
    const editor = useEditor({
        extensions: [StarterKit],
        content: "",
    });

    if (!editor) {
        return null;
    }

    return (
        <div className="editor">
            <div className="editor-panel">
                <button onClick={() => editor.chain().focus().toggleBold().run()} disabled={!editor.can().chain().focus().toggleBold().run()} className={editor.isActive("bold") ? "is-active" : ""}>
                    B
                </button>
            </div>

            <div className="editor-body [&_*]:outline-none">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}

export default Tiptap;

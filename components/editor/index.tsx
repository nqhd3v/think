"use client";
import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./styles.css";

export class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange: (editorState: EditorState) => void = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="editor--wrapper"
          toolbarClassName="editor--toolbar"
          editorClassName="editor--content"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}

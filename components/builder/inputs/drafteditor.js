import Editor, {createEditorStateWithText} from '@draft-js-plugins/editor';
import {useEffect, useRef, useState} from "react";
import createToolbarPlugin, {Separator,} from '@draft-js-plugins/static-toolbar';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import {
    BlockquoteButton,
    BoldButton,
    CodeBlockButton,
    CodeButton, HeadlineOneButton,
    ItalicButton,
    OrderedListButton,
    UnderlineButton,
    UnorderedListButton,
} from '@draft-js-plugins/buttons';
import {userOutSideClick} from "../hooks/outsideClick";

const toolbarPlugin = createToolbarPlugin();
const {Toolbar} = toolbarPlugin;
const plugins = [toolbarPlugin];

const DraftEditor = ({value, onChange}) => {
    const [edit, setEdit] = useState(false)
    const ref = useRef()
    userOutSideClick(ref, () => {
        setEdit(false)
    })
    const [editorState, setEditorState] = useState(createEditorStateWithText(""))
    useEffect(() => {
        const contentBlock = htmlToDraft(value || "");
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
            setEditorState(EditorState.createWithContent(contentState))
        }
    }, [])

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
        if(onChange) {
            onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
        }
    }

    return (
        <div className="relative" ref={ref} onClick={() => setEdit(true)}>
            <Toolbar>
                {
                    (externalProps) => {
                        if(typeof externalProps.getEditorState != "function") {
                            externalProps.getEditorState = () => editorState
                        }
                        if(typeof externalProps.setEditorState != "function") {
                            externalProps.setEditorState = setEditorState
                        }
                        return (
                            (
                                <div className="draft-toolbar" style={{display: edit ? 'flex' : 'none'}}>
                                    <HeadlineOneButton {...externalProps}/>
                                    <BoldButton {...externalProps} />
                                    <ItalicButton {...externalProps} />
                                    <UnderlineButton {...externalProps} />
                                    <CodeButton {...externalProps} />
                                    <Separator {...externalProps} />
                                    <UnorderedListButton {...externalProps} />
                                    <OrderedListButton {...externalProps} />
                                    <BlockquoteButton {...externalProps} />
                                    <CodeBlockButton {...externalProps} />
                                </div>
                            )
                        )
                    }
                }
            </Toolbar>
            <Editor
                editorState={editorState}
                plugins={plugins}
                onChange={onEditorStateChange}/>
        </div>
    )
}
export default DraftEditor
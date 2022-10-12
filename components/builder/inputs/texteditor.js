import dynamic from "next/dynamic";
import {useRef, useState} from "react";
import {userOutSideClick} from "../hooks/outsideClick";

const Editor = dynamic(() => import('./drafteditor'), {
    ssr: false
})

const initialValue = "<h1>Heading</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"

const TextEditor = ({value = initialValue, onChange}) => {
    return (
        <div className="p-4">
            <Editor value={value} onChange={onChange}/>
        </div>

    )
}
export default TextEditor
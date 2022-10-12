import TextEditor from "../../inputs/texteditor";

const TextComponent = ({value, onChange}) => {
    return (
        <TextEditor value={value} onChange={onChange}/>
    )
}
export default TextComponent
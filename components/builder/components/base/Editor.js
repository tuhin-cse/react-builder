import AddSection from "./AddSection";
import {useBuilder} from "../../context/buider";
import Section from "../section";
import TextEditor from "../../inputs/texteditor";

const Editor = () => {
    const builder = useBuilder()

    return (
        <div className="w-full">
            {builder?.content.map((d, index) => (
                <>
                    <AddSection position={index}/>
                    <Section content={d} key={index}/>
                </>
            ))}
            <AddSection/>
            <TextEditor/>
        </div>
    )
}
export default Editor
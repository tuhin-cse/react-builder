import {BuilderProvider} from "./context/buider";
import Editor from "./components/base/Editor";

const Builder = () => {
    return (
        <BuilderProvider>
            <Editor/>
        </BuilderProvider>
    )
}
export default Builder
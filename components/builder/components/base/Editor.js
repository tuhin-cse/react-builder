import AddLayout from "./AddLayout";
import {useBuilder} from "../../context/buider";

const Editor = () => {
    const builder = useBuilder()

    return (
        <div className="w-full p-4">
            <AddLayout position={0}/>
            <AddLayout/>
        </div>
    )
}
export default Editor
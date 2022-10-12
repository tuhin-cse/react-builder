import AddItem from "../base/AddItem";
import TextComponent from "../items/text";
import {IoTextOutline} from "react-icons/io5";
import {useBuilder} from "../../context/buider";
import {FiArrowDown, FiArrowUp, FiTrash} from "react-icons/fi";

export const builderItems = [
    {
        label: 'Text',
        key: 'text',
        component: TextComponent,
        icon: <IoTextOutline size={40}/>
    }
]

const Section = ({content}) => {
    const builder = useBuilder()
    const handleSelect = (item, index) => {
        let items = content.items || []
        items[index] = {
            item,
        }
        content.items = items
        builder.updateView()
    }

    const items = builderItems?.reduce((acc, d) => ({...acc, [d.key]: d.component}), {})

    const ItemView = ({index}) => {
        if (content.items && content.items[index]) {
            let Component = items[content.items[index].item]
            return (
                <div className="builder-item">
                    <div className="actions">
                        <FiArrowUp size={16} className="mr-2"/>
                        <FiArrowDown size={16} className="mr-2"/>
                        <div className="w-[1px] h-4 bg-gray-300 mr-2"/>
                        <FiTrash className="text-red-500"/>
                    </div>
                    <Component onChange={value => {
                        console.log(value, content.items[index].item)
                    }}/>
                </div>
            )
        }

        return (
            <div className="p-8 bg-gray-100">
                <AddItem onSelect={data => handleSelect(data, index)}/>
            </div>
        )
    }

    if (content?.section === 'w-1/2') {
        return (
            <div className="">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-1/2 px-4">
                            <ItemView index={0}/>
                        </div>
                        <div className="w-1/2 px-4">
                            <ItemView index={1}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (content?.section === 'w-1/3') {
        return (
            <div className="">
                <div className="container ">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-1/3 px-4">
                            <ItemView index={0}/>
                        </div>
                        <div className="w-1/3 px-4">
                            <ItemView index={1}/>
                        </div>
                        <div className="w-1/3 px-4">
                            <ItemView index={2}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="container">
            <ItemView index={0}/>
        </div>

    )
}
export default Section
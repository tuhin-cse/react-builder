import {FiPlus} from "react-icons/fi";
import {Dropdown} from "antd";
import {builderItems} from "../section";


const AddItem = ({onSelect}) => {


    const menu = (
        <div className="bg-white w-96 shadow-lg border border-gray-100 h-96 p-4 rounded">
            <h4 className="text-gray-700">Add Item</h4>
            <hr/>
            <div className="flex -mx-2 w-full">
                {builderItems?.map((item, index) => (
                    <div className="w-full md:w-1/3 p-2 flex flex-col items-center" role="button" onClick={() => onSelect(item.key)} key={index}>
                        {item.icon}
                        <p className="text-gray-700">{item?.label}</p>
                    </div>
                ))}

            </div>

        </div>
    )

    return (
        <>
            <div className="text-center py-1">
                <Dropdown overlay={menu} placement="bottom" arrow>
                <span role="button" className="bg-blue-600 p-1.5 rounded-full inline-block text-white relative">

                        <FiPlus/>

                </span>
                </Dropdown>
            </div>

        </>
    )
}
export default AddItem
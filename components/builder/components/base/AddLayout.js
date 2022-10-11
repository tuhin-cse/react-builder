import {FiPlus} from "react-icons/fi";
import {useState} from "react";
import {Dropdown} from "antd";

const AddLayout = ({position = -1}) => {
    const [show, setShow] = useState(false)

    const menu = (
        <div className="bg-white w-96 shadow-lg border border-gray-100 h-96 p-4 rounded">
            <h4 className="text-gray-700">Add Section</h4>
            <hr/>
            <div className="flex -mx-2 w-full">
                <div className="w-full md:w-1/3 p-2">
                    <a>
                        <div className="w-full h-8 rounded bg-gray-400">

                        </div>
                    </a>
                </div>
                <div className="w-full md:w-1/3 p-2">
                    <a className="flex">
                        <div className="w-1/2 pr-[1px]">
                            <div className="h-8 rounded bg-gray-400"/>
                        </div>
                        <div className="w-1/2 pl-[1px]">
                            <div className="h-8 rounded bg-gray-400"/>
                        </div>
                    </a>
                </div>
                <div className="w-full md:w-1/3 p-2">
                    <a className="flex">
                        <div className="w-1/3 pr-[1px]">
                            <div className="h-8 rounded bg-gray-400"/>
                        </div>
                        <div className="w-1/3 px-[1px]">
                            <div className="h-8 rounded bg-gray-400"/>
                        </div>
                        <div className="w-1/3 pl-[1px]">
                            <div className="h-8 rounded bg-gray-400"/>
                        </div>
                    </a>
                </div>
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
export default AddLayout
import React, { useState } from 'react';

const Variants = ({ setShowModal })=>{
    const [newOptionValue, setNewOptionValue] = useState('');
    const [optionValues, setOptionValues] = useState([]);
    const [colorNames, setColorNames] = useState({});
    const [selectedOption, setSelectedOption] = useState('');

    const getColorName = async (color) => {
        try {
            const response = await fetch(`https://www.thecolorapi.com/id?hex=${color.substring(1)}`);
            const data = await response.json();
            return data?.name?.value;
        } catch (error) {
            return color; 
        }
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setOptionValues([]);
    };

    const handleColorChange = async (color) => {
        setOptionValues((prev) => {
            const updatedValues = [...prev, color];
            getColorName(color).then((name) => {
                setColorNames((prevNames) => ({
                    ...prevNames,
                    [color]: name
                }));
            });
            return updatedValues;
        });
    };

    const handleSizeChange = (e) => {
        setNewOptionValue(e.target.value);
    };

    const addSizeValue = () => {
        if (newOptionValue.trim() !== '') {
            setOptionValues((prev) => [...prev, newOptionValue.trim()]);
            setNewOptionValue(''); 
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && newOptionValue.trim() !== '') {
            addSizeValue();
        }
    };

    const removeOptionValue = (index) => {
        setOptionValues((prev) => prev.filter((_, i) => i !== index));
    };
    
 return<>
     
     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
                            <div className="bg-white rounded-lg p-8 w-1/2"> {/* Adjust width as needed */}
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-medium">Add variants</h2>
                                    <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Variant Options */}
                                <div className="flex justify-start gap-10">
                            <div className="mb-4">
                                <label
                                    htmlFor="optionName"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Option name
                                </label>
                                <select
                                    id="optionName"
                                    value={selectedOption}
                                    onChange={handleOptionChange}
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="" disabled>
                                        Select Variants
                                    </option>
                                    <option value="color">Color</option>
                                    <option value="size">Size</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="optionValues"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Option values *
                                </label>
                                {selectedOption === 'color' ? (
                                    <div className="flex flex-wrap gap-2">
                                        <input
                                            type="color"
                                            onChange={(e) =>
                                                handleColorChange(e.target.value)
                                            }
                                            className="w-10 h-10 p-0"
                                        />
                                        {optionValues.map((color, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center space-x-1 bg-gray-300 px-2 rounded-3xl"
                                            >
                                                <div
                                                    className="w-3 h-3 rounded-full"
                                                    style={{ backgroundColor: color }}
                                                ></div>
                                                <span className='!text-xs font-bold'>{colorNames[color] || color}</span>
                                                <button
                                                    onClick={() => removeOptionValue(index)}
                                                    className="text-red-500 pl-1"
                                                >
                                                    x
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                ) : selectedOption === 'size' ? (
                                    <div className="flex flex-col gap-2">
                                        <div className='flex justify-center'>
                                            <input
                                                type="text"
                                                value={newOptionValue}
                                                onChange={handleSizeChange}
                                                onKeyDown={handleKeyDown} // Add onKeyDown for 'Enter' key
                                                className="border border-gray-300 w-fit px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter size (e.g. M, L, XL)"
                                            />
                                             <button
                                                onClick={addSizeValue}
                                                className="bg-blue-400 text-white px-2 py-1"
                                            >
                                                Add
                                            </button>
                                        </div>
                                        <div className='flex gap-2'>
                                            {optionValues?.map((size, index) => (
                                                <div key={index}
                                                    className="flex w-fit items-center text-xl space-x-1 bg-gray-300 p-2 rounded-full">
                                                    <span className='text-xs font-bold'>{size}</span>
                                                    <button
                                                        onClick={() => removeOptionValue(index)}
                                                        className="text-red-500 pl-1 text-xs"
                                                    >
                                                        x
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Add variants
                                </button>

                                <p className="text-gray-500 mt-4">
                                    ◎ You can add prices, images, quantity, etc after this step.
                                </p>
                            </div>
                        </div>
     </>
}
export default Variants
import React, { useState } from 'react';

const Variants = ({ setShowModal })=>{

    
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
                             <div className='flex justify-start gap-10'>
                             <div className="mb-4">
                                    <label htmlFor="optionName" className="block text-gray-700 font-medium mb-2">
                                        Option name
                                    </label>
                                    <select
                                        type="text"
                                        id="optionName"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {/* <menuitem>Size</menuitem>
                                        <menuitem>color</menuitem> */}
                                        </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="optionValues" className="block text-gray-700 font-medium mb-2">
                                        Option values *
                                    </label>
                                    <input
                                        type="text"
                                        id="optionValues"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
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
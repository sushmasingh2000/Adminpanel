import { ExpandLess, ExpandMore, Image} from '@mui/icons-material';
import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Variants from './Variant';


const AddCategories = () => {

    const [isSeoOpen, setIsSeoOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const productInfoRef = useRef(null);
    const mediaRef = useRef(null);
    const inventoryRef = useRef(null);
    const shippingRef = useRef(null);


    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image', 'video'],
        ],
    };

    const formats = [
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet',
        'link', 'image', 'video',
    ];
    return (
        <div className="font-sans bg-gray-100  flex flex-col">
            <div className="bg-white p-4 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#" className="text-gray-600 mr-4">←</a>
                    <h2 className="text-xl font-medium mr-4">Add new Categories</h2>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Categories
                </button>
            </div>

            <div className="flex-grow flex p-6">
                <aside className="w-64 bg-white rounded-lg shadow-md mr-6">
                    <h3 className="font-medium text-lg p-4">Quick navigation</h3>
                    <ul className="list-none p-0">
                        <li className="border-b border-gray-200" onClick={() => scrollToSection(productInfoRef)}>
                            <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium">
                                Category Information
                            </a>
                        </li>
                        <li className="border-b border-gray-200" onClick={() => scrollToSection(mediaRef)}>
                            <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                                Banner
                            </a>
                        </li>
                        <li className="border-b border-gray-200" onClick={() => scrollToSection(inventoryRef)}>
                            <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                                Content
                            </a>
                        </li>
                        <li className="border-b border-gray-200" onClick={() => scrollToSection(shippingRef)}>
                            <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                               Dukaan SEO
                            </a>
                        </li>
                        
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="flex-grow bg-white rounded-lg shadow-md p-6 md:w-3/4 h-full md:max-h-[calc(100vh-100px)] overflow-y-auto">
                    <div ref={productInfoRef}
                    >
                        <p className='font-bold text-xl'>Category Information</p>
                        <div className="border-t border-gray-200 pt-6 mt-6" ref={productInfoRef}> {/* Added separator line */}
                      
                        <div className="flex items-center">
                            <div className="border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer">
                                <Image className="w-8 h-8 mb-2" /> {/* Replace with your image icon */}
                                <span>Upload images</span>
                            </div>
                            <span className="mx-4 text-gray-400"></span>
                            <div className="border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer">
                                
                            </div>
                        </div>
                    </div>
                        <div className="my-4">
                            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                                 Category Name*
                            </label>
                            <input
                                type="text"
                                id="category"
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="mb-4" ref={inventoryRef}>
                            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                                Content
                            </label>
                            <ReactQuill
                                modules={modules}
                                formats={formats}
                                theme="snow"
                                className="h-48"
                            />

                        </div>
                    {/* Dukaan SEO Section */}
                    <div className="border-t border-gray-200 pt-6 mt-6" ref={shippingRef}>
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setIsSeoOpen(!isSeoOpen)} // Toggle on click
                        >
                            <h3 className="font-medium text-lg">Dukaan SEO</h3>
                            {isSeoOpen ? (
                                <ExpandLess className="h-6 w-6 text-gray-500" />
                            ) : (
                                <ExpandMore className="h-6 w-6 text-gray-500" />
                            )}
                        </div>
                        <p className="text-gray-600 text-sm">
                            Optimize your product with meta tags to boost its visibility on
                            search engines.
                        </p>

                        {/* SEO Content (toggleable) */}
                        {isSeoOpen && (
                            <div className="mt-4">
                                <div className="mb-4">
                                    <label htmlFor="titleTag" className="block text-gray-700 font-medium mb-2">
                                        Title Tag
                                    </label>
                                    <input
                                        type="text"
                                        id="titleTag"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <a href="#" className="text-blue-500 text-sm block">
                                        Generate Title
                                    </a>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="metaDescription" className="block text-gray-700 font-medium mb-2">
                                        Meta Description Tag
                                    </label>
                                    <textarea
                                        id="metaDescription"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                                    ></textarea>
                                    <a href="#" className="text-blue-500 text-sm block">
                                        Generate Meta Description
                                    </a>
                                </div>
                                <div className="mb-4">
                                    <h4 className="font-medium text-lg mb-2">
                                        Social sharing image preview
                                    </h4>
                                </div>
                            </div>
                        )}
                    </div>
                    {showModal && <Variants setShowModal={setShowModal} />}
                  
                </main>
            </div>
        </div>
    );
};

export default AddCategories;




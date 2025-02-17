import { ExpandLess, ExpandMore, Image, ImageAspectRatio, VideoCameraFront } from '@mui/icons-material';
import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Variants from './Variant';


const Product = () => {
    const [isInventoryOpen, setIsInventoryOpen] = useState(false);
    const [isShippingOpen, setIsShippingOpen] = useState(false);
    const [isVariantsOpen, setIsVariantsOpen] = useState(false);
    const [isSeoOpen, setIsSeoOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const productInfoRef = useRef(null);
    const variantsRef = useRef(null);
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
                    <h2 className="text-xl font-medium mr-4">Add new product</h2>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add product
                </button>
            </div>

            <div className="flex-grow flex p-6">
                <aside className="w-64 bg-white rounded-lg shadow-md mr-6">
                    <h3 className="font-medium text-lg p-4">Quick navigation</h3>
                    <ul className="list-none p-0">
                        <li className="border-b border-gray-200" onClick={() => scrollToSection(productInfoRef)}>
                            <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium">
                                Product Information
                            </a>
                        </li>
                        <li className="border-b border-gray-200" onClick={() => scrollToSection(mediaRef)}>
                            <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                                Product Media
                            </a>
                        </li>
                        <li className="border-b border-gray-200" onClick={() => scrollToSection(inventoryRef)}>
                            <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                                Inventory
                            </a>
                        </li>
                        <li className="border-b border-gray-200" onClick={() => scrollToSection(shippingRef)}>
                            <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                                Shipping & Tax
                            </a>
                        </li>
                        <li onClick={() => scrollToSection(variantsRef)}>
                            <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                                Variants
                            </a>
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="flex-grow bg-white rounded-lg shadow-md p-6 md:w-3/4 h-full md:max-h-[calc(100vh-100px)] overflow-y-auto">
                    <div ref={productInfoRef}
                    >
                        <p className='font-bold text-xl'>Product Information</p>
                        <p className="text-gray-600 mb-6 !text-xs">
                            Easily input essential details like name, price, and more to showcase
                            your product.
                        </p>

                        <div className="mb-4" >
                            <label htmlFor="productName" className="block text-gray-700 font-medium mb-2">
                                Product Name*
                            </label>
                            <input
                                type="text"
                                id="productName"
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                                Product Category*
                            </label>
                            <input
                                type="text"
                                id="category"
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                                    Price*
                                </label>
                                <input
                                    type="text"
                                    id="price"
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="discountedPrice" className="block text-gray-700 font-medium mb-2">
                                    Discounted Price
                                </label>
                                <input
                                    type="text"
                                    id="discountedPrice"
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                                Product Description
                            </label>
                            <ReactQuill
                                modules={modules}
                                formats={formats}
                                theme="snow"
                                className="h-48"
                            />

                        </div>
                    </div>
                    {/* Product Media Section */}
                    <div className="border-t border-gray-200 pt-6 mt-6" ref={mediaRef}> {/* Added separator line */}
                        <h3 className="font-medium text-lg my-2">Product Media</h3>
                        <p className="text-gray-600 mb-4">
                            Upload captivating images and videos to make your product stand out.
                        </p>
                        <div className="flex items-center">
                            <div className="border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer">
                                <Image className="w-8 h-8 mb-2" /> {/* Replace with your image icon */}
                                <span>Upload images</span>
                            </div>
                            <span className="mx-4 text-gray-400">Or</span>
                            <div className="border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer">
                                <VideoCameraFront className="w-8 h-8 mb-2" />
                                <span>Add video</span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm mt-2">
                            Recommended size (1000px*1248px)
                        </p>
                    </div>
                    <div className="border-t border-gray-200 pt-6 mt-6" ref={inventoryRef}>
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setIsInventoryOpen(!isInventoryOpen)}  >
                            <h3 className="font-medium text-lg">Inventory</h3>
                            {isInventoryOpen ? (
                                <ExpandLess className="h-6 w-6 text-gray-500" />
                            ) : (
                                <ExpandMore className="h-6 w-6 text-gray-500" />
                            )}
                        </div>
                        <p className="text-gray-600 text-sm">
                            Manage your stock levels seamlessly to keep up with customer demand.
                        </p>

                        {/* Inventory Content (toggleable) */}
                        {isInventoryOpen && ( // Conditionally render content
                            <div className="mt-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
                                            Quantity
                                        </label>
                                        <input
                                            type="text"
                                            id="quantity"
                                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="skuId" className="block text-gray-700 font-medium mb-2">
                                            SKU ID
                                        </label>
                                        <input
                                            type="text"
                                            id="skuId"
                                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                                <p className="!text-sm text-gray-500">
                                    Set up your warehouse first to add product quantity.{' '}
                                    <a href="#" className="text-blue-500">
                                        Set up
                                    </a>
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Shipping & Tax Section */}
                    <div className="border-t border-gray-200 pt-6 mt-6" ref={shippingRef}>
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setIsShippingOpen(!isShippingOpen)}
                        >
                            <h3 className="font-medium text-lg">Shipping & Tax</h3>
                            {isShippingOpen ? (
                                <ExpandLess className="h-6 w-6 text-gray-500" />
                            ) : (
                                <ExpandMore className="h-6 w-6 text-gray-500" />
                            )}
                        </div>
                        <p className="text-gray-600 text-sm">
                            Configure shipping options and tax rules to streamline your sales
                            process.
                        </p>

                        {/* Shipping & Tax Content (toggleable) */}
                        {isShippingOpen && (
                            <div className="mt-4">
                                <div className="mb-4">
                                    <label htmlFor="shipmentWeight" className="block text-gray-700 font-medium mb-2">
                                        Shipment Weight
                                    </label>
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            id="shipmentWeight"
                                            className="w-24 border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <select className="ml-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option value="kg">kg</option>
                                            {/* Add more weight units if needed */}
                                        </select>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        Product weight will be used to calculate delivery charge for
                                        Dukaan Delivery.{' '}
                                        <a href="#" className="text-blue-500">
                                            Set up
                                        </a>
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="hsnCode" className="block text-gray-700 font-medium mb-2">
                                        HSN Code
                                    </label>
                                    <input
                                        type="text"
                                        id="hsnCode"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <p className="text-sm text-gray-500">
                                        Not sure about the code?{' '}
                                        <a href="#" className="text-blue-500">
                                            Search here
                                        </a>
                                    </p>
                                </div>

                                {/* GST Input */}
                                <div className="mb-4">
                                    <label htmlFor="gst" className="block text-gray-700 font-medium mb-2">
                                        GST
                                    </label>
                                    <div className="flex items-center"> {/* Added flex container */}
                                        <input
                                            type="text"
                                            id="gst"
                                            className="w-24 border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <span className="ml-2">%</span> {/* Added percentage symbol */}
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        Setup GST in store settings to enter GST percentage.{' '}
                                        <a href="#" className="text-blue-500">
                                            Set up GST
                                        </a>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="border-t border-gray-200 pt-6 mt-6" ref={variantsRef}>
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setIsVariantsOpen(!isVariantsOpen)} >
                            <h3 className="font-medium text-lg">Variants</h3>
                            {isVariantsOpen ? (
                                <ExpandLess className="h-6 w-6 text-gray-500" />
                            ) : (
                                <ExpandMore className="h-6 w-6 text-gray-500" />
                            )}
                        </div>
                        <p className="text-gray-600 text-sm">
                            Customize variants for size, color, and more to cater to all your
                            customers' preferences.
                        </p>
                        {isVariantsOpen && (
                            <>
                            <div className="mt-4 flex justify-center ">
                                <button className="bg-blue-500 my-2 hover:bg-blue-700 text-white font-bold 
                                py-2 px-4 rounded"  onClick={() => setShowModal(true)}>
                                    Add variants
                                </button>
                            </div>
                             <div className="mt-4 !text-gray-600 ">
                             <table className="w-full border-collapse">
                                 <thead>
                                     <tr>
                                         <th className=" py-2">Variant</th>
                                         <th className=" py-2">Price</th>
                                         <th className=" py-2">Discounted Price</th>
                                         <th className=" py-2">SKU ID</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                     <tr >
                                             <td className=" py-2">
                                               {/* <img src="jhfk" /> */}
                                             </td>
                                             <td className=" py-2">34</td>
                                             <td className=" py-2">23</td>
                                             <td className=" py-2">erer232</td>
                                             {/* Add other data cells */}
                                           
                                         </tr>
                                 </tbody>
                             </table>
                         </div>
                            </>
                        )}
                    </div>

                    {/* Dukaan SEO Section */}
                    <div className="border-t border-gray-200 pt-6 mt-6">
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

export default Product;




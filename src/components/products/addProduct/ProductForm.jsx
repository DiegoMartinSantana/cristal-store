import { PlusCircleIcon } from "@heroicons/react/24/outline";
export default function ProductForm({ formData, onSubmit, handlerChange, loading }) {
    return (
        <>
            <div className="gap-4 max-w-2xl mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2">
                        <div className="inputForm-Container">
                            <div>
                                <label>Title</label>
                            </div>
                            <div>
                                <input
                                    placeholder="Enter Title"
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>
                        <div className="inputForm-Container w-full">
                            <div>
                                <label>Description</label>
                            </div>
                            <div>
                                <input
                                    placeholder="Enter Description"
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>
                        <div className="inputForm-Container w-full">
                            <div>
                                <label>Image</label>
                            </div>
                            <div>
                                <input
                                    placeholder="Enter Image"
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>
                        <div className="inputForm-Container">
                            <div>
                                <label>Price</label>
                            </div>
                            <div>
                                <input
                                    placeholder="Enter price"
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>
                        <div className="inputForm-Container w-full">
                            <div>
                                <label>Category</label>
                            </div>
                            <div>
                                <input
                                    placeholder="Enter category"
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>
                        <div className="inputForm-Container">
                            <div>
                                <label>Stock</label>
                            </div>
                            <div>
                                <input
                                    placeholder="Enter stock"
                                    type="number"
                                    name="stock"
                                    value={formData.stock}
                                    min={0}
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="flex items-center gap-2" disabled={loading}>
                            {loading ? (
                                <>
                                    Saving...
                                    <div className="spinnerLoader border-white"></div>
                                </>
                            ) : (
                                <>
                                    Add Product
                                    <PlusCircleIcon className="w-6 " />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
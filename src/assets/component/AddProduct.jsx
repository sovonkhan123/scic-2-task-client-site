

const AddProduct = () => {
    return (
        <div className="bg-[#F4F3F0] container mx-auto my-10">
            <h3 className="text-center text-2xl font-bold my-7">Add Your Favorite Brand Details</h3>
            <form>
                <div className="md:flex justify-center gap-5">
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <span>URL</span>
                            <input type="text" placeholder="url" name="url" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" placeholder="name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>



                <div className="md:flex justify-center gap-5">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" placeholder="brand name" name="brand_name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Car Types</span>
                        </label>
                        <label className="input-group">
                            <span>Types</span>
                            <input type="text" placeholder=" car types" name="types" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="md:flex justify-center gap-5">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <label className="input-group">
                            <span>Price</span>
                            <input type="text" placeholder="Product Price" name="price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <span>description</span>
                            <input type="text" placeholder="Short description" name="description" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className=" w-full">

                    <div className="mb-5">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <label className="input-group">
                            <span>Ratings</span>
                            <input type="text" placeholder="ratings" name="ratings" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="">
                    <input type="submit" value='add product' className=" btn-success w-full py-2 px-3 rounded-lg" />

                </div>
            </form>

        </div >
    );
};

export default AddProduct;
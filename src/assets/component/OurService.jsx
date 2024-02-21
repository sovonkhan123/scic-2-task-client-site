

const OurService = () => {
    return (
        <div className="my-10">
            <header className="bg-gray-800 text-white text-center py-4">
                <h1 className="text-3xl">Sports Car Service Details</h1>
            </header>

            <div className="container mx-auto mt-8">
                <div className="bg-white rounded p-4 my-4">
                    <div className="text-2xl text-gray-800">Oil Change</div>
                    <p className="text-base text-gray-600">Regular oil changes are essential to keep your sports car's engine running smoothly.</p>
                    <p className="text-2xl text-red-600">$49.99</p>
                </div>

                <div className="bg-white rounded p-4 my-4">
                    <div className="text-2xl text-gray-800">Tire Rotation</div>
                    <p className="text-base text-gray-600">Tire rotations help extend the lifespan of your tires and ensure even wear.</p>
                    <p className="text-2xl text-red-600">$29.99</p>
                </div>

                <div className="bg-white rounded p-4 my-4">
                    <div className="text-2xl text-gray-800">Brake Inspection</div>
                    <p className="text-base text-gray-600">Regular brake inspections are crucial for your safety and the performance of your car.</p>
                    <p className="text-2xl text-red-600">$39.99</p>
                </div>
            </div>
        </div>
    );
};

export default OurService;
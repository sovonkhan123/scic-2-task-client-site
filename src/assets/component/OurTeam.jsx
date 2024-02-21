

const OurTeam = () => {
    return (
        <div>
            <header className="bg-gray-800 text-white text-center py-4">
                <h1 className="text-3xl">Our Team</h1>
            </header>

            <div className=" mt-8">
                <div className=" flex mb-4">
                    
                    <div className="">
                        <div className=" text-2xl text-gray-500">John Doe</div>
                        <div className=" text-lg text-gray-500">Founder & CEO</div>
                        <div className=" text-base text-gray-500">John is passionate about sports cars and has been in the industry for over 20 years.</div>
                        <div className="text-red-500 text-lg font-medium">Email Address:  johndoe77@gmail.com</div>
                    </div>
                </div>

                <div className="team-member flex items-center mb-4">
                    
                    <div className="team-member-info">
                        <div className="team-member-name text-2xl text-gray-500">Jane Smith</div>
                        <div className="team-member-role text-lg text-gray-500">Marketing Manager</div>
                        <div className="team-member-description text-base text-gray-500">Jane is responsible for promoting our brand and ensuring customer satisfaction.</div>
                        <div className="text-red-500 text-lg font-medium">Email Address:  janesmith@gmail.com</div>
                    </div>
                </div>

                <div className="team-member flex items-center">
                    
                    <div className="team-member-info">
                        <div className="team-member-name text-2xl text-gray-500">Mike Johnson</div>
                        <div className="team-member-role text-lg text-gray-500">Lead Mechanic</div>
                        <div className="team-member-description text-base text-gray-500">Mike is an expert in car maintenance and keeps our sports cars in top condition.</div>
                        <div className="text-red-500 text-lg font-medium">Email Address:  mikejohnson@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
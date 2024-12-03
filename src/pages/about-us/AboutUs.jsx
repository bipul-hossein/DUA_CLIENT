export default function AboutUs() {
    return (
        <div className="min-h-screen" style={{ backgroundImage: 'url(/path-to-your-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="max-w-7xl mx-auto py-12 md:py-20">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 ">
                    <div className="px-2 md:px-8">
                        {/* <div className="grid md:grid-cols-2 gap-8 items-center"> */}
                        {/* Logo Column */}
                        {/* <div className="flex justify-center">
                            <div className="bg-white rounded-lg p-8 w-full max-w-md">
                                <img
                                    src="/logo-full.jpg"
                                    alt="Dulles United Association Logo"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div> */}

                        {/* Content Column */}
                        <div className="text-gray-100">
                            <h1 className="text-xl md:text-3xl font-bold text-blue-100">
                                DULLES UNITED ASSOCIATION
                            </h1>

                            <h2 className="text-lg font-semibold text-blue-200">
                                Non-Profit Organization serving in Northern Virginia
                            </h2>

                            <div className="space-y-4 text-blue-50 mt-4">
                                <p>
                                    Dulles United Association is a 501(c)3 non-profit organization serving in Northern
                                    Virginia to promote and provide social & sports opportunities to individuals. Our vision is
                                    to support our community by organizing various sports and social events. We are
                                    committed to ensure that each of our member are treated with equal opportunity
                                    regardless of their ethnicity, religion and gender.
                                </p>

                                <p>
                                    As a social and sports organization it is our vision to provide the best possible
                                    environment for our members to reach their maximum sports potential through
                                    excellence in coaching and support. If you are excited to join Dulles United then please
                                    visit our Membership Registration area and complete the registration process. We
                                    welcome you to our exciting journey. Welcome to Dulles United!
                                </p>

                                <h3 className="text-2xl font-bold text-blue-200 mt-8">Dulles United Management</h3>
                                <p>The following members are primarily responsible for team management:</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Masud Ahsan - 571-484-0700</li>
                                    <li>Dilal Ahmed - 703-623-6943</li>
                                    <li>Bijon Singh - 718-704-4808</li>
                                    <li>Mohammed Basit (Mamun) - 917-770-3399</li>
                                    <li>Sayek Ahmed - 703-966-3474</li>
                                    <li>Amdadul Haque (Suhel) - 347-484-9079</li>
                                    <li>Mostak Hossain - 973-356-4823</li>
                                    <li>Sabbir Asif - 718-314-9057</li>
                                </ul>
                            </div>

                            <div className="pt-4">
                                {/* <button
                                    to=""
                                    className="mt-8 px-8 py-3 text-gray-100 rounded-md bg-[#14649b] hover:bg-[#092f48] transition-colors"
                                >
                                    Join Our Community
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default function ContactUs() {
    return (
        <div className="min-h-screen" style={{ backgroundImage: 'url(/path-to-your-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="max-w-7xl mx-auto py-12 md:py-20">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6">
                    <div className="w-[50%] mx-auto pb-20 pt-10">

                        <form className="space-y-4">
                            <div className="space-y-4">
                                <div className="flex">
                                    <input type="text" id="firstName" name="firstName" placeholder="NAME" className="flex-grow border border-black focus:ring-blue-500 focus:border-blue-500 p-2 " />
                                </div>
                                <div className="flex">
                                    <input type="email" id="email" name="email" placeholder="EMAIL" className="flex-grow border border-black focus:ring-blue-500 focus:border-blue-500 p-2" />
                                </div>
                                {/* <div className="flex">
                                    <input type="tel" id="phone" name="phone" placeholder="PHONE" className="flex-grow border border-black focus:ring-blue-500 focus:border-blue-500 p-2" />
                                </div> */}
                                {/* <div className="flex md:col-span-2">
                                    <input type="text" id="address" name="address" placeholder="ADDRESS" className="flex-grow border border-black focus:ring-blue-500 focus:border-blue-500 p-2" />
                                </div> */}
                                <div className="flex md:col-span-2">
                                    <textarea id="comments" name="comments" placeholder="MESSAGE" rows="4" className="flex-grow border border-black focus:ring-blue-500 focus:border-blue-500 p-2"></textarea>
                                </div>
                            </div>
                            {/* <!-- <div className="flex mt-4">
                                <input type="checkbox" id="certify" name="certify" className="h-4 w-4 focus:ring-blue-500 border border-black">
                                    <label for="certify" className="ml-2 block text-xs">I Certify that above information is correct.</label>
                            </div> --> */}
                            <button type="submit" className="mt-4 text-lg font-bold text-white bg-blue-500 border border-black py-1 px-3 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}


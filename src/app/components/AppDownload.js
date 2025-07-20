
import Image from 'next/image';
export default function AppDownload() {

    return (
        <section className="px-4 md:px-12 py-12 bg-pink-50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10">
                {/* LEFT SIDE */}
                <div className="w-full md:w-1/2 text-center md:text-left px-4">
                    <h2 className=" text-center text-3xl font-bold text-pink-700 mb-5">
                        Download the MatrimonyHub app
                    </h2>
                    <p className="text-center text-gray-700 mb-1">
                        Connect with your matches anytime, anywhere
                    </p>
                    <div className="bg-white p-5 rounded-xl shadow-md mt-6">
                        <p className=" text-center text-sm text-gray-800 mb-4">
                            Point your phone camera at the QR code or use one of the download links below
                        </p>
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <Image
                                src="/Scanner.jpg"
                                alt="QR Code"
                                width={80}
                                height={80}
                                className="rounded-md"
                            />
                            <div className="flex flex-col gap-2">
                                <Image
                                    src="/PlayStore.jpg"
                                    alt="Google Play"
                                    width={140}
                                    height={40}
                                />
                                <Image
                                    src="/AppStore.jpg"
                                    alt="App Store"
                                    width={140}
                                    height={40}
                                />
                            </div>
                        </div>
                        <p className="text-center text-sm text-gray-700">
                            Or <a href="#" className="text-red-500 font-medium">get a download link</a> on your SMS/Email
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
                    <Image
                        src="/Appimage.jpg"
                        alt="App Preview Back"
                        width={500}
                        height={900}
                        className=" border-4 border-pink-200 mb-4 rounded-xl shadow-lg"
                    />

                </div>
            </div>
        </section>
    );
}
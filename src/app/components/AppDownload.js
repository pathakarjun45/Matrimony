export default function AppDownload() {

  return (
    <section className="py-12 bg-pink-50 text-center">
      <h2 className="text-3xl font-bold text-pink-700 mb-8">Download the MatrimonyHub App</h2>
      <p className="text-black">Connect with your matches anytime, anywhere</p>
      <p className="text-black">Point your phone camera at the QR code or use one of the download links below</p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
       <img
                src='./AppStore.jpg'
                alt='appstore'
                className="w-50 h-auto border-4 border-pink-200 mb-4"
              />
               <img
                src="./PlayStore.jpg"
                alt="PlayStore"
                className="w-50 h-auto  border-4 border-pink-200 mb-4"
              />
              <img src="/Scanner.jpg" alt="Scanner"className="w-50 h-auto flex-col-right border-4 border-pink-200 mb-4"/>

              <img src="/Appimage.jpg" alt="downloadapp"className="w-100 h-auto flex-col-right border-4 border-pink-200 mb-4"/>
              <span className="text-black">Or <a className="text-orange-500">get a download link</a> on your SMS/Email</span>
      </div>
    </section>
  );
}

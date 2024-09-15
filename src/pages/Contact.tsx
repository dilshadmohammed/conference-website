function Map() {
  return (
    <div className="w-full h-64 md:h-80">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8335544832917!2d76.64005197504258!3d10.824046589327637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86fd51d8e1faf%3A0x4e3d7915b3621961!2sNSS%20College%20of%20Engineering%2C%20Palakkad!5e0!3m2!1sen!2sin!4v1726167654446!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      ></iframe>
    </div>
  );
}

function Contact() {
  return (
    <>
      <h1 className="py-8 text-3xl font-bold mb-4 text-center">
        Address for Correspondence
      </h1>
      <div className="flex flex-col md:flex-row md:gap-8 px-4 md:px-0">
        {/* Contact Information */}
        <div className="flex flex-col items-center gap-y-6 md:w-1/2">
          <div className="py-8 px-6 bg-zinc-200 w-full max-w-md rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center">Dr. Viji Rajendran V</h2>
            <p className="font-semibold text-center mb-2">Professor</p>
            <p className="text-center">Dept. of Computer Science and Engineering</p>
            <p className="text-center">NSSCE, Palakkad</p>
            <p className="text-center">Mob No: +91 9447101674</p>
          </div>

          <div className="py-8 px-6 bg-zinc-200 w-full max-w-md rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center">Dr. Maya Mohan</h2>
            <p className="font-semibold text-center mb-2">Associate Professor</p>
            <p className="text-center">Dept. of Computer Science and Engineering</p>
            <p className="text-center">NSSCE, Palakkad</p>
            <p className="text-center">Mob No: +91 9447420029</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex flex-col items-center md:w-1/2 mt-4 md:mx-8">
          <h2 className="text-2xl font-semibold mb-4">How to Reach</h2>
          <Map />
        </div>
      </div>

      <div className="mt-8 mb-4 text-center">
        <p className="font-semibold">Contact Email: ngistnss@gmail.com</p>
      </div>
    </>
  );
}

export default Contact;

import Navbar from "../components/Navbar";

function Map() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8335544832917!2d76.64005197504258!3d10.824046589327637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86fd51d8e1faf%3A0x4e3d7915b3621961!2sNSS%20College%20of%20Engineering%2C%20Palakkad!5e0!3m2!1sen!2sin!4v1726167654446!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "none" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  );
}

function Contact() {
  return (
    <>
      <h1 className="py-8 text-3xl font-bold mb-4 text-center">
        Address for correspondence
      </h1>
      <div className="flex">
        <div className="flex flex-col items-center gap-y-4 w-1/2">
          <div className="py-10 px-10 bg-zinc-200 w-1/2">
            <h2 className="text-2xl font-semibold">Dr. Viji Rajendran V</h2>
            <p className="font-semibold mb-4">Professor</p>
            <p>Dept. of Computer Science and Engineering</p>
            <p>NSSCE, Palakkad</p>
            <p>Mob. No. : +91 9447101674</p>
          </div>

          <div className="py-10 px-10 bg-zinc-200 w-1/2 min-w-20">
            <h2 className="text-2xl font-semibold">Dr. Maya Mohan</h2>
            <p className="font-semibold mb-4">Associate Professor</p>
            <p>Dept. of Computer Science and Engineering</p>
            <p>NSSCE, Palakkad</p>
            <p>Mob. No. : +91 9447420029</p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">How to Reach</h1>
          <Map />
        </div>
      </div>

      <p>Contact Email: ngistnss@gmail.com</p>
    </>
  );
}

export default Contact;

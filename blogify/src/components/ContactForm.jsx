import { useState } from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";


function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log({ firstName, lastName, email, message });
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Get in touch with us
      </h2>
      <div className="flex flex-2 mt-10 py-2">
        <div className="flex-1 justify-start py-10 mt-10">
          <div className="flex flex-col items-start lg:px-16 px-8">
            <a
              href="mailto:connect@peoplemetrics.com"
              className="flex font-semibold text-2xl text-orange-500 hover:underline my-4 "
            >
              <CiMail className="mr-3 my-2"/>connect@peoplemetrics.com
            </a>
            <a
              href="tel:(215) 979-8030"
              className="text-xl flex font-semibold text-orange-500 hover:underline"
            >
              <CiPhone className="mr-3 my-2"/>(215) 979-8030
            </a>
            
            <p className="flex text-gray-700 text-xl mt-4">
              <CiLocationOn className="mr-3 my-2 sm:text-3xl lg:text-xl"/>500 Office Center Drive, Suite 400, Fort Washington, PA 19034
            </p>
          </div>
        </div>
        <form
          className="w-full max-w-md px-6 py-8 mx-2 bg-white rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email (privacy policy)*
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

import React, { useRef } from "react";
import FadeIn from "../components/FadeIn";
import contactImg from "../assets/images/contactImg.png";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaFax,
  FaWhatsapp,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w0xj5m5", "template_z837jky", form.current, {
        publicKey: "pAnIdlaUwsHgB7GKg",
      })
      .then(
        () => {
          // console.log("SUCCESS!");
          Swal.fire({
            title: "Thank You!",
            text: "Thanks for contacting us. We will get back to you soon.",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="bg-rose-50 pt-20">
      <div className="max-w-6xl mx-auto w-full  poppins py-5 md:py-10 ">
        <FadeIn delay={0.2} direction="middle" padding fullWidth>
          <h1 className="text-center font-bold text-xl md:text-4xl my-5  text-red-600">
            Contact <span className="text-black">Information</span>
          </h1>
        </FadeIn>

        {/* contact info */}
        <div className="flex flex-row m-5 items-center ">
          <div className="hidden md:flex">
            <FadeIn delay={0.2} direction="right" padding fullWidth>
              <img src={contactImg} alt="" className=" rounded-xl" />
            </FadeIn>
          </div>

          <div>
            <hr className="bg-slate-300 border-0 rounded h-1 my-2" />
            <div className="flex flex-row gap-4 items-center">
              <div>
                <FaHome className="text-xl md:text-4xl text-green-700" />
              </div>

              <div>
                <p>
                  <span className="text-xl md:text-2xl font-semibold text-slate-800 ">
                    LBN KEY RESOURCE (PVT) LTD,
                    <br />
                  </span>
                  NO: 250 D/2, PANNIPITIYA ROAD, THALAWATHUGODA, <br />
                  SRI LANKA.
                </p>
              </div>
            </div>
            <hr className="bg-slate-300 border-0 rounded h-1 my-2" />
            <div className="flex flex-row gap-4 items-center">
              <div>
                <IoIosCall className="text-xl md:text-4xl text-green-700" />
              </div>

              <div>
                <p>Call us for any Queries</p>
                <ul className="ml-5">
                  <li>+94 11 279 6116</li>
                  <li>+94 77 350 1689</li>
                </ul>
              </div>
            </div>
            <hr className="bg-slate-300 border-0 rounded h-1 my-2" />
            <div className="flex flex-row gap-4 items-center">
              <div>
                <FaWhatsapp className="text-xl md:text-4xl text-green-700" />
              </div>

              <div>
                <p>
                  Send a text message on whatsapp
                  <br />
                  <span className="ml-5">+94 77 350 1689</span>
                </p>
              </div>
            </div>
            <hr className="bg-slate-300 border-0 rounded h-1 my-2" />
            <div className="flex flex-row gap-4 items-center">
              <div>
                <FaFax className="text-xl md:text-4xl text-green-700" />
              </div>

              <div>
                <p>
                  Fax <br />
                  <span className="ml-5">+94 11 279 6116</span>
                </p>
              </div>
            </div>
            <hr className="bg-slate-300 border-0 rounded h-1 my-2" />
            <div className="flex flex-row gap-4 items-center">
              <div>
                <IoIosMail className="text-xl md:text-4xl text-green-700" />
              </div>

              <div>
                <p>
                  Send us email for any Information <br />
                  <span className="ml-5">info@lbnkeyresource.com</span>
                  <br />
                  <span className="ml-5">lbnkeyresource99@gmail.com</span>
                </p>
              </div>
            </div>
            <hr className="bg-slate-300 border-0 rounded h-1 my-2" />
            <div className="flex flex-row gap-4 items-center">
              <div>
                <CiClock2 className="text-xl md:text-4xl text-green-700" />
              </div>

              <div>
                <p>
                  Office Hours
                  <br />
                  <span className="ml-5">9.00 am - 4.00 pm</span>
                </p>
              </div>
            </div>
            <hr className="bg-slate-300 border-0 rounded h-1 my-2" />
          </div>
        </div>

        {/* social media links */}
        <div className=" p-5 mt-10">
          <FadeIn delay={0.4} direction="middle" padding fullWidth>
            <h3 className="text-center text-xl md:text-2xl font-semibold">
              Our Social Media Platforms
            </h3>
            <hr className="w-48 h-1 mx-auto my-2 bg-slate-300 border-0 rounded  dark:bg-gray-700" />

            <div className="flex flex-row justify-center gap-5 mt-5">
              <div>
                <Link
                  to="https://www.facebook.com/LBNKEYRESOURCEPVTLTD?mibextid=ZbWKwL "
                  target="_blank"
                >
                  <FaFacebookSquare className="text-xl md:text-4xl text-blue-600 mr-2 bg-white hover:scale-110" />
                </Link>
              </div>
              <div>
                <Link to="" target="_blank">
                  <FaLinkedin className="text-xl md:text-4xl text-blue-800 mr-2 bg-white hover:scale-110" />
                </Link>
              </div>
              <div>
                <Link to="" target="_blank">
                  <FaSquareXTwitter className="text-xl md:text-4xl text-black mr-2 bg-white hover:scale-110" />
                </Link>
              </div>
              <div>
                <Link to="" target="_blank">
                  <FaInstagram className="text-xl md:text-4xl text-rose-600 mr-2 bg-white hover:scale-110" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* location */}
        <FadeIn delay={0.2} direction="middle" padding fullWidth>
  <div className="flex flex-col md:flex-row gap-10 justify-center md:my-32 items-center px-10 pb-10 pt-10 md:pt-0">
    <div className="text-xl md:text-4xl">
      <h2 className="font-bold text-rose-500">Our Location</h2>
    </div>
    <div className="">
      <iframe
        width="800"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4940.453489372509!2d79.93039022219808!3d6.881049239053969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2510009586337%3A0xacd44bf3699f83f9!2sLBN%20Key%20Resource!5e0!3m2!1sen!2slk!4v1741270333000!5m2!1sen!2slk"
      ></iframe>
    </div>
  </div>
</FadeIn>


        {/* contact form */}
        <div className="flex flex-col max-w-3xl mx-5 md:mx-auto ">
          <div>
            <h2 className="text-xl md:text-4xl">Contact us</h2>
          </div>
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                className="w-full p-2 my-2 rounded-md bg-slate-200"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full p-2 my-2 rounded-md bg-slate-200"
                required
              />
              <textarea
                cols="30"
                rows="10"
                name="message"
                placeholder="Your Message"
                className="w-full p-2 my-2 rounded-md bg-slate-200"
                required
              ></textarea>
              <input
                type="submit"
                value="Send Message"
                className="w-full p-2 my-2 rounded-md bg-green-500 text-white"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

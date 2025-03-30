"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icons: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 704-787-2574",
  },
  {
    icons: <FaEnvelope />,
    title: "Email",
    description: "favournzeh02@gmail.com",
  },
  {
    icons: <FaMapMarkerAlt />,
    title: "Location",
    description: "Anambra, Enugu & Lagos, Nigeria",
  },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  // Form submission handler using EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      // Use emailjs.sendForm to send email with your EmailJS details.
      await emailjs.sendForm(
        "service_3rcpx9v",   // Your EmailJS Service ID
        "template_5pyu0tm",  // Your EmailJS Template ID
        e.target,
        "Asix-4MUDpxMZhDvz"   // Your EmailJS Public Key
      );
      setFeedback("Your message has been sent successfully!");
      e.target.reset(); // Reset the form after submission
    } catch (error) {
      console.error("Email sending error:", error);
      setFeedback("An error occurred while sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Excited to collaborate and create impactful digital experiences—
                let’s build an amazing application together! 🌟
              </p>
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Enter Firstname"
                  className="capitalize"
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Enter Lastname"
                  className="capitalize"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  required
                />
              </div>
              {/* Select Service */}
              <Select
                name="service"
                onValueChange={(value) => {
                  const serviceInput = document.getElementById("service-input");
                  if (serviceInput) serviceInput.value = value;
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Mobile Development">
                      Mobile Development
                    </SelectItem>
                    <SelectItem value="Python Development">
                      Python Development
                    </SelectItem>
                    <SelectItem value="C Development">C Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Hidden input to capture the selected service */}
              <input type="hidden" name="service" id="service-input" />
              {/* Textarea for Message */}
              <Textarea
                name="message"
                placeholder="Type your message here..."
                className="h-[200px]"
                rows={4}
                required
              />
              {/* Feedback Message */}
              {feedback && <p className="text-green-500 text-sm">{feedback}</p>}
              {/* Submit Button */}
              <Button
                type="submit"
                size="md"
                className="max-w-40 capitalize"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                    <div className="text-[28px]">{item.icons}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

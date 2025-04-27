// app/contact/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      return;
    }

    try {
      // simulate form submission
    } catch {}
  };

  return (
    <div className="container mx-auto px-3 py-5 text-black grid grid-cols-1 md:grid-cols-2">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mx-auto space-y-4"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="grid grid-cols-2 gap-3">
          <label className="block mb-1 font-medium col-span-2">Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="John"
            value={form.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Doe"
            value={form.lastName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@mail.com"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            rows={5}
            placeholder="Place your message..."
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
      <div className="flex flex-col gap-3 justify-center items-center">
        <Link href="/">
          <FaInstagram className="w-10 h-auto hover:scale-110 transition-all" />
        </Link>
        <Link href="/">
          <FaWhatsapp className="w-10 h-auto hover:scale-110 transition-all" />
        </Link>
        <Link href="/">
          <TfiEmail className="w-9 h-auto hover:scale-110 transition-all" />
        </Link>
      </div>
    </div>
  );
}

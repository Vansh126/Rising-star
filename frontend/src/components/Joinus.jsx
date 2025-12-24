import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CdJoinus = () => {
    const form = useRef();
    const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";

    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        contact: "",
        level: "",
        email: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${API_BASE}/api/users/join`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Failed to save data");
            }

            toast.success("✅ Joined successfully!", {
                position: "top-center",
                autoClose: 3000,
            });

            setFormData({
                name: "",
                gender: "",
                contact: "",
                level: "",
                email: "",
                address: "",
            });

            try {
                await emailjs.sendForm(
                    "service_mieivpm",
                    "template_qlrnmkm",
                    form.current,
                    { publicKey: "lC8eso79iVqLAwBIM" }
                );
            } catch (err) {
                toast.warn(`Email failed: ${err.message}`, {
                    position: "top-center",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error(`❌ ${error.message}`, {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#1b1b1b]">
            <form
                ref={form}
                onSubmit={handleSubmit}
                className="bg-[#111111] p-8 rounded-2xl shadow-2xl w-full max-w-md border-2 border-cyan-400/80 text-white"
            >
                <h2 className="text-3xl font-semibold text-center text-cyan-400 mb-6">
                    Join Us
                </h2>

                {/* Name */}
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full mb-4 p-2 rounded bg-[#1f1f1f]"
                />

                {/* Gender */}
                <div className="mb-4 flex gap-4">
                    {["male", "female", "other"].map((g) => (
                        <label key={g}>
                            <input
                                type="radio"
                                name="gender"
                                value={g}
                                checked={formData.gender === g}
                                onChange={handleChange}
                                required
                            />{" "}
                            {g}
                        </label>
                    ))}
                </div>

                {/* Contact */}
                <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    required
                    className="w-full mb-4 p-2 rounded bg-[#1f1f1f]"
                />

                {/* Level */}
                <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    required
                    className="w-full mb-4 p-2 rounded bg-[#1f1f1f]"
                >
                    <option value="">Select level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full mb-4 p-2 rounded bg-[#1f1f1f]"
                />

                {/* Address */}
                <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                    className="w-full mb-4 p-2 rounded bg-[#1f1f1f]"
                />

                <button
                    type="submit"
                    className="w-full bg-cyan-500 text-black font-semibold py-2 rounded"
                >
                    Submit
                </button>
            </form>

            <ToastContainer />
        </div>
    );
};

export default CdJoinus;

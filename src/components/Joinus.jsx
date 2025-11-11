import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Joinus = () => {
    const form = useRef()

    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        contact: '',
        level: '',
        email: '',
        address: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_mieivpm', 'template_qlrnmkm', form.current, {
                publicKey: 'lC8eso79iVqLAwBIM',
            })
            .then(
                () => {
                    toast.success('✅ Message sent successfully!', {
                        position: 'top-center',
                        autoClose: 3000,
                    })
                    setFormData({
                        name: '',
                        gender: '',
                        contact: '',
                        level: '',
                        email: '',
                        address: '',
                    })
                },
                () => {
                    toast.error('❌ Failed to send message. Please try again.', {
                        position: 'top-center',
                        autoClose: 3000,
                    })
                }
            )
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#1b1b1b]">
            <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-[#111111] p-8 rounded-2xl shadow-2xl w-full max-w-md border-2 border-cyan-400/80 text-white hover:shadow-cyan-400/50 transition-all duration-500"
            >
                <h2 className="text-3xl font-semibold text-center text-cyan-400 mb-6 drop-shadow-lg">
                    Join Us
                </h2>

                {/* Full Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full bg-[#1f1f1f] border border-cyan-400/50 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                </div>

                {/* Gender */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Gender</label>
                    <div className="flex gap-4">
                        {['Male', 'Female', 'Other'].map((g) => (
                            <label key={g} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    value={g}
                                    checked={formData.gender === g}
                                    onChange={handleChange}
                                    required
                                    className="accent-cyan-400"
                                />
                                {g}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Contact Number */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Contact Number
                    </label>
                    <input
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="Enter your number"
                        required
                        pattern="[0-9]{10}"
                        className="w-full bg-[#1f1f1f] border border-cyan-400/50 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                </div>

                {/* Level */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Level</label>
                    <select
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#1f1f1f] border border-cyan-400/50 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    >
                        <option value="">Select level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Email (Optional)
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full bg-[#1f1f1f] border border-cyan-400/50 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                </div>

                {/* Address */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">Address</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                        required
                        rows="3"
                        className="w-full bg-[#1f1f1f] border border-cyan-400/50 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none transition-all"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-cyan-500 text-black font-semibold py-2 rounded-lg hover:bg-cyan-400 hover:scale-105 hover:shadow-cyan-400/50 transition-all duration-300"
                >
                    Submit
                </button>
            </form>

            <ToastContainer />
        </div>
    )
}

export default Joinus

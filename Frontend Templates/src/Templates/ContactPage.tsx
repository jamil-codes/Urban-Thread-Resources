import Link from "next/link"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa"

export default function ContactPage() {
	return (
		<div className="w-full min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-white py-16">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]" />
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Get in Touch</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
				</div>
			</section>

			{/* Contact Content */}
			<section className="py-12 md:py-20">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
							<form action="#" method="POST">
								<div className="space-y-5">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
											Full Name *
										</label>
										<input type="text" id="name" name="name" required className="custom-input" />
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
											Email Address *
										</label>
										<input type="email" id="email" name="email" required className="custom-input" />
									</div>
									<div>
										<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
											Subject
										</label>
										<input type="text" id="subject" name="subject" className="custom-input" />
									</div>
									<div>
										<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
											Message *
										</label>
										<textarea id="message" name="message" rows={5} required className="custom-input resize-y"></textarea>
									</div>
									<button type="submit" className="w-full bg-sky-600 text-white py-3 rounded-lg font-medium hover:bg-sky-700 transition-colors">
										Send Message
									</button>
								</div>
							</form>
						</div>

						{/* Contact Information */}
						<div className="space-y-8">
							<div>
								<h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
								<div className="space-y-5">
									<div className="flex items-start gap-4">
										<div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
											<FaMapMarkerAlt className="text-sky-600" size={18} />
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">Headquarters</h3>
											<p className="text-gray-600">
												Plot 45, Block 6, PECHS,
												<br />
												Karachi, 75400, Pakistan
											</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
											<FaPhone className="text-sky-600" size={18} />
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">Phone</h3>
											<p className="text-gray-600">+92 21 1234 5678</p>
											<p className="text-gray-600">+92 300 123 4567</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
											<FaEnvelope className="text-sky-600" size={18} />
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">Email</h3>
											<p className="text-gray-600">hello@urbanthreadco.com</p>
											<p className="text-gray-600">support@urbanthreadco.com</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
											<FaClock className="text-sky-600" size={18} />
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">Business Hours</h3>
											<p className="text-gray-600">Monday – Friday: 9:00 AM – 6:00 PM</p>
											<p className="text-gray-600">Saturday: 10:00 AM – 4:00 PM</p>
											<p className="text-gray-600">Sunday: Closed</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

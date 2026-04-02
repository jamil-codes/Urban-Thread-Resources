import Link from "next/link"
import { BsCartPlus, BsStar, BsStarFill } from "react-icons/bs"
import { CgArrowRight } from "react-icons/cg"
import { TbHeartMinus } from "react-icons/tb"
import { FaTruck, FaHeadset, FaUndo, FaShieldAlt } from "react-icons/fa"

export default function HomePage() {
	return (
		<div className="w-full min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-white">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]" />
				<div className="container mx-auto px-4 py-20 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-12">
					<div className="flex-1 text-center md:text-left">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">Wear Your Everyday Edge.</h1>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed">Urban Thread Co. is a modern streetwear brand focused on clean design, comfort, and everyday style. We create versatile pieces that fit seamlessly into your daily life — whether you're out with friends or building your future.</p>
						<div className="flex justify-center md:justify-start">
							<button className="group inline-flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-sky-700 hover:shadow-lg transition-all duration-200">
								Shop Now
								<CgArrowRight className="group-hover:translate-x-1 transition-transform" />
							</button>
						</div>
					</div>
					<div className="flex-1 flex justify-center">
						<div className="relative w-full max-w-md lg:max-w-lg">
							<div className="absolute inset-0 bg-linear-to-tr from-sky-100 to-purple-100 rounded-2xl blur-3xl opacity-30 -z-10" />
							<img src="/placeholder.jpg" alt="Hero model" className="rounded-2xl shadow-2xl object-cover w-full h-auto" />
						</div>
					</div>
				</div>
			</section>

			<hr className="border-gray-200" />

			{/* Categories Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
					<div className="flex flex-wrap justify-center gap-8">
						{[1, 2, 3].map((i) => (
							<Link key={i} href="#" className="group">
								<div className="flex flex-col items-center gap-3">
									<div className="w-24 h-24 rounded-full border-2 border-gray-200 shadow-md overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
										<img src="/placeholder.jpg" alt="Category" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
									</div>
									<p className="text-sm font-medium uppercase tracking-wider text-gray-700 group-hover:text-sky-600">Category</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Products Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 id="products" className="text-3xl font-bold text-center mb-12">
						Featured Products
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{[1, 2, 3].map((i) => (
							<div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
								<Link href="/product/slug" className="block relative aspect-square overflow-hidden">
									<img src="/placeholder.jpg" alt="Product" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
								</Link>
								<div className="p-4">
									<span className="text-xs text-gray-500 uppercase tracking-wider">Category</span>
									<h3 className="text-lg font-semibold text-gray-900 mt-1">Product Title</h3>

									{/* Rating */}
									<div className="flex items-center mt-2">
										<div className="flex text-sky-500">{[...Array(5)].map((_, idx) => (idx < 3 ? <BsStarFill key={idx} size={14} /> : <BsStar key={idx} size={14} />))}</div>
										<span className="text-xs text-gray-500 ml-2">(3/5, 4 ratings)</span>
									</div>

									<div className="mt-3 flex items-center justify-between">
										<span className="text-xl font-bold text-gray-900">$38</span>

										<div className="flex items-center gap-2">
											<div className="relative group">
												<button className="bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-full transition-colors">
													<BsCartPlus size={20} />
												</button>
												<div className="absolute right-0 bottom-full mb-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 p-3 hidden group-hover:block z-10">
													<div className="space-y-3">
														<p className="text-sm font-medium">Select variant:</p>
														<div className="flex gap-2">
															<button className="px-3 py-1 text-xs bg-gray-100 rounded-full hover:bg-sky-100">S</button>
															<button className="px-3 py-1 text-xs bg-gray-100 rounded-full hover:bg-sky-100">M</button>
															<button className="px-3 py-1 text-xs bg-gray-100 rounded-full hover:bg-sky-100">L</button>
															<button className="px-3 py-1 text-xs bg-gray-100 rounded-full hover:bg-sky-100">XL</button>
														</div>
														<div className="flex gap-2">
															<div className="w-6 h-6 rounded-full bg-orange-500 border border-gray-300 cursor-pointer hover:ring-2 hover:ring-sky-500" />
															<div className="w-6 h-6 rounded-full bg-yellow-500 border border-gray-300 cursor-pointer hover:ring-2 hover:ring-sky-500" />
														</div>
														<button className="w-full bg-sky-600 text-white py-1 rounded-md text-sm hover:bg-sky-700">Add to Cart</button>
													</div>
												</div>
											</div>
											<button className="bg-gray-100 hover:bg-rose-100 text-gray-700 hover:text-rose-600 p-2 rounded-full transition-colors">
												<TbHeartMinus size={20} />
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="flex justify-center mt-12">
						<Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-50 hover:shadow-md transition-all">
							Show All Products
						</Link>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 text-sky-600 mb-4">
								<FaTruck size={28} />
							</div>
							<h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
							<p className="text-gray-600">On orders over $50. Fast delivery to your doorstep.</p>
						</div>
						<div className="text-center">
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 text-sky-600 mb-4">
								<FaHeadset size={28} />
							</div>
							<h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
							<p className="text-gray-600">Our team is always ready to assist you.</p>
						</div>
						<div className="text-center">
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 text-sky-600 mb-4">
								<FaUndo size={28} />
							</div>
							<h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
							<p className="text-gray-600">30-day return policy. No questions asked.</p>
						</div>
						<div className="text-center">
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 text-sky-600 mb-4">
								<FaShieldAlt size={28} />
							</div>
							<h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
							<p className="text-gray-600">Your transactions are safe and encrypted.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Our Story Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="flex-1">
							<h2 className="text-3xl font-bold mb-4">Our Story</h2>
							<p className="text-gray-600 leading-relaxed mb-6">Founded in 2020, Urban Thread Co. was born out of a passion for streetwear that combines comfort, quality, and individuality. We believe that what you wear is an expression of who you are. Our mission is to create timeless pieces that empower you to be your authentic self, every day.</p>
							<button className="group inline-flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-sky-700 transition-all">
								Learn More
								<CgArrowRight className="group-hover:translate-x-1 transition-transform" />
							</button>
						</div>
						<div className="flex-1">
							<img src="/placeholder.jpg" alt="Our story" className="rounded-2xl shadow-xl object-cover w-full h-auto" />
						</div>
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="bg-linear-to-r from-sky-600 to-sky-800 rounded-2xl p-8 md:p-12 text-center text-white">
						<h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
						<p className="text-sky-100 mb-6 max-w-2xl mx-auto">Subscribe to get special offers, new product launches, and exclusive discounts.</p>
						<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
							<input type="email" placeholder="Enter your email" className="custom-input bg-transparent!" />
							<button type="button" className="bg-white text-sky-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	)
}

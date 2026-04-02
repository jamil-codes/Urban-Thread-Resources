import Link from "next/link"
import { BsCartPlus, BsStar, BsStarFill } from "react-icons/bs"
import { TbHeartMinus } from "react-icons/tb"

export default function ProductsPage() {
	// Helper to render fixed 4-star rating (no half stars)
	const renderStars = () => {
		const fullStars = 4
		const emptyStars = 5 - fullStars
		return (
			<div className="flex text-sky-500">
				{[...Array(fullStars)].map((_, i) => (
					<BsStarFill key={i} size={14} />
				))}
				{[...Array(emptyStars)].map((_, i) => (
					<BsStar key={i} size={14} />
				))}
			</div>
		)
	}

	return (
		<div className="w-full min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-white py-16">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]" />
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">All Products</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our complete collection of streetwear essentials.</p>
				</div>
			</section>

			{/* Category Filter */}
			<div className="border-b border-gray-200">
				<div className="container mx-auto px-4 py-4">
					<div className="flex flex-wrap justify-center gap-3">
						<Link href="#" className="px-4 py-2 rounded-full text-sm font-medium bg-sky-600 text-white">
							All
						</Link>
						<Link href="#" className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
							T-Shirts
						</Link>
						<Link href="#" className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
							Hoodies
						</Link>
						<Link href="#" className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
							Accessories
						</Link>
					</div>
				</div>
			</div>

			{/* Products Grid */}
			<section className="py-12 md:py-16">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* Placeholder Product Cards */}
						{[...Array(3)].map((_, i) => (
							<div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
								<Link href="/product/Slug" className="block relative aspect-square overflow-hidden">
									<img src="/placeholder.jpg" alt="Product placeholder" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
								</Link>
								<div className="p-4">
									<span className="text-xs text-gray-500 uppercase tracking-wider">Category</span>
									<h3 className="text-lg font-semibold text-gray-900 mt-1">Product Title</h3>

									{/* Rating - fixed 4 stars */}
									<div className="flex items-center mt-2">
										{renderStars()}
										<span className="text-xs text-gray-500 ml-2">(12 reviews)</span>
									</div>

									<div className="mt-3 flex items-center justify-between">
										<span className="text-xl font-bold text-gray-900">$38</span>

										{/* Action Buttons */}
										<div className="flex items-center gap-2">
											{/* Add to Cart button */}
											<div className="relative group">
												<button className="bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-full transition-colors">
													<BsCartPlus size={20} />
												</button>
												{/* Simple tooltip-style dropdown on hover */}
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
				</div>
			</section>
		</div>
	)
}

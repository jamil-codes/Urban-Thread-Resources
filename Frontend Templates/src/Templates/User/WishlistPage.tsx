import Link from "next/link"
import { TbHeartMinus } from "react-icons/tb"
import Sidebar from "./Sidebar"

export default function WishlistPage() {
	// Static wishlist items
	const wishlistItems = [
		{
			id: 1,
			title: "Classic Tee",
			price: 29.99,
			image: "/placeholder.jpg",
			slug: "classic-tee",
		},
		{
			id: 2,
			title: "Hoodie",
			price: 59.99,
			image: "/placeholder.jpg",
			slug: "hoodie",
		},
	]

	return (
		<div className="w-full min-h-screen bg-white">
			<div className="max-w-7xl gap-2 sm:grid sm:grid-cols-[min(300px,50%)_1fr] p-4 w-full mx-auto">
				<Sidebar />
				<div className="max-w-7xl min-h-[40vh] w-full mx-auto p-10 flex flex-col items-center gap-4">
					<h1 className="text-3xl font-bold">Wishlist</h1>

					{wishlistItems.length === 0 ?
						<div className="flex justify-center items-center w-full flex-wrap">
							No items found in wishlist,
							<span className="text-sky-600 mx-2 cursor-pointer">Try Again</span>
							or
							<Link href="/#products" className="flex text-sky-600 ml-2 justify-center items-center gap-2">
								Shop
							</Link>
						</div>
					:	<div className="w-full flex flex-col gap-4">
							{wishlistItems.map((item) => (
								<div key={item.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
									<div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
										{/* Image */}
										<Link href="#" className="shrink-0 md:order-1">
											<img className="h-20 w-20 rounded object-cover object-center" src={item.image} alt={item.title} />
										</Link>

										{/* Product info */}
										<div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
											<Link href="#">
												<p className="text-base mb-1 font-medium text-gray-900 hover:underline">{item.title}</p>
												<p className="mb-3 text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
											</Link>

											{/* Remove button (no JavaScript) */}
											<button type="button" className="inline-flex items-center text-sm hover:underline">
												<TbHeartMinus color="red" className="mr-2" />
												<span className="text-red-600">Remove</span>
											</button>
										</div>

										{/* Price (desktop) */}
										<div className="flex items-center justify-between md:order-3 md:justify-end">
											<div className="text-end md:order-4 md:w-32">
												<p className="text-base font-bold text-gray-900">${item.price.toFixed(2)}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					}
				</div>
			</div>
		</div>
	)
}

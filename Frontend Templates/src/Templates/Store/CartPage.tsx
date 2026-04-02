import Link from "next/link"
import { BiMinus, BiPlus } from "react-icons/bi"
import { IoReload } from "react-icons/io5"
import { TbHeartPlus, TbTrash } from "react-icons/tb"
import { CgArrowRight } from "react-icons/cg"

export default function CartPage() {
	const cartItems = [
		{
			id: 1,
			title: "Classic Tee",
			price: 29.99,
			total_price: 59.98,
			quantity: 2,
			image: "/placeholder.jpg",
			product: { slug: "classic-tee", stock_quantity: 50 },
		},
		{
			id: 2,
			title: "Hoodie",
			price: 59.99,
			total_price: 59.99,
			quantity: 1,
			image: "/placeholder.jpg",
			product: { slug: "hoodie", stock_quantity: 30 },
		},
	]

	const cartSummary = {
		sub_total: 119.97,
		saved: 10.0,
		shipping: 5.99,
		total: 115.96,
	}

	return (
		<section className="bg-white py-8 antialiased md:py-16">
			<div className="mx-auto max-w-7xl px-4 2xl:px-0">
				<h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Shopping Cart</h2>

				<div className="mt-6 mb-10 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
					{/* Cart items */}
					<div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
						<div className="space-y-6">
							{cartItems.length === 0 ?
								<div className="flex justify-center items-center w-full flex-wrap">
									No items found in cart, <span className="text-sky-600 mx-2 cursor-pointer">Try Again</span>
									or
									<Link href="/#products" className="flex text-sky-600 ml-2 justify-center items-center gap-2">
										Continue shopping <CgArrowRight />
									</Link>
								</div>
							:	cartItems.map((item) => (
									<div key={item.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
										<div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
											{/* Product image */}
											<Link href={`/product/${item.product.slug}`} className="shrink-0 md:order-1">
												<img className="h-20 w-20 rounded object-cover object-center" src={item.image} alt={item.title} />
											</Link>

											{/* Quantity controls */}
											<div className="flex items-center justify-between md:order-3 md:justify-end">
												<div className="flex justify-center items-center w-40 gap-2">
													<button type="button">
														<BiMinus />
													</button>
													<input type="number" className="w-15 text-black hide-arrows" defaultValue={item.quantity} min="1" max={item.product.stock_quantity} />
													<button type="button">
														<BiPlus />
													</button>
													<button className="custom-btn text-white bg-sky-600">
														<IoReload />
													</button>
												</div>
												<div className="text-end md:order-4 md:w-32">
													<p className="text-base font-bold text-gray-900">${item.total_price.toFixed(2)}</p>
												</div>
											</div>

											{/* Product info */}
											<div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
												<Link href={`/product/${item.product.slug}`}>
													<p className="text-base mb-1 font-medium text-gray-900 hover:underline">{item.title}</p>
													<p className="mb-3 text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
												</Link>

												<div className="flex items-center gap-4">
													<button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline">
														<TbHeartPlus className="mr-2" />
														Add to Wishlist
													</button>
													<button type="button" className="inline-flex items-center text-sm font-medium text-rose-600 hover:underline">
														<TbTrash className="mr-2" />
														Remove
													</button>
												</div>
											</div>
										</div>
									</div>
								))
							}
						</div>
					</div>

					{/* Cart summary */}
					{cartItems.length > 0 && (
						<div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
							<div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
								<p className="text-xl font-semibold text-gray-900">Cart summary</p>

								<div className="space-y-4">
									<div className="space-y-2">
										<dl className="flex items-center justify-between gap-4">
											<dt className="text-base font-normal text-gray-500">Subtotal</dt>
											<dd className="text-base font-medium text-gray-900">${cartSummary.sub_total.toFixed(2)}</dd>
										</dl>
										<dl className="flex items-center justify-between gap-4">
											<dt className="text-base font-normal text-gray-500">Savings</dt>
											<dd className="text-base font-medium text-green-600">-${cartSummary.saved.toFixed(2)}</dd>
										</dl>
										<dl className="flex items-center justify-between gap-4">
											<dt className="text-base font-normal text-gray-500">Shipping</dt>
											<dd className="text-base font-medium text-gray-900">${cartSummary.shipping.toFixed(2)}</dd>
										</dl>
									</div>

									<dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
										<dt className="text-base font-bold text-gray-900">Total</dt>
										<dd className="text-base font-bold text-gray-900">${cartSummary.total.toFixed(2)}</dd>
									</dl>
								</div>

								<Link href="/checkout">
									<button type="submit" className="custom-btn text-white mb-4 bg-sky-600 w-full mt-8">
										Proceed to Checkout
									</button>
								</Link>

								<div className="flex items-center justify-center gap-2">
									<span className="text-sm font-normal text-gray-500"> or </span>
									<Link href="/#products" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline">
										Continue Shopping
										<CgArrowRight />
									</Link>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

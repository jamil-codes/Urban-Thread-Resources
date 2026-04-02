import Link from "next/link"
import { CgArrowLeft } from "react-icons/cg"
import { IoCheckmarkCircle, IoCheckmarkCircleOutline } from "react-icons/io5"

export default function CheckoutPage() {
	const cartItems = [
		{
			id: 1,
			title: "Classic Tee",
			price: 29.99,
			total_price: 59.98,
			quantity: 2,
			image: "/placeholder.jpg",
		},
		{
			id: 2,
			title: "Hoodie",
			price: 59.99,
			total_price: 59.99,
			quantity: 1,
			image: "/placeholder.jpg",
		},
	]

	const cartSummary = {
		sub_total: 119.97,
		saved: 10.0,
		shipping: 5.99,
		total: 115.96,
	}

	// shipping details
	const shippingDetails = {
		full_name: "John Doe",
		email: "john.doe@example.com",
		address: "123 Main Street, DHA Phase 6",
		city: "Karachi",
		phone: "+92 300 1234567",
		payment_type: "CARD", // or "COD"
	}

	return (
		<section className="antialiased py-8 md:py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				<h1 className="text-2xl sm:text-3xl font-bold">Checkout</h1>

				{/* Step indicator – responsive */}
				<div className="mb-8 mx-auto px-4 overflow-x-auto">
					<ol className="flex items-center justify-center min-w-max sm:min-w-0 gap-2 sm:gap-4">
						{/* Cart – completed */}
						<li className="flex items-center shrink-0">
							<div className="flex flex-col items-center gap-2 min-w-17.5 sm:min-w-25">
								<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-sky-600 text-white">
									<IoCheckmarkCircle className="text-base sm:text-xl" />
								</div>
								<span className="text-[10px] sm:text-xs font-medium text-center text-sky-700">Cart</span>
							</div>
							<div className="w-8 sm:w-12 h-0.5 mx-1 sm:mx-2 bg-sky-600 hidden sm:block" />
						</li>

						{/* Shipping Details */}
						<li className="flex items-center shrink-0">
							<div className="flex flex-col items-center gap-2 min-w-17.5 sm:min-w-25">
								<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-sky-100 border-2 border-sky-600 text-sky-600">
									<IoCheckmarkCircleOutline className="text-base sm:text-xl" />
								</div>
								<span className="text-[10px] sm:text-xs font-medium text-center text-sky-600">Shipping</span>
							</div>
							<div className="w-8 sm:w-12 h-0.5 mx-1 sm:mx-2 bg-gray-200 hidden sm:block" />
						</li>

						{/* Review Order  */}
						<li className="flex items-center shrink-0">
							<div className="flex flex-col items-center gap-2 min-w-17.5 sm:min-w-25">
								<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-400">
									<IoCheckmarkCircleOutline className="text-base sm:text-xl" />
								</div>
								<span className="text-[10px] sm:text-xs font-medium text-center text-gray-400">Review</span>
							</div>
						</li>
					</ol>
				</div>

				<div className="mt-6 mb-10 lg:flex lg:items-start lg:gap-6 xl:gap-8">
					{/* Left column: Shipping details form + order review */}
					<div className="w-full space-y-8 lg:max-w-2xl xl:max-w-4xl">
						{/* Shipping Details Form */}
						<div>
							<h2 className="mb-5 text-xl font-semibold text-gray-900">Shipping Details</h2>
							<div className="space-y-8">
								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div>
										<label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900">
											Full Name *
										</label>
										<input type="text" id="full_name" name="full_name" className="custom-input w-full" placeholder="Bonnie Green" />
									</div>

									<div>
										<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
											Email *
										</label>
										<input type="email" id="email" name="email" className="custom-input w-full" placeholder="name@example.com" />
									</div>

									<div className="sm:col-span-2">
										<label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">
											Address *
										</label>
										<textarea id="address" name="address" className="custom-input w-full field-sizing-content min-h-25" placeholder="DHA Phase 6, House number 4" />
									</div>

									<div>
										<label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">
											City *
										</label>
										<select id="city" name="city" className="custom-input w-full">
											<option>Karachi</option>
											<option>Lahore</option>
											<option>Islamabad</option>
										</select>
									</div>

									<div>
										<label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
											Phone Number *
										</label>
										<input type="tel" id="phone" name="phone" className="custom-input w-full" placeholder="+923334567890" />
									</div>
								</div>

								{/* Payment methods */}
								<div className="space-y-4">
									<h3 className="text-xl font-semibold text-gray-900">Payment</h3>
									<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
										<label htmlFor="card-radio-input" className="rounded-lg border border-gray-300 p-6 sm:p-8 has-[input[type=radio]:checked]:border-sky-600">
											<div className="flex items-start">
												<input id="card-radio-input" type="radio" value="CARD" name="payment-method" className="mt-0.5" defaultChecked />
												<div className="ms-4 text-sm">
													<p className="font-medium leading-none">Credit Card</p>
													<p className="mt-1 text-xs text-gray-500">Pay with your credit card</p>
												</div>
											</div>
										</label>

										<label htmlFor="cod-radio-input" className="rounded-lg border border-gray-300 p-6 sm:p-8 has-[input[type=radio]:checked]:border-sky-600">
											<div className="flex items-start">
												<input id="cod-radio-input" type="radio" value="COD" name="payment-method" className="mt-0.5" />
												<div className="ms-4 text-sm">
													<p className="font-medium leading-none">Cash on delivery (COD)</p>
													<p className="mt-1 text-xs text-gray-500">Pay when your order is delivered</p>
												</div>
											</div>
										</label>
									</div>
								</div>
							</div>
						</div>

						{/* Order Review (list of cart items) */}
						<div>
							<h2 className="mb-5 text-xl font-semibold text-gray-900">Your Order</h2>
							<div className="flex flex-col gap-6">
								{cartItems.map((item) => (
									<div key={item.id}>
										<div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
											<img src={item.image} alt={item.title} className="h-20 w-20 sm:h-20 sm:w-20 rounded object-cover object-center shrink-0" />
											<div className="flex-1">
												<p className="mb-1 text-base font-medium text-gray-900">{item.title}</p>
												<p className="mb-2 text-sm font-medium tracking-wide text-gray-900">${item.price.toFixed(2)}</p>
												<p className="mb-3 tracking-wider text-gray-900">Quantity: {item.quantity}</p>
											</div>
											<p className="text-base font-bold text-gray-900 sm:text-right">${item.total_price.toFixed(2)}</p>
										</div>
										<hr className="opacity-70 mt-4" />
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Right column: Order summary + shipping details preview */}
					<div className="mt-6 lg:mt-0 lg:w-full max-w-3xl mx-auto space-y-6">
						<div className="shadow-sm p-4 space-y-4 bg-white border border-gray-200 rounded-lg sm:p-6">
							<p className="text-xl font-semibold text-gray-900">Order summary</p>

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

								<dl className="flex items-center justify-between gap-4 pt-6 mt-6 border-t border-gray-200">
									<dt className="text-base font-bold text-gray-900">Total</dt>
									<dd className="text-base font-bold text-gray-900">${cartSummary.total.toFixed(2)}</dd>
								</dl>
							</div>

							{/* Shipping details preview */}
							<hr className="my-5" />
							<div className="space-y-2">
								<dl className="flex flex-wrap gap-2">
									<dt className="text-base font-normal text-gray-500">Full Name:</dt>
									<dd className="text-sm font-normal text-gray-500">{shippingDetails.full_name}</dd>
								</dl>
								<dl className="flex flex-wrap gap-2">
									<dt className="text-base font-normal text-gray-500">Email:</dt>
									<dd className="text-sm font-normal text-gray-500">{shippingDetails.email}</dd>
								</dl>
								<dl className="flex flex-wrap gap-2">
									<dt className="text-base font-normal text-gray-500">Address:</dt>
									<dd className="text-sm font-normal text-gray-500">
										{shippingDetails.address}, {shippingDetails.city}
									</dd>
								</dl>
								<dl className="flex flex-wrap gap-2">
									<dt className="text-base font-normal text-gray-500">Phone:</dt>
									<dd className="text-sm font-normal text-gray-500">{shippingDetails.phone}</dd>
								</dl>
								<dl className="flex flex-wrap gap-2">
									<dt className="text-base font-normal text-gray-500">Payment Method:</dt>
									<dd className="text-sm font-normal text-gray-500">{shippingDetails.payment_type === "COD" ? "Cash on Delivery" : "Credit Card"}</dd>
								</dl>
							</div>

							<button type="button" className="custom-btn w-full bg-sky-600 text-white mt-8">
								Next
							</button>
							<Link href="/cart">
								<button type="button" className="custom-btn w-full gap-2 bg-neutral-300 text-black">
									<CgArrowLeft />
									Back to Cart
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

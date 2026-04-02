import Link from "next/link"
import { RiArrowLeftLine, RiReceiptFill, RiCheckboxCircleLine, RiTimeLine, RiTruckLine, RiMapPinLine, RiRefundLine } from "react-icons/ri"
import { IoCheckmarkCircle, IoCheckmarkCircleOutline, IoCloseCircle, IoReturnUpBack } from "react-icons/io5"

type Props = {
	id: string
}

export default function OrderDetailPage({ id }: Props) {
	const order = {
		id: id,
		created_at: "April 1, 2025",
		created_time: "10:30 AM",
		status: "CONFIRMED", // changed to CONFIRMED
		payment_status: "PENDING",
		payment_type: "Credit Card",
		full_name: "John Doe",
		email: "john.doe@example.com",
		phone: "+92 300 1234567",
		address: "123 Main Street, DHA, Karachi",
		city_name: "Karachi",
		total_price: "$89.99",
		items: [
			{
				title: "Classic Tee",
				price: "$29.99",
				quantity: 2,
				total_price: "$59.98",
				image: "/placeholder.jpg",
			},
			{
				title: "Hoodie",
				price: "$49.99",
				quantity: 1,
				total_price: "$49.99",
				image: "/placeholder.jpg",
			},
		],
	}

	return (
		<section className="bg-linear-to-br from-gray-50 to-white md:px-8 w-full min-h-screen px-4 py-8">
			<div className="max-w-5xl mx-auto">
				<div className="flex items-center justify-between mb-6">
					<Link href="/orders" className="hover:text-gray-900 group inline-flex items-center gap-2 text-gray-600 transition-colors">
						<RiArrowLeftLine className="text-lg group-hover:-translate-x-0.5 transition-transform" />
						<span>Back to Orders</span>
					</Link>
					<button className="no-print hover:bg-gray-50 hover:shadow-sm inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-all bg-white border border-gray-300 rounded-lg">
						<RiReceiptFill className="text-lg" /> Print Invoice
					</button>
				</div>

				<div className="print-content">
					<div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-xl">
						{/* Invoice header */}
						<div className="bg-linear-to-r from-gray-900 to-gray-800 px-6 py-8 text-white">
							<div className="md:flex-row md:items-center flex flex-col items-start justify-between gap-4">
								<div>
									<h1 className="text-3xl font-bold tracking-tight">INVOICE</h1>
									<p className="mt-1 text-sm text-gray-300">Order #{order.id}</p>
								</div>
								<div className="text-right">
									<div className="text-sm text-gray-300">Date of Issue</div>
									<div className="font-medium">{order.created_at}</div>
									<div className="mt-1 text-xs text-gray-400">{order.created_time}</div>
								</div>
							</div>
						</div>

						<div className="md:p-8 p-6">
							{/* Order steps: Pending completed, Confirmed current */}
							<div className="px-4 mx-auto mb-8">
								<ol className="md:flex-nowrap md:gap-0 flex flex-wrap items-center justify-center gap-2">
									{/* Pending (completed) */}
									<li className="md:w-auto flex items-center w-full">
										<div className="min-w-20 flex flex-col items-center gap-2">
											<div className="bg-lime-600 flex items-center justify-center w-10 h-10 text-white rounded-full">
												<IoCheckmarkCircle className="text-xl" />
											</div>
											<span className="text-lime-700 text-xs font-medium text-center">Pending</span>
										</div>
										<div className="flex-1 h-0.5 mx-2 hidden md:block bg-lime-600" />
									</li>
									{/* Confirmed (current) */}
									<li className="md:w-auto flex items-center w-full">
										<div className="min-w-20 flex flex-col items-center gap-2">
											<div className="bg-lime-100 border-lime-600 text-lime-600 flex items-center justify-center w-10 h-10 border-2 rounded-full">
												<IoCheckmarkCircleOutline className="text-xl" />
											</div>
											<span className="text-lime-600  text-xs font-medium text-center">Confirmed</span>
										</div>
										<div className="flex-1 h-0.5 mx-2 hidden md:block bg-gray-200" />
									</li>
									{/* Shipped (pending) */}
									<li className="md:w-auto flex items-center w-full">
										<div className="min-w-20 flex flex-col items-center gap-2">
											<div className="flex items-center justify-center w-10 h-10 text-gray-400 bg-gray-100 rounded-full">
												<IoCheckmarkCircleOutline className="text-xl" />
											</div>
											<span className="text-xs font-medium text-center text-gray-400">Shipped</span>
										</div>
										<div className="flex-1 h-0.5 mx-2 hidden md:block bg-gray-200" />
									</li>
									{/* Out for Delivery (pending) */}
									<li className="md:w-auto flex items-center w-full">
										<div className="min-w-20 flex flex-col items-center gap-2">
											<div className="flex items-center justify-center w-10 h-10 text-gray-400 bg-gray-100 rounded-full">
												<IoCheckmarkCircleOutline className="text-xl" />
											</div>
											<span className="text-xs font-medium text-center text-gray-400">Out for Delivery</span>
										</div>
									</li>
								</ol>
							</div>

							{/* Status badges */}
							<div className="flex flex-wrap gap-3 pb-4 mb-8 border-b border-gray-100">
								<div className="flex items-center gap-2">
									<span className="text-sm font-medium text-gray-500">Order Status:</span>
									<span className="ring-1 bg-green-50 ring-green-200 inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-green-700 rounded-full">
										<RiCheckboxCircleLine className="text-xs" />
										{order.status}
									</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="text-sm font-medium text-gray-500">Payment:</span>
									<span className="bg-amber-50 text-amber-700 ring-1 ring-amber-200 inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full">{order.payment_status}</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="text-sm font-medium text-gray-500">Method:</span>
									<span className="bg-gray-50 ring-1 ring-gray-200 inline-flex items-center px-3 py-1 text-xs font-semibold text-gray-700 rounded-full">{order.payment_type === "COD" ? "Cash on Delivery" : order.payment_type}</span>
								</div>
							</div>

							{/* Customer & address */}
							<div className="md:grid-cols-2 grid gap-8 mb-8">
								<div className="space-y-3">
									<h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Customer Details</h3>
									<div className="space-y-2">
										<p className="text-gray-800">
											<span className="font-medium">Full Name:</span> {order.full_name}
										</p>
										<p className="text-gray-800">
											<span className="font-medium">Email:</span> {order.email}
										</p>
										<p className="text-gray-800">
											<span className="font-medium">Phone:</span> {order.phone}
										</p>
									</div>
								</div>
								<div className="space-y-3">
									<h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Shipping Address</h3>
									<div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
										<p className="font-medium text-gray-800">{order.full_name}</p>
										<p className="mt-1 text-sm text-gray-600">{order.address}</p>
										<p className="text-sm text-gray-600">{order.city_name}, Pakistan</p>
									</div>
								</div>
							</div>

							{/* Order items */}
							<div className="mb-8">
								<h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-400 uppercase">Order Items</h3>
								<div className="rounded-xl overflow-hidden border border-gray-100">
									<div className="divide-y divide-gray-100">
										{order.items.map((item, idx) => (
											<div key={idx} className="sm:flex-row sm:items-center flex flex-col justify-between gap-3 p-4 transition-colors">
												<div className="flex gap-4">
													<div className="shrink-0">
														<img className="object-cover object-center w-16 h-16 border border-gray-100 rounded-lg shadow-sm" src={item.image} alt={item.title} />
													</div>
													<div>
														<p className="font-medium text-gray-900">{item.title}</p>
														<p className="text-sm text-gray-500 mt-0.5">Unit Price: {item.price}</p>
														<p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
													</div>
												</div>
												<div className="sm:text-left text-right">
													<p className="text-sm text-gray-500">Total</p>
													<p className="font-semibold text-gray-900">{item.total_price}</p>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>

							{/* Summary */}
							<div className="pt-6 border-t border-gray-100">
								<div className="flex justify-end">
									<div className="md:w-80 w-full">
										<div className="flex justify-between text-base font-semibold">
											<span>Total Amount</span>
											<span className="text-gray-900">{order.total_price}</span>
										</div>
										{order.payment_type === "COD" && <p className="mt-1 text-xs text-right text-gray-400">Pay on delivery</p>}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

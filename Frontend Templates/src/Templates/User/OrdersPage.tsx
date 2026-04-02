import Link from "next/link"
import Sidebar from "./Sidebar"

export default function OrdersPage() {
	const orders = [
		{
			id: "ORD-001",
			status: "DELIVERED",
			payment_status: "PAID",
			payment_type: "Card",
			total_price: "$89.99",
		},
		{
			id: "ORD-002",
			status: "PROCESSING",
			payment_status: "PENDING",
			payment_type: "Card",
			total_price: "$124.50",
		},
		{
			id: "ORD-003",
			status: "CANCELLED",
			payment_status: "REFUNDED",
			payment_type: "Card",
			total_price: "$45.00",
		},
	]

	return (
		<div className="w-full min-h-screen bg-white">
			<div className="max-w-7xl gap-2 sm:grid sm:grid-cols-[min(300px,50%)_1fr] p-4 w-full mx-auto">
				<Sidebar />
				<div className="max-w-7xl min-h-[40vh] w-full mx-auto p-10 flex flex-col items-center gap-4">
					<h1 className="text-3xl font-bold">Orders</h1>

					{orders.length === 0 ?
						<div className="flex justify-center items-center w-full flex-wrap">
							No orders available yet,
							<span className="text-sky-600 mx-2 cursor-pointer">Try Again</span>
						</div>
					:	<div className="w-full flex flex-col space-y-4">
							{orders.map((order, idx) => (
								<Link key={idx} href={`/order/${order.id}`}>
									<div className="flex px-6 p-4 border border-[#ddd] shadow-sm rounded hover:bg-neutral-50 transition-colors">
										<div className="space-y-4 w-full">
											<p className="text-lg font-medium">
												#{order.id}
												<span
													className={`px-2 py-1 mx-2 text-xs font-medium tracking-wider border rounded-full ${
														["RETURNED", "CANCELLED"].includes(order.status) ? "text-red-700"
														: order.status === "DELIVERED" ? "text-lime-700"
														: "text-sky-700"
													}`}>
													{order.status}
												</span>
											</p>

											<p className="text-sm tracking-wider">
												<b>Payment Status:</b> <span className="px-2 py-1 mx-2 text-xs font-medium tracking-wider border rounded-full">{order.payment_status}</span>
											</p>
											<p className="text-sm tracking-wider">
												<b>Payment Method:</b> <span className="px-2 py-1 mx-2 text-xs font-medium tracking-wider border rounded-full">{order.payment_type}</span>
											</p>
											<p className="text-sm tracking-wider">
												<b>Total Price:</b> {order.total_price}
											</p>
										</div>
									</div>
								</Link>
							))}
						</div>
					}
				</div>
			</div>
		</div>
	)
}

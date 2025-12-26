import { useLocation, useNavigate } from "react-router-dom"
import "./Payment.css"

interface LocationState {
	total: number
}

export default function Payment() {
	const location = useLocation()
	const navigate = useNavigate()

	const state = location.state as LocationState | null

	if (!state) {
		return (
			<div className="payment-page">
				<p>Нет данных для оплаты</p>
				<button onClick={() => navigate("/home")}>
					Вернуться в магазин
				</button>
			</div>
		)
	}

	const formattedTotal = state.total.toFixed(2)

	return (
		<div className="payment-page">
			<div className="qr-wrapper">
				<h1>Оплата заказа</h1>
				<p>Отсканируйте QR-код для оплаты</p>

				<img
					src="src/assets/images/image.png"
					alt="QR code for payment"
					className="qr-image"
				/>
			</div>

			<div className="payment-footer">
				<span>Сумма к оплате:</span>
				<strong>{formattedTotal} ₽</strong>
			</div>
		</div>
	)
}

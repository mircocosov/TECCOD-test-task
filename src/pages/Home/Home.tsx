import { useEffect, useState } from "react"
import "./Home.css"
import getProduct from "../../api/api"
import ProductCard from "../../components/productCard"
import { useNavigate } from "react-router-dom"

interface Product {
	id: number
	title: string
	price: number
}

interface CartItem extends Product {
	quantity: number
}

function formatPrice(value: number) {
	return value.toFixed(2)
}

export default function Home() {
	const [products, setProducts] = useState<Product[]>([])
	const [cart, setCart] = useState<CartItem[]>([])
	const [error, setError] = useState<string | null>(null)
	const navigate = useNavigate()

	useEffect(() => {
		async function loadProducts() {
			const result = await getProduct()

			if (result.error) {
				setError(result.error)
			} else {
				setProducts(result.products)
			}
		}

		loadProducts()
	}, [])

	function addToCart(product: Product) {
		setCart((prev) => {
			const existing = prev.find((item) => item.id === product.id)

			if (existing) {
				return prev.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			}

			return [...prev, { ...product, quantity: 1 }]
		})
	}

	function removeFromCart(id: number) {
		setCart((prev) => prev.filter((item) => item.id !== id))
	}

	const totalPrice = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	)

	if (error) {
		return <div>Ошибка: {error}</div>
	}

	return (
		<>
			<header>
				<h1>Наши продукты</h1>
				<h3>Выберите необходимые товары и оформите заказ</h3>
			</header>

			<main className="main">
				<section className="products">
					{products.map((product) => (
						<ProductCard
							key={product.id}
							title={product.title}
							price={product.price}
							onAdd={() => addToCart(product)}
						/>
					))}
				</section>

				<aside className="cart">
					<h2 className="cart-title">🛒 Итого</h2>

					{cart.length === 0 && (
						<p className="empty">Корзина пуста</p>
					)}

					{cart.map((item) => (
						<div className="cart-item" key={item.id}>
							<div>
								<p>{item.title}</p>
								<span>×{item.quantity}</span>
							</div>

							<div className="cart-item-price">
								<span>
									{formatPrice(item.price * item.quantity)} ₽
								</span>
								<button
									className="remove"
									onClick={() => removeFromCart(item.id)}
								>
									✕
								</button>
							</div>
						</div>
					))}

					<hr />

					<div className="cart-total">
						<span>Общая сумма:</span>
						<strong>{formatPrice(totalPrice)} ₽</strong>
					</div>

					<button
						className="checkout-btn"
						disabled={cart.length === 0}
						onClick={() =>
							navigate("/payment", {
								state: {
									total: totalPrice,
								},
							})
						}
					>
						Оформить заказ
					</button>
				</aside>
			</main>
		</>
	)
}

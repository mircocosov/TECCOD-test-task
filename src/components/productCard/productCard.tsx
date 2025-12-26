import "./productCard.css"

interface ProductCardProps {
	title: string
	price: number
	onAdd: () => void
}

export default function ProductCard({ title, price, onAdd }: ProductCardProps) {
	return (
		<div className="productCard">
			<div className="left-side__productCard">
				<h2 className="title">{title}</h2>
				<p className="price">{price} ₽</p>
			</div>

			<button onClick={onAdd} className="add-button">
				Добавить
			</button>
		</div>
	)
}

import { ItemInterface } from "../interface/ItemInterface"

interface ItemProps {
  item: ItemInterface
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const title = item.title?.length > 50 ? `${item.title.slice(0, 50)}...` : item.title  
  
  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage?.url_570xN}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">
          {
            item.currency_code === 'USD' ? '$' : item.currency_code === 'EUR' ? '€' : item.currency_code
          }
          {item.price}
        </p>
        <p className={`item-quantity level-${item.quantity <= 10 ? 'low' : item.quantity <= 20 ? 'medium' : 'high'}`}>{item.quantity} left</p>
      </div>
    </div>
  )
}

export default Item
import data from '../data/etsy.json'
import { ItemInterface } from '../interface/ItemInterface';
import Item from './Item';

const Listing = () => {
  const items: ItemInterface[] = data.filter(item => item.state === 'active');
   
  return (
    <div className="item-list">
      {
        items.map(item => <Item item={item} key={item.listing_id}/>)
      }
    </div>
  )
}

export default Listing
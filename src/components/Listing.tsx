import data from '../data/etsy.json'
import { ItemInterface } from '../interface/ItemInterface';
import Item from './Item';

function Listing() {
  const stringify = JSON.stringify(data)
  const dataParse = JSON.parse(stringify);
  const items: ItemInterface[] = dataParse.filter((item: any) => item.state === 'active');
   
  return (
    <div className="item-list">
      {
        items.map(item => <Item item={item} key={item.listing_id}/>)
      }
    </div>
  )
}

export default Listing
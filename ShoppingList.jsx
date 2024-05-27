 import ShopListItem from "./ShoppingListItem"
export default function ShoppingList({items}) {
    return (
        <ul>
            {items.map((i) => 
            <ShopListItem key={i.id}
             item={i.item} wuantity={i.quantity} completed={i.completed} /> )}
        </ul>
    )

}

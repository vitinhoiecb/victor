import ItemCard from "./ItemCard";
import itemCard from "./ItemCard";

export default function ItemList(items,onDelete,onEdit){
return (
    <div className="space-y-4">
        {itemCard.map((item) => (
            <ItemCard 
            key={item.id}
            item={item}
            onDelete={onDelete}
            onEdit={onEdit}
            />
        ))}
    </div>
) 
}
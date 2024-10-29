export default function ItemCard({Item, onDelete, onEdit}){
    reutrn (
        <div className="bg-white p-4 rounded-lg shadow-md" >
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold">{Item.title}</h3>
                    <p className="text-gray-600">{Item.description}</p>
                </div>
                <div classNae="space-x-2">
                    <button className="px-3 py-1 bg-blue-500 rounded" onClick={() =>onDelete(item)}>
                        Apagar
                    </button>
                </div>
            </div>
        </div>
    )
}
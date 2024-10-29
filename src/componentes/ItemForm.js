import { useEffect, useState } from "react";

export default function ItemForm({onSubmit, initialData =null}){
    const [formData, setFormData] = useState({
        title:"",
        description: "",
    })
}

useEffect(() => {
    if(initialData){
        setFormData(initalData)
    }
}, [initialData]);

const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData)
}

return (
    <form onSubmit={handleSubmit}
    className="space-y-4 mb-8"
    >
        <div>
            <label
            className='block text-sm font-medium text-gray-700'>Titulo</label>
            <input
            type="text"
            value={formData.title}
            onChange={(e) =>setFormData({...formData, title: e.target.value})}
            required
            />
        </div>
        <div>
            <label className='block text-sm font-medium text-gray-700'>Descrição</label>
            <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData,description:e.target.value})}
        </div>
    </form>
)
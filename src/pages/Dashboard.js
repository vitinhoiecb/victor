import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard(){
    const [items, setItems] = useState([])
    const [editingItem, setEditingItem] = useState (null)

    useEffect(()) => {
        setItems([
         (id:1, title: 'Item 1', description: 'Descrição do item 1' } ,
        ])
    })

    const handleCreate =
    (newItem) => {
        setItems([...items, {
            ...newItem, id: Date.now()
        }])
    }

    const handleUpdate =
    (updatedItem) => {
        setItems(items.map(item
        => item.id ===
        editingItem.id ? {
            ...updatedItem, id:
            editingItem.id
        }   : item ));
        setEditingItem(null);
    }

    const handleDelete = (id)
    => {
      setItems(items.filter
        (item => item.id !== id)) 
    }


    const handleEdit = (item) => {
        setEditingItem
    }

  
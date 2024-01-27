import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function Show_item(props) {
    const [itemCounts, setItemCounts] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const itemsFromLocalStorage = localStorage.getItem('item');
        if (itemsFromLocalStorage) {
            const parsedItems = JSON.parse(itemsFromLocalStorage);

            // Count occurrences of each unique item
            const counts = {};
            parsedItems.forEach((item) => {
                counts[item] = (counts[item] || 0) + 1;
            });

            // Convert counts to an array of objects
            const countsArray = Object.entries(counts).map(([item, count]) => ({
                item,
                count,
            }));

            setItemCounts(countsArray);
        }
    }, []);

    const DeletItem = (id) => {
        const stordata = localStorage.getItem('item')
        console.log('oko', stordata)
    }

    return (
        <>
            <h2>SHOW ITEAM</h2>
            <ul>
                {itemCounts.map(({ item, count }) => (
                    <div className='d-block mb-2'>
                        <p>{item}</p>
                        <button className='btn btn-primary me-2' onClick={() => navigate('/')}>Add Item</button>
                        <button className='btn btn-danger' onClick={() => DeletItem(item)}>Delet Item {count}</button>
                    </div>
                ))}
            </ul>
        </>
    );
}

export default Show_item;
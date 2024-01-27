import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home_page(props) {
    const [count, setcount] = useState(0)
    const [items, setItems] = useState([1, 2, 3]);
    const [addedItems, setAddedItems] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('item')) || [];
        // setcount(storedItems.length);
        setAddedItems(storedItems);
    }, []);

    const ADDITEM = (id) => {
        let storedItems = localStorage.getItem('item');
        storedItems = storedItems ? JSON.parse(storedItems) : [];
        if (!storedItems.includes(id)) {
            storedItems.push(id);
            localStorage.setItem('item', JSON.stringify(storedItems));
            console.log('count', count);
            setcount(count + 1);
            setAddedItems([...addedItems, id]);
        }
        else {
            storedItems.push(id);
            localStorage.setItem('item', JSON.stringify(storedItems));
        }

    }
    const DeletItem = (id) => {

        if (addedItems.includes(id) && count > 0) {
            setcount(count - 1);
            setAddedItems(addedItems.slice(id, 1));
        }
        console.log('delet', addedItems)
    }
    return (
        <>
            <div className='addcart'>
                <Link to={'/showitem'}>
                    <button type="button" className="btn btn-primary position-relative">
                        Inbox
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {count}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>
                </Link>
            </div>

            {
                items.map((id) => {
                    return <div className='d-block mb-2'>
                        <p>{id}</p>
                        <button className='btn btn-primary me-2' onClick={() => ADDITEM(id)}>ADD item {id}</button>
                        <button className='btn btn-danger' onClick={() => DeletItem(id)}>Delet Item {id}</button>
                    </div>
                })
            }
            {/* </div > */}
        </>
    );
}


export default Home_page;
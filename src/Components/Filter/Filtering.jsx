import React, { useState } from 'react'
import Categories from './FilterApi'
import { useDispatch } from 'react-redux'
import { incrementcart, decrementcart } from '../Redux/Reducer/CartReducer'
import { useSelector } from 'react-redux'
import './Filter.css'

const Filtering = () => {
    const CartCount = useSelector((state) => state.CartReducer.cartValues.length)
    const TotalPrice = useSelector((state) => state.CartReducer.totalPrice)

    const dispatch = useDispatch()

    const [data, setData] = useState(Categories)
    const [search, setSearch] = useState('')

    const filterResult = (catItem) => {
        const result = Categories.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);
    }

    return (
        <>
            <h1 className='text-danger text-center fw-bold'> Online Shopping</h1>
            <div className='text-center m-3 w-100'>

                <p>Search</p><input type="text" className='w-50 p-2 ' placeholder='Search Your Favourite Product.....' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className='container'>
                <div className='col d-flex '>
                    <button className="btn btn-warning m-3 fw-bold w-100" onClick={() => filterResult('Men Clothing')}> Men Clothing</button>
                    <button className="btn btn-danger  m-3 fw-bold w-100" onClick={() => filterResult('Women')} >Women Clothing</button>
                    <button className="btn btn-warning m-3 fw-bold w-100" onClick={() => filterResult('Kids')}>Kids Clothing</button>
                    <button className="btn btn-danger  m-3 fw-bold w-100" onClick={() => filterResult('Food')}>Food</button>
                    <button className="btn btn-warning m-3 fw-bold w-100" onClick={() => filterResult('Ornaments')}>Ornaments</button>
                    <button className="btn btn-danger  m-3 fw-bold w-100" onClick={() => filterResult('Mobiles')}>Mobiles</button>
                    <button className="btn btn-warning m-3 fw-bold w-100" onClick={() => setData(Categories)}>All</button>

                </div>
                <div className='' >

                    <div className='col d-flex'>
                        <button className="btn btn-success m-3 fw-bold w-50">CartItems: {CartCount}</button>
                        <button className="btn btn-danger m-3 fw-bold w-50">TotalPrice: {TotalPrice}</button>
                    </div>
                    <div className='col'>
                        <div className="row">

                            {data.filter((item) => {
                                if (search === " ") {
                                    return item
                                }
                                else if (item.title.toLowerCase().includes(search.toLowerCase())) {
                                    return item;
                                }
                            })
                                .map(item => {
                                    return (
                                        <>
                                            <div className='col-md-4' key={item.id}>
                                                <div className="card m-3 p-4">
                                                    <img src={item.img} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title"><p>{item.title}</p></h5>
                                                        <p className="card-text">{item.desc}</p>
                                                        <div className='pricedeatils'>
                                                            <span className='span '>{item.price}/-</span>
                                                        </div>
                                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", paddingTop: "20px" }}>
                                                            <p className="btn btn-warning fw-bold" onClick={() => dispatch(incrementcart({
                                                                itemTitle: item.title,
                                                                itemPrice: item.price
                                                            }))}> ADD</p>
                                                            <p className="btn btn-warning fw-bold" onClick={() => dispatch(decrementcart({
                                                                itemTitle: item.title,
                                                                itemPrice: item.price
                                                            }))}> Remove</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Filtering
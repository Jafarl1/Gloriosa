import React, { useState,memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../../assets/css/nouislider.min.css'
import MultiRangeSlider from '../multiRangeSlider/MultiRangeSlider'

function Catalog({setFiltered}) {

    const [catalog, setCatalog] = useState(true)
    const [filter, setFilter] = useState(false)
    const loc = window.location.href;
    const products = useSelector(state => state)
    const category = (window.location.pathname).slice(1);

    const allItems = products[category];
    let filteredItems = [];

    let colorFilters = {};
    let sizeFilters = {};

    const openFilter = () => {
        setFilter(!filter)
        if (catalog) {
            setCatalog(!catalog)
        }
    }

    const openCatalogList = () => {
        setCatalog(!catalog)
        if (filter) {
            setFilter(!filter)
        }
    }

    let priceFiltered = [];

    const checkFiltered = () => {
        filteredItems = allItems;

        let byPrice = [];
        priceFiltered.forEach(p => {
            byPrice.push(p)
        })
        filteredItems = byPrice;

        let byColor = [];
        for (let c in colorFilters) {
            if (colorFilters[c]) {
                filteredItems.forEach(item => {
                    if (item.color === c) {
                        byColor.push(item)
                    }
                })
            }
        }
        if (Object.values(colorFilters).some(el => el === true)) {
            filteredItems = byColor;
        }

        let bySize = [];
        for (let s in sizeFilters) {
            if (sizeFilters[s]) {
                filteredItems.forEach(item => {
                    if (item.size === s) {
                        bySize.push(item)
                    }
                })
            }
        }
        if (Object.values(sizeFilters).some(el => el === true)) {
            filteredItems = bySize;
        }
        setFiltered(filteredItems);
    }

    const ByPrice = (min, max) => {
        let filtered = allItems.filter(item => item.price >= min && item.price <= max);
        priceFiltered = filtered;
        checkFiltered();
    }

    const ByColor = (e) => {
        let filters = {
            ...colorFilters,
            [e.target.id]: e.target.checked,
        };
        colorFilters = filters;
        checkFiltered();
    }

    const BySize = (e) => {
        let filters = {
            ...sizeFilters,
            [e.target.id]: e.target.checked,
        };
        sizeFilters = filters;
        checkFiltered();
    }


    return (
        <>
            <div className="sidebar">
                <div className="filter">
                    <div className="headline">
                        <h2>
                            Filtr
                        </h2>
                        <i
                            className={filter ? "fa-solid fa-angle-down openfilter rotate-i" : "fa-solid fa-angle-down openfilter"}
                            onClick={() => openFilter()}
                        >
                        </i>
                    </div>
                    <div className={filter ? "filter-items show-filter-list" : "filter-items"}>
                        <div className="price-filter">
                            <h5>
                                Qiymət
                            </h5>
                            <div className="price-inputs">
                                <MultiRangeSlider
                                    min={0}
                                    max={500}
                                    onChange={({ min, max }) => ByPrice(min, max)}
                                />
                            </div>
                        </div>
                        <div className="color-filter">
                            <h5>
                                Rəng
                            </h5>
                            <div className="color-inputs">
                                <label htmlFor="parlaq">
                                    <input type="checkbox" name="parlaq" id="parlaq" onChange={(e) => ByColor(e)} />
                                    <span className="mark"></span>
                                    Parlaq
                                </label>
                                <label htmlFor="zəngin">
                                    <input type="checkbox" name="zəngin" id="zəngin" onChange={(e) => ByColor(e)} />
                                    <span className="mark"></span>
                                    Zəngin
                                </label>
                                <label htmlFor="zərif">
                                    <input type="checkbox" name="zərif" id="zərif" onChange={(e) => ByColor(e)} />
                                    <span className="mark"></span>
                                    Zərif
                                </label>
                                <label htmlFor="açıq">
                                    <input type="checkbox" name="açıq" id="açıq" onChange={(e) => ByColor(e)} />
                                    <span className="mark"></span>
                                    Açıq
                                </label>
                                <label htmlFor="pastel">
                                    <input type="checkbox" name="pastel" id="pastel" onChange={(e) => ByColor(e)} />
                                    <span className="mark"></span>
                                    Pastel
                                </label>
                            </div>
                        </div>
                        <div className="size-filter">
                            <h5>
                                Ölçü
                            </h5>
                            <div className="size-inputs">
                                <label htmlFor="kiçik">
                                    <input type="checkbox" name="kiçik" id="kiçik" onChange={(e) => BySize(e)} />
                                    <span className="mark"></span>
                                    Kiçik
                                </label>
                                <label htmlFor="orta">
                                    <input type="checkbox" name="orta" id="orta" onChange={(e) => BySize(e)} />
                                    <span className="mark"></span>
                                    Orta
                                </label>
                                <label htmlFor="böyük">
                                    <input type="checkbox" name="böyük" id="böyük" onChange={(e) => BySize(e)} />
                                    <span className="mark"></span>
                                    Böyük
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catalog">
                    <div className="headline">
                        <NavLink to="/products">
                            <h2>
                                Kataloq
                            </h2>
                        </NavLink>

                        <i
                            className={catalog ? "fa-solid fa-angle-down opencatalog rotate-i" : "fa-solid fa-angle-down opencatalog"}
                            onClick={() => openCatalogList()}
                        >
                        </i>
                    </div>
                    <div className={catalog ? "catalog-items show-catalog-list" : "catalog-items"}>

                        <NavLink to='/authorbouquets'
                            className={loc.includes('authorbouquets') ? "boldtext" : ""}
                        >
                            Müəllif buketləri
                        </NavLink>

                        <NavLink to='/compositions'
                            className={loc.includes('compositions') ? "boldtext" : ""}
                        >
                            Kompozisiyalar
                        </NavLink>

                        <NavLink to='/wowbouquets'
                            className={loc.includes('wowbouquets') ? "boldtext" : ""}
                        >
                            Wow buketlər
                        </NavLink>

                        <NavLink to='/minibouquets'
                            className={loc.includes('minibouquets') ? "boldtext" : ""}
                        >
                            Mini buketlər
                        </NavLink>

                        <NavLink to='/mensbouquets'
                            className={loc.includes('mensbouquets') ? "boldtext" : ""}
                        >
                            Kişi buketləri
                        </NavLink>

                        <NavLink to='/monobouquets'
                            className={loc.includes('monobouquets') ? "boldtext" : ""}
                        >
                            Mono buketlər
                        </NavLink>

                        <NavLink to='/seasonbouquets'
                            className={loc.includes('seasonbouquets') ? "boldtext" : ""}
                        >
                            Fəsil kompozisiyaları
                        </NavLink>

                        <NavLink to='/weddingbouquets'
                            className={loc.includes('weddingbouquets') ? "boldtext" : ""}
                        >
                            Toy buketləri
                        </NavLink>

                        <NavLink to='/cardspage'
                            className={loc.includes('cardspage') ? "boldtext" : ""}
                        >
                            Açıqçalar
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default memo(Catalog)
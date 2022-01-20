import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {fetchPosts} from "../store/actions/postActions";
import {useEffect} from "react";
import Link from "next/link";
import {categoriesAction} from '../store/actions/categories-action';


const FirstFilter = () => {
    const dispatch = useDispatch();
    const {pathname, query, push} = useRouter();

    const router = useRouter();

    const [brandValue, setBrandValue] = useState("");

    function filterProducts(key, value) {

        let object = new URLSearchParams(window.location.search);
        object.set(key, value);
        let newURL = `${pathname}?${object.toString()}`;
        router.push(newURL);
        setBrandValue(value);
        dispatch(fetchPosts(value));
    }

    const {
        category: {categories},
    } = useSelector((state) => state);
    console.log(categories);

    useEffect(() => {
        let object = new URLSearchParams(window.location.search);
        dispatch(fetchPosts(brandValue));
        dispatch(categoriesAction())
        setBrandValue(object.get("category_name"));
    }, [router]);
    return (
        <div>
            <form>
                <Link href={"/"} as={'/'}>

                    <label>
                        Башкы бет
                    </label>
                </Link>
                {
                    categories ? (
                        categories.map((item) => (
                            <label>{item.title}
                                <input
                                    type="radio"
                                    className="category__btn"
                                    value={item.id}
                                    onChange={(e) => {
                                        filterProducts("category", e.target.value);
                                    }}
                                    checked={brandValue === item.id}
                                />
                            </label>
                        ))

                    ) : (<h2>Категориялар жок</h2>)
                }
            </form>
        </div>
    );
};

export default FirstFilter;
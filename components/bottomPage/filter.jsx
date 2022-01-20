import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {
    fetchInterestingImage,
    fetchInterestingPosts,
    fetchUnterestingImage
} from "../../store/actions/interesting-action";
import {fetchMostRead} from "../../store/actions/most-read-actions";

const FilterPosts = () => {
    const dispatch = useDispatch();
    const {pathname, query, push} = useRouter();

    const router = useRouter();

    const [brandValue, setBrandValue] = useState("");

    function filterProducts(key, value) {
        let object = new URLSearchParams(window.location.search);
        object.set(key, value);
        let newURL = `${pathname}?${object.toString()}`;

        dispatch(fetchInterestingPosts(key, value));
        dispatch(fetchMostRead(key, value));
        router.push(newURL);
        // setBrandValue(value);
    }

    useEffect(() => {
        let object = new URLSearchParams(window.location.search);
        dispatch(fetchInterestingPosts("region", brandValue));
        dispatch(fetchMostRead("region", brandValue));
        // setBrandValue(object.get("region"));
    }, [router]);


    return (
        <div className='region'>
            <div className="container">
                <h1>Областтар</h1>
                <div className="regionContent">
                    <form>
                        <div className='firstContent'>
                            <label>Ош
                                <input
                                    type="radio"
                                    className="category__btn"
                                    value="1"
                                    onChange={(e) => {
                                        filterProducts("region", e.target.value);
                                    }}
                                    checked={brandValue === "1"}
                                />{" "}
                            </label>
                            <label>Чуй
                                <input
                                    type="radio"
                                    className="category__btn"
                                    value="2"
                                    onChange={(e) => {
                                        filterProducts("region", e.target.value);
                                    }}
                                    checked={brandValue === "2"}
                                />{" "}
                            </label>
                            <label>Джалал-абад
                                <input
                                    type="radio"
                                    className="category__btn"
                                    value="3"
                                    onChange={(e) => {
                                        filterProducts("region", e.target.value);
                                    }}
                                    checked={brandValue === "3"}
                                />{" "}
                            </label>
                            <label>Нарын
                                <input
                                    type="radio"
                                    className="category__btn"
                                    value="6"
                                    onChange={(e) => {
                                        filterProducts("region", e.target.value);
                                    }}
                                    checked={brandValue === "6"}
                                />{" "}
                            </label>
                            <label>Талас
                                <input
                                    type="radio"
                                    className="category__btn"
                                    value="7"
                                    onChange={(e) => {
                                        filterProducts("region", e.target.value);
                                    }}
                                    checked={brandValue === "7"}
                                />{" "}
                            </label>
                            <label>Ыссык-Көль
                                <input
                                    type="radio"
                                    className="category__btn"
                                    value="5"
                                    onChange={(e) => {
                                        filterProducts("region", e.target.value);
                                    }}
                                    checked={brandValue === "5"}
                                />{" "}
                            </label>
                            <label>Баткен
                                <input
                                    type="radio"
                                    className="category__btn"
                                    value="4"
                                    onChange={(e) => {
                                        filterProducts("region", e.target.value);
                                    }}
                                    checked={brandValue === "4"}
                                />
                            </label>
                        </div>
                        <div className='secondContent'>
                            <label>Сүрөт
                                <input
                                    type="radio"
                                    className="category__btn"
                                    value="image"
                                    onChange={(e) => {
                                        filterProducts("image", e.target.value);
                                    }}
                                    checked={brandValue === "image"}
                                />
                            </label>
                            <label>Видео
                                <input
                                    type="radio"
                                    className="category__btn"
                                    value="video"
                                    onChange={(e) => {
                                        filterProducts("video", e.target.value);
                                    }}
                                    checked={brandValue === "video"}
                                />
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FilterPosts;

//rsc
import React, {useState} from 'react';
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const initialState = ['Bad Bunny'];

    const [categories, setCategories] = useState(initialState)
    /*
        const handleAdd = () => {
            setCategories([...categories, 'HunterXHunter']);
        };
     */

    return (
        <>
            <h2>GifExpert</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category => <GifGrid category={category} key={category}/>)
                }
            </ol>
        </>
    );
};

export default GifExpertApp;

import React, { useState, useEffect, useRef } from "react";
import searchDelay from "./api/search";

function SearchUnsafe() {
    const [data, setData] = useState(null);
    const [time, setTime] = useState(1);
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);
        const data = await searchDelay(time);
        setData(data);
        setLoading(false);
    }

    return (
        <React.Fragment>
            <input value={time} onChange={e => setTime(e.target.value)} type="number" />
            <button type="button" onClick={fetchData}>
                Delay Fetch
            </button>
            <p>Result : {loading ? "Loading..." : JSON.stringify(data)}</p>
        </React.Fragment>
    );
}

export default SearchUnsafe;

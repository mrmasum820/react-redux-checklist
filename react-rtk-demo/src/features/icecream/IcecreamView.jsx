import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
import { useState } from "react";


const IcecreamView = () => {
    const [value, setValue] = useState(1)
    const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of Icecream - {numOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order Icecream</button>
            <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            <button onClick={() => dispatch(restocked(value))}>Restock Icecream</button>
        </div>
    );
};

export default IcecreamView;
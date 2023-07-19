import React from "react";
import Card from "./Card";
import { FiChevronRight, FiChevronLeft} from "react-icons/fi";

const Testimonial = (props) => {
    let reviews=props.reviews;
    function leftShiftHandler(){
        

    }

    function rightShiftHandler(){


    }

    function surpriseHandler(){

        
    }


    return (
        <div>
            <Card review = {reviews[0]}></Card>

            <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto'>
                <button 
                onClick = {leftShiftHandler}
                className='cursor-pointer hover:text-violet-500'>
                    <FiChevronLeft />
                </button>
                <button
                onClick = {rightShiftHandler}
                className='cursor-pointer hover:text-violet-500'>
                    <FiChevronRight/>
                </button>
            </div>

            <div >
                <button 
                onClick = {surpriseHandler}
                className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                    Surprice Me
                </button>
            </div>
        </div>
    )
}

export default Testimonial
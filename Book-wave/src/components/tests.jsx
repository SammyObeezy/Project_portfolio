import React, {useEffect, useState} from "react";


const Rent = () => {
    const [rentalBooks, setRentalBooks] = useState([]);
    const [error, setError] = useState(true);

    const counties = ["all", "Nairobi", "Nakuru"];
    const SubCounties ={
        all:["all"],
        Nairobi:["all", "Kasarani"],
    }

}
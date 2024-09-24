import React from "react";
import { useSelector } from "react-redux";
import ListingCard from "./ListingCard";

const FeaturedListings = ({ flatmates }) => {
    const allListings = useSelector((store) => store.listing.listings);
    const featuredListings = allListings.slice(0, 3);

    return (
        <section className="my-8 px-4">
            <h2 className="text-2xl font-semibold text-center mb-6">Featured Listings</h2>
            <div className="flex overflow-x-scroll space-x-4">
                {featuredListings.map((flatmate) => (
                    <ListingCard key={flatmate._id} listing={flatmate} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedListings;

import React from "react";

const cities = [
  { name: "Delhi", imgSrc: "https://media.istockphoto.com/id/510795912/photo/india-gate.jpg?s=612x612&w=0&k=20&c=kZkdrEDXEtoLK6Qh8XPywc9VYV95mJXXcWLBxHftN_U=" },
  { name: "Mumbai", imgSrc: "https://media.istockphoto.com/id/1307189136/photo/gateway-of-india-mumbai-maharashtra-monument-landmark-famous-place-magnificent-view-without.jpg?s=612x612&w=0&k=20&c=gGzzkXY5bAVbRbokzrjvkt7Ve-Z3yzSVN04NaMqyBB8=" },
  { name: "Noida", imgSrc: "https://media.istockphoto.com/id/623383570/photo/destruction-of-nature-and-construction-of-new-urban-landscape.jpg?s=612x612&w=0&k=20&c=zDayvu-DOyNzK13f84BiH8npSP_N9w-1RRs4xqrfF3E=" },
  { name: "Bangalore", imgSrc: "https://media.istockphoto.com/id/186255464/photo/bangalore-skyline-india.jpg?s=612x612&w=0&k=20&c=_kUTev1oSISvvP60lPxNAv9QZcwKOj3djjXF3zUxFLc=" },
  { name: "Pune", imgSrc: "https://media.istockphoto.com/id/1320749212/photo/cityview.jpg?s=612x612&w=0&k=20&c=9ho0mNkHI8jhbagXIxPQDKmlgAW3MqIcuh1hJwungbI=" },
  { name: "Ahmedabad", imgSrc: "https://media.istockphoto.com/id/937393026/photo/kalupur-swaminarayan-mandir-a-hindu-temple-in-the-old-city-of-ahmedabad-gujarat-india.jpg?s=612x612&w=0&k=20&c=mg5ONSctQTMJBZqLjncv47UZEuwnE4bc51t5j5Hy1x4=" },
  { name: "Gurgaon", imgSrc: "https://media.istockphoto.com/id/1167047679/photo/dlf-cyber-city.jpg?s=612x612&w=0&k=20&c=scGBwun5iMGOjJ-3_OF2HQASWiPV-ERVOzgDxjnBZPM=" },
  { name: "Hyderabad", imgSrc: "https://media.istockphoto.com/id/1215274990/photo/high-wide-angle-view-of-charminar-in-the-night.jpg?s=612x612&w=0&k=20&c=byyIjqgbslf-L191n6SJu0s35fvNoVeWsxV5rIPK7Sk=" },
  { name: "Kolkata", imgSrc: "https://media.istockphoto.com/id/1164386039/photo/howrah-bridge-on-river-ganges-at-kolkata-at-twilight-with-moody-sky.jpg?s=612x612&w=0&k=20&c=CHrNWdInFSDyERdvgd0f8935hZcBQU6lbYCE4LlXqUY=" },
  { name: "Chennai", imgSrc: "https://media.istockphoto.com/id/1226340114/photo/puratchi-thalaivar-dr-mgr-central-railway-station-chennai-central-railway-station-india.jpg?s=612x612&w=0&k=20&c=lZjBnWBBoLiApWZUUWP1Vl3XAVdKjYMcgGpItXv_L14=" },
  { name: "Chandigarh", imgSrc: "https://media.istockphoto.com/id/1362644093/photo/national-highway-road-to-shimla-hill-station-with-scenic-mountain-landscape-at-himachal.jpg?s=612x612&w=0&k=20&c=0OGCKawYxeEEDcUoYZauyw3tG3XAaOiQBm6EbJZ3M0U=" },
  { name: "Jaipur", imgSrc: "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=" },
];

const PopularCities = () => {
  return (
    <section className="py-12 px-4 md:mx-20">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-white mb-8">
        View rooms in Popular Cities
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-8">
        {cities.map((city, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={city.imgSrc}
              alt={city.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                {city.name.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCities;

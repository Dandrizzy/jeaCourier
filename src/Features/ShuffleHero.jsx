import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
 return (
  <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
   <div>
    <span className="block mb-4 text-xs md:text-sm text-blue-400 font-medium">
     Better every day
    </span>
    <h3 className="text-4xl text-neutral-100 md:text-6xl font-semibold">
     Fest Link Diplomat
    </h3>
    <p className="text-base md:text-lg text-neutral-100 my-4 md:my-6">
     Track shipment / Find and ship a product using Alpha code
    </p>


    {/* <button className="bg-orange-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-orange-600 active:scale-95">
     Menu
    </button> */}
   </div>
   <ShuffleGrid />
  </section>
 );
};

const shuffle = (array) => {
 let currentIndex = array.length,
  randomIndex;

 while (currentIndex != 0) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;

  [array[currentIndex], array[randomIndex]] = [
   array[randomIndex],
   array[currentIndex],
  ];
 }

 return array;
};

const squareData = [
 {
  id: 1,
  src: "/3.jpg",
 },
 {
  id: 2,
  src: "/5.jpg",
 },
 {
  id: 3,
  src: '/05.jpg'
 },
 {
  id: 4,
  src: '/6.jpg'
 },
 {
  id: 5,
  src: '/8.jpg'
 },
 {
  id: 6,
  src: '/12.jpg'
 },
 {
  id: 7,
  src: '/air.jpg'
 },
 {
  id: 8,
  src: '/4.png'
 },
 {
  id: 9,
  src: '/7.png'
 },
 {
  id: 10,
  src: '/3.jpg'
 },
 {
  id: 11,
  src: '/5.jpg'
 },
 {
  id: 12,
  src: '/05.jpg'
 },
 // {
 //  id: 13,
 //  src: '/fur.jpg'
 // },
 // {
 //  id: 14,
 //  src: '/cute.jpg'
 // },
 // {
 //  id: 15,
 //  src: '/cream.jpg'
 // },
 // {
 //  id: 16,
 //  src: '/mix.jpg'
 // },
];

const generateSquares = () => {
 return shuffle(squareData).map((sq) => (
  <motion.div
   key={sq.id}
   layout
   transition={{ duration: 1.5, type: "spring" }}
   className="w-full h-full"
   style={{
    backgroundImage: `url(${sq.src})`,
    backgroundSize: "cover",
   }}
  ></motion.div>
 ));
};

const ShuffleGrid = () => {
 const timeoutRef = useRef(null);
 const [squares, setSquares] = useState(generateSquares());

 useEffect(() => {
  shuffleSquares();

  return () => clearTimeout(timeoutRef.current);
 }, []);

 const shuffleSquares = useCallback(() => {
  setSquares(generateSquares());

  timeoutRef.current = setTimeout(shuffleSquares, 3000);
 }, []);

 return (
  <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
   {squares.map((sq) => sq)}
  </div>
 );
};

export default ShuffleHero;
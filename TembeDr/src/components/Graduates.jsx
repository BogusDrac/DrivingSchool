import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Medal, Loader2 } from 'lucide-react';

import img1 from "../assets/images/grad1.jpg";
import img2 from "../assets/images/grad2.jpg";
import img3 from "../assets/images/grad3.jpg";
import img4 from "../assets/images/grad4.jpg";
import img5 from "../assets/images/grad5.jpg";
import img6 from "../assets/images/grad6.jpg";
import img7 from "../assets/images/grad7.jpg";
import img8 from "../assets/images/grad8.jpg";
import img9 from "../assets/images/grad9.jpg";
import img10 from "../assets/images/grad10.jpg";
import img11 from "../assets/images/grad11.jpg";
import img12 from "../assets/images/grad12.jpg";
import img13 from "../assets/images/grad13.jpg";
import img14 from "../assets/images/grad14.jpg";
import img15 from "../assets/images/grad15.jpg";
import img16 from "../assets/images/grad16.jpg";
import img17 from "../assets/images/grad17.jpg";
import img18 from "../assets/images/grad18.jpg";
import img19 from "../assets/images/grad19.jpg";
import img20 from "../assets/images/grad20.jpg";
import img21 from "../assets/images/grad21.jpg";
import img22 from "../assets/images/grad22.jpg";
import img23 from "../assets/images/grad23.jpg";
import img24 from "../assets/images/grad24.jpg";
import img25 from "../assets/images/grad25.jpg";
import img26 from "../assets/images/grad26.jpg";
import img27 from "../assets/images/grad27.jpg";
import img28 from "../assets/images/grad28.jpg";
import img29 from "../assets/images/grad29.jpg";
import img30 from "../assets/images/grad30.jpg";
import img31 from "../assets/images/grad31.jpg";
import img32 from "../assets/images/grad32.jpg";
import img33 from "../assets/images/grad33.jpg";
import img34 from "../assets/images/grad34.jpg";
import img35 from "../assets/images/grad35.jpg";
import img36 from "../assets/images/grad36.jpg";
import img37 from "../assets/images/grad37.jpg";
import img38 from "../assets/images/grad38.jpg";
import img39 from "../assets/images/grad39.jpg";
import img40 from "../assets/images/grad40.jpg";
import img41 from "../assets/images/grad41.jpg";
import img42 from "../assets/images/grad42.jpg";
import img43 from "../assets/images/grad43.jpg";
import img44 from "../assets/images/grad44.jpg";
import img45 from "../assets/images/grad45.jpg";
import img46 from "../assets/images/grad46.jpg";
import img47 from "../assets/images/grad47.jpg";
import img48 from "../assets/images/grad48.jpg";
import img49 from "../assets/images/grad49.jpg";
import img50 from "../assets/images/grad50.jpg";


// Base graduate data
const BASE_GRADUATES = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
  { id: 8, image: img8 },
  { id: 9, image: img9 },
  { id: 10, image: img10 },
  { id: 11, image: img11 },
  { id: 12, image: img12 },
  { id: 13, image: img13 },
  { id: 14, image: img14 },
  { id: 15, image: img15 },
  { id: 16, image: img16 },
  { id: 17, image: img17 },
  { id: 18, image: img18 },
  { id: 19, image: img19 },
  { id: 20, image: img20 },
  { id: 21, image: img21 },
  { id: 22, image: img22 },
  { id: 23, image: img23 },
  { id: 24, image: img24 },
  { id: 25, image: img25 },
  { id: 26, image: img26 },
  { id: 27, image: img27 },
  { id: 28, image: img28 },
  { id: 29, image: img29 },
  { id: 30, image: img30 },
  { id: 31, image: img31 },
  { id: 32, image: img32 },
  { id: 33, image: img33 },
  { id: 34, image: img34 },
  { id: 35, image: img35 },
  { id: 36, image: img36 },
  { id: 37, image: img37 },
  { id: 38, image: img38 },
  { id: 39, image: img39 },
  { id: 40, image: img40 },
  { id: 41, image: img41 },
  { id: 42, image: img42 },
  { id: 43, image: img43 },
  { id: 44, image: img44 },
  { id: 45, image: img45 },
  { id: 46, image: img46 },
  { id: 47, image: img47 },
  { id: 48, image: img48 },
  { id: 49, image: img49 },
  { id: 50, image: img50 },
];

const GraduateCard = ({ image, id, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <img
        src={image}
        alt={`Graduate ${id}`}
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-center space-x-2">
            <Medal className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium">Graduate #{id}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HallOfFameTitle = () => (
  <div className="relative py-12 text-center">
    <h1 className="text-4xl md:text-5xl font-bold flex items-center justify-center space-x-4">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
        Hall
      </span>
      <span>of</span>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
        Fame
      </span>
    </h1>
    <div className="mt-4 text-gray-600">
      Join our growing community of successful graduates
    </div>
  </div>
);

const LoadingSpinner = () => (
  <div className="flex items-center justify-center space-x-2">
    <Loader2 className="w-6 h-6 animate-spin text-amber-500" />
    <span className="text-gray-600">Loading more graduates...</span>
  </div>
);

const EndMessage = () => (
  <div className="text-center py-8">
    <p className="text-xl font-semibold text-gray-700">Ready to join our Hall of Fame?</p>
    <p className="text-gray-500 mt-2">Start your journey with us today!</p>
  </div>
);

const generateGraduates = (multiplier) => {
  return Array(multiplier)
    .fill()
    .flatMap((_, index) =>
      BASE_GRADUATES.map(grad => ({
        ...grad,
        id: grad.id + (index * BASE_GRADUATES.length)
      }))
    );
};

const Graduates = () => {
  const [displayedGraduates, setDisplayedGraduates] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);
  const pageRef = useRef(0);
  const itemsPerPage = 8; // Increased from 6 for better grid layout

  const loadMoreGraduates = () => {
    if (!hasMore || loading) return;
    
    setLoading(true);
    setTimeout(() => {
      const allGraduates = generateGraduates(10);
      const startIndex = pageRef.current * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const newGraduates = allGraduates.slice(startIndex, endIndex);

      if (endIndex >= allGraduates.length) {
        setHasMore(false);
      }

      setDisplayedGraduates(prev => [...prev, ...newGraduates]);
      pageRef.current += 1;
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    loadMoreGraduates();

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !loading) {
          loadMoreGraduates();
        }
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore, loading]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 select-none">
      <HallOfFameTitle />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {displayedGraduates.map((graduate, index) => (
          <GraduateCard
            key={graduate.id}
            {...graduate}
            index={index}
          />
        ))}
      </motion.div>
      
      <div 
        ref={loaderRef} 
        className="mt-8 text-center"
      >
        {loading && <LoadingSpinner />}
        {!hasMore && <EndMessage />}
      </div>
    </div>
  );
};

export default Graduates;
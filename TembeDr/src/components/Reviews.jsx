import { useState, memo, useCallback, useEffect } from 'react';
import { Star, StarHalf, Send, Award, Clock, X } from 'lucide-react';

const WHATSAPP_NUMBER = "+27633383254";

// Custom Alert Component
const CustomAlert = ({ message }) => (
  <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
    <span className="text-green-800">{message}</span>
  </div>
);

const Reviews = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [highlightedStars, setHighlightedStars] = useState(5);
  const [isHovering, setIsHovering] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');

  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    review: '',
    course: 'Learners',
  });

  const mockReviews = [
    {
      id: 1,
      name: "Thomas Motaung",
      rating: 5,
      course: "Code 8 Package",
      review: "Excellent instruction! Passed my test on the first try. The instructor was patient and professional.",
      date: "2024-02-15",
      verified: true
    },
    {
      id: 2,
      name: "Sbongile Khoza",
      rating: 4.5,
      course: "Learner's License",
      review: "Very comprehensive materials and great support throughout the learning process.",
      date: "2024-02-10",
      verified: true
    },
    {
      id: 3,
      name: "Sihle Mthembu",
      rating: 5,
      course: "Code 10 Package",
      review: "The best driving school in the area. They really know how to teach heavy vehicle operation.",
      date: "2024-02-05",
      verified: true
    },
    {
      id: 4,
      name: "Emma",
      rating: 4.5,
      course: "Code 14 Package",
      review: "Their expertise in heavy vehicles is unmatched. Great practical training sessions!",
      date: "2024-02-01",
      verified: true
    }
  ];

  const filteredReviews = mockReviews.filter(review => {
    const matchesSearch = review.review.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = selectedCourse === 'all' || review.course === selectedCourse;
    return matchesSearch && matchesCourse;
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `New Review Submission:\n\nName: ${formData.name}\nCourse: ${formData.course}\nRating: ${formData.rating} stars\nReview: ${formData.review}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    setFormVisible(false);
    setShowSuccessAlert(true);
    setFormData({ name: '', rating: 5, review: '', course: 'Learners' });
  }, [formData]);

  useEffect(() => {
    if (showSuccessAlert) {
      const timer = setTimeout(() => setShowSuccessAlert(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessAlert]);

  const averageRating = useMemo(() => {
    const total = mockReviews.reduce((acc, review) => acc + review.rating, 0);
    return (total / mockReviews.length).toFixed(1);
  }, [mockReviews]);

  const StarRating = memo(({ rating, interactive = false }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            onMouseEnter={() => interactive && setHighlightedStars(i + 1)}
            onClick={() => interactive && setFormData(prev => ({...prev, rating: i + 1}))}
            className={`transition-transform duration-200 ${interactive ? 'cursor-pointer hover:scale-110' : ''} 
              ${interactive && i < highlightedStars ? 'transform scale-110' : ''}`}
          >
            {i < fullStars ? (
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            ) : i === fullStars && hasHalfStar ? (
              <StarHalf className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            ) : (
              <Star className="w-5 h-5 text-gray-300" />
            )}
          </div>
        ))}
      </div>
    );
  });

  const ReviewCard = memo(({ review }) => (
    <div 
      className="bg-white rounded-lg shadow-xl overflow-hidden border border-yellow-500/30 p-6 
        transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
            {review.verified && (
              <Award className="w-4 h-4 text-yellow-500" title="Verified Review" />
            )}
          </div>
          <p className="text-sm text-yellow-600 flex items-center gap-2">
            {review.course}
            <Clock className="w-4 h-4" />
            <span className="text-gray-400">{new Date(review.date).toLocaleDateString()}</span>
          </p>
        </div>
        <StarRating rating={review.rating} />
      </div>
      
      <p className="text-gray-600">{review.review}</p>
    </div>
  ));

  return (
    <div className="bg-gray-50 min-h-screen pb-24 select-none">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section with Stats */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Student Reviews
            <span className="text-lg ml-4 text-gray-600">
              Average Rating: {averageRating} ⭐
            </span>
          </h2>
          
          {/* Search and Filter */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search reviews..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="all">All Courses</option>
              <option value="Learner's License">Learner's License</option>
              <option value="Code 8 Package">Code 8 Package</option>
              <option value="Code 10 Package">Code 10 Package</option>
              <option value="Code 14 Package">Code 14 Package</option>
            </select>
          </div>
        </div>

        {/* Custom Success Alert */}
        {showSuccessAlert && (
          <CustomAlert message="Thank you for your review! It has been submitted successfully." />
        )}

        {/* Reviews Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.length > 0 ? (
            filteredReviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-gray-500">
              No reviews found matching your criteria.
            </div>
          )}
        </div>

        {/* Floating Action Button */}
        <button
          onClick={() => setFormVisible(!formVisible)}
          className="fixed bottom-8 right-8 bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110"
          title="Write a Review"
        >
          <Send className="w-6 h-6" />
        </button>

        {/* Review Form Modal */}
        {formVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-2xl border border-yellow-500/30 p-6 max-w-2xl w-full max-h-screen overflow-y-auto md:max-h-[90vh]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Share Your Experience</h2>
                <button
                  onClick={() => setFormVisible(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Course</label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    value={formData.course}
                    onChange={(e) => setFormData(prev => ({...prev, course: e.target.value}))}
                  >
                    <option value="Learners">Learner's License</option>
                    <option value="Code 8">Code 8 Package</option>
                    <option value="Code 10">Code 10 Package</option>
                    <option value="Code 14">Code 14 Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Rating</label>
                  <div 
                    className="mb-4"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <StarRating rating={isHovering ? highlightedStars : formData.rating} interactive />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Review</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    value={formData.review}
                    onChange={(e) => setFormData(prev => ({...prev, review: e.target.value}))}
                    placeholder="Share your experience with the course..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-green-400 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormVisible(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
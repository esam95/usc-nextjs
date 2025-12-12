'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const GoogleReviewsWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [placeData, setPlaceData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // CONFIGURATION - Replace these with your actual values
  const GOOGLE_API_KEY = 'YOUR_API_KEY_HERE'; // Get from Google Cloud Console
  const PLACE_ID = 'YOUR_PLACE_ID_HERE'; // Your business Place ID

  useEffect(() => {
    fetchGoogleReviews();
  }, []);

  const fetchGoogleReviews = async () => {
    try {
      setLoading(true);
      
      // Using Google Places API - Place Details endpoint
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews&key=${GOOGLE_API_KEY}`,
        {
          method: 'GET',
        }
      );

      const data = await response.json();

      if (data.status === 'OK' && data.result) {
        setPlaceData({
          name: data.result.name,
          rating: data.result.rating,
          totalReviews: data.result.user_ratings_total,
        });

        // Format reviews for display
        const formattedReviews = data.result.reviews?.map((review: any, index: any) => ({
          id: index,
          name: review.author_name,
          date: review.relative_time_description,
          rating: review.rating,
          text: review.text,
          avatar: review.profile_photo_url,
          initial: review.author_name.charAt(0).toUpperCase(),
        })) || [];

        setReviews(formattedReviews);
      } else {
        setError('Failed to fetch reviews: ' + data.status);
      }
    } catch (err: any) {
      setError('Error fetching reviews: ' + err.message);
    } finally {
      setLoading(false);
    }
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, reviews.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, reviews.length - 2)) % Math.max(1, reviews.length - 2));
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 1);

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading reviews...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-gray-50">
        <div className="text-center text-red-600">
          <p className="font-semibold">Error loading reviews</p>
          <p className="text-sm mt-2">{error}</p>
          <p className="text-xs mt-4 text-gray-500">
            Make sure you've added your API Key and Place ID in the component
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full mx-auto p-2 rounded-lg shadow-sm bg-gray-900/50 backdrop-blur-sm">
      
      <div className="flex flex-col items-center gap-4">
        {/* Google Rating Badge */}
        <div className="flex flex-col items-center p-2">
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="text-sm text-gray-600 mb-1">
            Based on 100000 reviews
          </div>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
            alt="Google" 
            className="h-8"
          />
        </div>
        
        <div className="flex items-center justify-center gap-2">
            {/* Navigation Button - Left */}
            <button
            onClick={prevSlide}
            className="p-2 rounded-full shadow-md g-white text-gray-800 shadow-lg hover:bg-gray-100"
            aria-label="Previous reviews"
            >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Reviews Slider */}
            <div className="flex gap-4 overflow-hidden flex-1 max-w-4xl ">
            {visibleReviews.map((review: any) => (
                <div
                key={review.id}
                className="p-2 rounded-lg min-w-[300px] flex-1 bg-gray-800 shadow-lg shadow-black/25 border border-gray-700/50"
                >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg bg-blue-600 text-white">
                    {review.initial}
                    </div>
                    <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>

                {/* Review Text */}
                {/* <p className="text-gray-700 text-sm mb-3">{review.text}</p>
                <button className="text-blue-600 text-sm hover:underline">
                    Read more
                </button> */}
                </div>
            ))}
            </div>

            {/* Navigation Button - Right */}
            <button
            onClick={nextSlide}
            className="p-2 rounded-full shadow-md g-white text-gray-800 shadow-lg hover:bg-gray-100"
            aria-label="Next reviews"
            >
            <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewsWidget;
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa6';


const ReviewCard = ({ review }) => {
    const { user_email, userName, photo, rating, message } = review;
    return (
        <div>
            <div className="max-w-md mx-auto">
                <div className="card bg-base-100 shadow-lg rounded-2xl p-6">
                    <div className="relative">
                        {/* Quote icon */}
                        <div className="absolute -top-4 left-4 bg-white p-2 rounded-full shadow-sm">
                            <FaQuoteLeft className="text-2xl text-sky-500" />
                        </div>


                        {/* Card content */}
                        <div className="pt-6">
                            <p className="text-sm text-gray-600 leading-relaxed"></p>


                            {/* dotted divider */}
                            <div className="mt-6 mb-4 border-t border-dashed border-gray-200" />


                            <div className="flex items-center gap-4">
                                <div className="avatar">
                                    <div className="w-12 h-12 rounded-full ring-2 ring-sky-600 overflow-hidden">
                                        <img src='' alt={`${name} avatar`} />
                                    </div>
                                </div>


                                <div>
                                    <div className="text-sm font-semibold text-gray-800">{name}</div>
                                    <div className="text-xs text-gray-500">{userName}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
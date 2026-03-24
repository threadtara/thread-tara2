'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
        // Auto-hide success message after 3 seconds
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        const data = await response.json();
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setSubmitStatus('error');
      }
    } catch (error) {
      setErrorMsg('Network error. Please check your connection and try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-fabric-cream py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Main Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
            {/* Header */}
            <div className="mb-8 sm:mb-10 text-center">
              <h1 className="font-heading text-6xl text-fabric-dark my-4 mb-2 sm:mb-3">
                Contact Us
              </h1>
              <p className="text-base sm:text-lg text-gray-600 font-serif">
                We'd love to hear from you!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400 text-gray-900 font-medium text-sm transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400 text-gray-900 font-medium text-sm transition-all"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400 text-gray-900 font-medium text-sm transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Leave us a message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400 text-gray-900 text-sm resize-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-full hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-300 text-green-800 px-3 sm:px-4 py-3 rounded-lg animate-fadeIn flex items-center gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-300 text-red-800 px-3 sm:px-4 py-3 rounded-lg animate-fadeIn flex items-center gap-2 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMsg || 'Something went wrong. Please try again.'}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

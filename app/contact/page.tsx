'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [wordCount, setWordCount] = useState(0);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const count = words.length;
    
    if (count <= 2000) {
      setFormData({ ...formData, message: text });
      setWordCount(count);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

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
        setFormData({ subject: '', message: '', email: '' });
        setWordCount(0);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F2C47] mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Subject <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent transition-all outline-none"
                placeholder="Enter the subject of your message"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={10}
                value={formData.message}
                onChange={handleMessageChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent transition-all outline-none resize-y"
                placeholder="Enter your message (maximum 2000 words)"
              />
              <p className={`text-sm mt-2 ${wordCount > 1900 ? 'text-red-600' : 'text-gray-500'}`}>
                {wordCount} / 2000 words
              </p>
            </div>

            {/* Email (Optional) */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Email (Optional)
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent transition-all outline-none"
                placeholder="your.email@example.com"
              />
              <div className="mt-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Privacy Notice:</strong> There is no newsletter or automatic emails. 
                  You are not signing up for anything. Your information will not be sold, shared, 
                  or otherwise given to anyone.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting || wordCount === 0}
                className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all shadow-lg ${
                  isSubmitting || wordCount === 0
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#C41E3A] hover:bg-[#9B1829] text-white transform hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">
                  ✓ Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-semibold">
                  ✗ There was an error sending your message. Please try again later.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

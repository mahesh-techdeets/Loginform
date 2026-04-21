import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showShareModal, setShowShareModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    setTimeout(() => {
      setIsLoading(false);
      setMessage('Login successful! 🎉');
      console.log('Login Data:', formData);
    }, 1500);
  };


const shareUrl = `${window.location.origin}${window.location.pathname}`;

  // Share Functions
  const shareToWhatsApp = () => {
    const text = `Check out this Login Form:\n${shareUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    setShowShareModal(false);
  };

  const shareToEmail = () => {
    const subject = "Login Form - Please Check";
    const body = `Here's the login form link:\n\n${shareUrl}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setShowShareModal(false);
  };

  const shareToInstagram = () => {
    alert("Instagram doesn't support direct link sharing via web. Link has been copied to clipboard.\n\nYou can paste it in Instagram stories or DM.");
    navigator.clipboard.writeText(shareUrl);
    setShowShareModal(false);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('✅ Link copied to clipboard!');
    });
    setShowShareModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white text-center">
          <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
          <p className="text-indigo-100">Sign in to continue</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-indigo-600" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-indigo-600 hover:underline font-medium">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg hover:brightness-110 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {message && (
            <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-2xl text-center font-medium">
              {message}
            </div>
          )}
        </div>

        <div className="border-t border-gray-100 p-6 text-center">
          <p className="text-gray-500 text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-indigo-600 font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>

        <div className="px-8 pb-8">
          <button
            onClick={() => setShowShareModal(true)}
            className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-2xl font-medium transition-all active:scale-95"
          >
            <span className="text-2xl">🔗</span>
            Share this Login Form
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">
            Open on any device - Mobile or Web
          </p>
        </div>
      </div>

      {showShareModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-center mb-6">Share Login Form</h3>

              <div className="grid grid-cols-2 gap-4">
                {/* WhatsApp */}
                <button
                  onClick={shareToWhatsApp}
                  className="flex flex-col items-center gap-3 py-6 bg-green-50 hover:bg-green-100 rounded-2xl transition-all active:scale-95"
                >
                  <span className="text-5xl">💬</span>
                  <span className="font-medium text-green-700">WhatsApp</span>
                </button>

                {/* Email */}
                <button
                  onClick={shareToEmail}
                  className="flex flex-col items-center gap-3 py-6 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-all active:scale-95"
                >
                  <span className="text-5xl">✉️</span>
                  <span className="font-medium text-blue-700">Email</span>
                </button>

                {/* Instagram */}
                <button
                  onClick={shareToInstagram}
                  className="flex flex-col items-center gap-3 py-6 bg-pink-50 hover:bg-pink-100 rounded-2xl transition-all active:scale-95"
                >
                  <span className="text-5xl">📸</span>
                  <span className="font-medium text-pink-700">Instagram</span>
                </button>

                <button
                  onClick={copyLink}
                  className="flex flex-col items-center gap-3 py-6 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all active:scale-95"
                >
                  <span className="text-5xl">🔗</span>
                  <span className="font-medium text-gray-700">Copy Link</span>
                </button>
              </div>
            </div>

            <div className="border-t p-4">
              <button
                onClick={() => setShowShareModal(false)}
                className="w-full py-4 text-gray-500 font-medium hover:bg-gray-100 rounded-2xl transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
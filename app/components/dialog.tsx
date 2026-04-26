'use client';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Dialog({ isOpen, onClose }: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/75">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">🚧 Under Construction</h2>
        <p className="text-gray-600 text-center mb-6">
          This section is currently being built. Check back soon for updates!
        </p>
        <button
          onClick={onClose}
          className="w-full cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
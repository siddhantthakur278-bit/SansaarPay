import React from 'react';
import { ArrowLeft, QrCode, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QRScannerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="p-4 flex items-center justify-between bg-black border-b border-gray-800">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Scan QR Code</h1>
        <div className="w-10" />
      </div>

      {/* Scanner Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-64 h-64 border-4 border-white rounded-2xl relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <QrCode className="w-16 h-16 text-gray-400" />
          </div>
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white" />
        </div>

        <p className="text-gray-400 text-center mb-6">
          Point your camera at a QR code to scan it
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
          <Camera className="w-5 h-5 mr-2 inline" />
          Open Camera
        </button>

        <button className="mt-4 text-blue-400 hover:text-blue-300 transition-colors">
          Upload QR Code
        </button>
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-900 text-center">
        <p className="text-sm text-gray-400">
          Scan any UPI QR code to make payments
        </p>
      </div>
    </div>
  );
};

export default QRScannerPage;
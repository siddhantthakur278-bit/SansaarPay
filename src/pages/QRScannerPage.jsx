import React from 'react';
import { ArrowLeft, QrCode, Camera, Image as ImageIcon, Flashlight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QRScannerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="app-shell" style={{ background: '#000' }}>
      {/* Header */}
      <div style={{
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(10px)',
        padding: '14px 16px',
        display: 'flex', alignItems: 'center', gap: '12px',
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10
      }}>
        <button
          onClick={() => navigate('/home')}
          style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            border: '1.5px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
          }}
        >
          <ArrowLeft style={{ width: 18, height: 18, color: '#fff' }} />
        </button>
        <h1 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', flex: 1 }}>Scan QR Code</h1>
      </div>

      {/* Scanner Content */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        position: 'relative'
      }}>
        {/* Animated Scanner Frame */}
        <div style={{
          width: 260, height: 260, position: 'relative',
          border: '2px solid rgba(255,255,255,0.2)',
          borderRadius: '32px',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          {/* Corner accents */}
          <div style={{ position: 'absolute', top: -2, left: -2, width: 40, height: 40, borderTop: '4px solid #fff', borderLeft: '4px solid #fff', borderTopLeftRadius: '32px' }} />
          <div style={{ position: 'absolute', top: -2, right: -2, width: 40, height: 40, borderTop: '4px solid #fff', borderRight: '4px solid #fff', borderTopRightRadius: '32px' }} />
          <div style={{ position: 'absolute', bottom: -2, left: -2, width: 40, height: 40, borderBottom: '4px solid #fff', borderLeft: '4px solid #fff', borderBottomLeftRadius: '32px' }} />
          <div style={{ position: 'absolute', bottom: -2, right: -2, width: 40, height: 40, borderBottom: '4px solid #fff', borderRight: '4px solid #fff', borderBottomRightRadius: '32px' }} />

          {/* Animated line */}
          <div className="scan-line" />

          <QrCode style={{ width: 64, height: 64, color: 'rgba(255,255,255,0.1)' }} />
        </div>

        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginTop: '32px', textAlign: 'center', padding: '0 40px' }}>
          Align the QR code within the frame to scan it automatically
        </p>

        {/* Controls */}
        <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
          <button style={{
            width: 56, height: 56, borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            border: '1.5px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
          }}>
            <Flashlight style={{ width: 20, height: 20, color: '#fff' }} />
          </button>
          <button style={{
            width: 56, height: 56, borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            border: '1.5px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
          }}>
            <ImageIcon style={{ width: 20, height: 20, color: '#fff' }} />
          </button>
        </div>
      </div>

      {/* Footer Instructions */}
      <div style={{
        padding: '24px 16px',
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
          <div style={{ width: 24, height: 24, borderRadius: '4px', background: 'linear-gradient(135deg,#0277bd,#039be5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontSize: '0.6rem', fontWeight: 800 }}>BHIM</span>
          </div>
          <span style={{ color: '#fff', fontSize: '0.8125rem', fontWeight: 600 }}>Accepts all UPI Apps</span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>Scan any QR code for secure payments</p>
      </div>

      {/* Custom Styles for Animation */}
      <style>{`
        @keyframes scan {
          0% { top: 5%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 90%; opacity: 0; }
        }
        .scan-line {
          position: absolute;
          left: 10%;
          right: 10%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #2196f3, #fff, #2196f3, transparent);
          box-shadow: 0 0 15px #2196f3;
          border-radius: 50%;
          animation: scan 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default QRScannerPage;

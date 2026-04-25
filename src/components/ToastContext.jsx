import React, { createContext, useContext, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

const ToastContext = createContext(null);

const ICONS = {
  success: <CheckCircle className="w-4 h-4 text-white" />,
  error:   <XCircle    className="w-4 h-4 text-white" />,
  info:    <Info       className="w-4 h-4 text-white" />,
};

const BG = {
  success: 'linear-gradient(135deg,#00897b,#00acc1)',
  error:   'linear-gradient(135deg,#e53935,#ef5350)',
  info:    'linear-gradient(135deg,#1a237e,#3949ab)',
};

function Toast({ id, message, type, onDismiss }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: BG[type] || BG.info,
        color: '#fff',
        padding: '11px 16px',
        borderRadius: '14px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
        marginBottom: '8px',
        minWidth: '240px',
        maxWidth: '320px',
        fontSize: '0.8125rem',
        fontWeight: '500',
        fontFamily: "'Inter', sans-serif",
        animation: 'sp-toast-in 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        letterSpacing: '0.01em',
        lineHeight: 1.4,
      }}
    >
      {ICONS[type] || ICONS.info}
      <span style={{ flex: 1 }}>{message}</span>
      <button
        onClick={() => onDismiss(id)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', opacity: 0.75, padding: '2px', display: 'flex' }}
      >
        <X style={{ width: 14, height: 14 }} />
      </button>
    </div>
  );
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3200);
  }, []);

  const dismiss = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {createPortal(
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '16px',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          pointerEvents: 'none',
        }}>
          <style>{`
            @keyframes sp-toast-in {
              from { opacity: 0; transform: translateX(48px) scale(0.90); }
              to   { opacity: 1; transform: translateX(0) scale(1); }
            }
          `}</style>
          {toasts.map(t => (
            <div key={t.id} style={{ pointerEvents: 'auto' }}>
              <Toast id={t.id} message={t.message} type={t.type} onDismiss={dismiss} />
            </div>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}

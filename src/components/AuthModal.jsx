import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Mail, Lock, User, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AuthModal = ({ isOpen, onClose }) => {
  const { loginWithGoogle, loginWithEmail, registerWithEmail, resetPassword } = useAuth();
  
  const [mode, setMode] = useState('login'); // 'login' | 'register' | 'forgot'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const getHebrewErrorMessage = (err) => {
    const errorCode = err?.code || '';
    console.error('Firebase Auth Error:', err);

    switch (errorCode) {
      case 'auth/invalid-credential':
      case 'auth/wrong-password':
        return 'כתובת אימייל או סיסמה שגויים. אם זו הפעם הראשונה שלך, עבור ללשונית "הירשם בחינם" כדי ליצור חשבון.';
      case 'auth/user-not-found':
        return 'חשבון זה עדיין אינו קיים במערכת. לחץ למטה על "הירשם בחינם" כדי ליצור סיסמה.';
      case 'auth/operation-not-allowed':
        return 'שיטת התחברות זו אינה מופעלת עדיין ב-Firebase Console. ודא שהפעלת את Email/Password או Google ב-Sign-in method.';
      case 'auth/unauthorized-domain':
        return 'דומיין זה טרם אושר ב-Firebase Console (יש להוסיף את הדומיין ב-Authentication > Settings > Authorized Domains).';
      case 'auth/popup-blocked':
        return 'חלון ההתחברות נחסם על ידי הדפדפן. אנא אשר חלונות קופצים (Pop-ups) עבור אתר זה.';
      case 'auth/email-already-in-use':
        return 'כתובת אימייל זו כבר רשומה במערכת. נסה להתחבר או אפס סיסמה.';
      case 'auth/weak-password':
        return 'הסיסמה צריכה להכיל לפחות 6 תווים.';
      case 'auth/invalid-email':
        return 'כתובת אימייל לא תקינה.';
      case 'auth/popup-closed-by-user':
        return 'ההתחברות בוטלה (החלון נסגר לפני סיום).';
      case 'auth/network-request-failed':
        return 'שגיאת תקשורת, בדוק את החיבור לרשת ונסה שוב.';
      default:
        return `אירעה שגיאה בעת ההתחברות: ${err?.message || errorCode} (${errorCode || 'general-error'})`;
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setIsLoading(true);
    try {
      await loginWithGoogle();
      onClose();
    } catch (err) {
      setError(getHebrewErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setIsLoading(true);

    try {
      if (mode === 'login') {
        await loginWithEmail(email, password);
        onClose();
      } else if (mode === 'register') {
        if (!email || !password) {
          setError('נא למלא את כל השדות');
          setIsLoading(false);
          return;
        }
        await registerWithEmail(email, password, displayName);
        onClose();
      } else if (mode === 'forgot') {
        if (!email) {
          setError('נא להזין כתובת אימייל לשחזור');
          setIsLoading(false);
          return;
        }
        await resetPassword(email);
        setSuccessMsg('קישור לאיפוס סיסמה נשלח לתיבת המייל שלך!');
      }
    } catch (err) {
      setError(getHebrewErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return typeof document !== 'undefined' ? createPortal(
    <div 
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
      dir="rtl"
    >
      <div 
        className="relative max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-cream-200 overflow-hidden text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-cream-100 hover:bg-cream-200 text-charcoal flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-charcoal">
              {mode === 'login' && 'התחברות לאפליקציה'}
              {mode === 'register' && 'יצירת חשבון תרגול חדש'}
              {mode === 'forgot' && 'איפוס סיסמה'}
            </h2>
            <p className="text-xs text-charcoal-muted mt-0.5">
              שמור תנוחות מועדפות, רצפים אישיים וסנכרן בין מכשירים
            </p>
          </div>
        </div>

        {/* Google 1-Click Button */}
        {mode !== 'forgot' && (
          <>
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-2xl border border-cream-300 bg-white hover:bg-cream-50 text-charcoal font-semibold text-sm flex items-center justify-center gap-3 shadow-sm hover:shadow transition-all disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>התחבר באמצעות Google</span>
            </button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-cream-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-charcoal-muted">או באמצעות כתובת אימייל</span>
              </div>
            </div>
          </>
        )}

        {/* Alert Messages */}
        {error && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === 'register' && (
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1">
                שם מלא / כינוי
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="למשל: יוסף"
                  className="w-full px-3.5 py-2.5 pr-10 rounded-xl border border-cream-300 bg-cream-50/50 text-charcoal text-sm focus:outline-none focus:border-terracotta focus:bg-white transition-all text-right"
                />
                <User className="w-4 h-4 text-charcoal-muted absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              כתובת אימייל
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                dir="ltr"
                className="w-full px-3.5 py-2.5 pr-10 rounded-xl border border-cream-300 bg-cream-50/50 text-charcoal text-sm focus:outline-none focus:border-terracotta focus:bg-white transition-all text-left"
              />
              <Mail className="w-4 h-4 text-charcoal-muted absolute right-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {mode !== 'forgot' && (
            <div>
              <div className="flex items-center justify-between mb-1">
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => { setMode('forgot'); setError(''); setSuccessMsg(''); }}
                    className="text-[11px] text-terracotta hover:underline font-medium"
                  >
                    שכחת סיסמה?
                  </button>
                )}
                <label className="block text-xs font-semibold text-charcoal">
                  סיסמה
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  dir="ltr"
                  className="w-full px-3.5 py-2.5 pr-10 rounded-xl border border-cream-300 bg-cream-50/50 text-charcoal text-sm focus:outline-none focus:border-terracotta focus:bg-white transition-all text-left"
                />
                <Lock className="w-4 h-4 text-charcoal-muted absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-2xl bg-terracotta hover:bg-terracotta-dark text-white font-bold text-sm shadow-md shadow-terracotta/25 hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
          >
            {isLoading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : (
              <>
                <span>
                  {mode === 'login' && 'התחבר עכשיו'}
                  {mode === 'register' && 'צור חשבון והתחל לתרגל'}
                  {mode === 'forgot' && 'שלח קישור לאיפוס סיסמה'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Footer Mode Switchers */}
        <div className="mt-5 pt-4 border-t border-cream-200 text-center text-xs text-charcoal-muted">
          {mode === 'login' && (
            <p>
              עדיין אין לך חשבון?{' '}
              <button
                onClick={() => { setMode('register'); setError(''); setSuccessMsg(''); }}
                className="text-terracotta font-bold hover:underline"
              >
                הירשם בחינם
              </button>
            </p>
          )}

          {mode === 'register' && (
            <p>
              כבר יש לך חשבון?{' '}
              <button
                onClick={() => { setMode('login'); setError(''); setSuccessMsg(''); }}
                className="text-terracotta font-bold hover:underline"
              >
                התחבר כאן
              </button>
            </p>
          )}

          {mode === 'forgot' && (
            <p>
              נזכרת בסיסמה?{' '}
              <button
                onClick={() => { setMode('login'); setError(''); setSuccessMsg(''); }}
                className="text-terracotta font-bold hover:underline"
              >
                חזור להתחברות
              </button>
            </p>
          )}
        </div>
      </div>
    </div>,
    document.body
  ) : null;
};

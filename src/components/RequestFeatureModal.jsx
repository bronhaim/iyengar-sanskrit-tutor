import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Send, CheckCircle2, MessageSquarePlus, Sparkles, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db, collection, addDoc } from '../services/firebase';

const RECIPIENT_EMAIL = 'y.bronheim@f5.com';

export const RequestFeatureModal = ({ isOpen, onClose }) => {
  const { currentUser } = useAuth();

  const [requestType, setRequestType] = useState('pose'); // 'pose' | 'feature' | 'sequence' | 'other'
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const typeOptions = [
    { id: 'pose', label: 'תנוחת יוגה חדשה', emoji: '🧘' },
    { id: 'feature', label: 'פיצ׳ר או שיפור באתר', emoji: '💡' },
    { id: 'sequence', label: 'רצף תרגול חדש', emoji: '📋' },
    { id: 'other', label: 'משוב / אחר', emoji: '💬' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMsg('נא להזין כותרת או שם תנוחה');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    const userEmail = currentUser?.email || 'לא צוין';
    const userName = currentUser?.displayName || userEmail.split('@')[0] || 'מתרגל רשום';
    const selectedTypeObj = typeOptions.find(t => t.id === requestType);
    const typeLabel = selectedTypeObj ? `${selectedTypeObj.emoji} ${selectedTypeObj.label}` : requestType;

    try {
      // 1. Save request in Firestore feature_requests collection
      if (db) {
        try {
          await addDoc(collection(db, 'feature_requests'), {
            userId: currentUser?.uid || 'anonymous',
            userEmail,
            userName,
            requestType,
            typeLabel,
            title: title.trim(),
            details: details.trim(),
            status: 'new',
            createdAt: new Date().toISOString()
          });
        } catch (dbErr) {
          console.warn('Could not store in Firestore, continuing to mail client:', dbErr);
        }
      }

      // 2. Open mailto client with pre-filled content to y.bronheim@f5.com
      const mailSubject = encodeURIComponent(`[יוגה איינגר] בקשת ${typeLabel}: ${title.trim()}`);
      const mailBody = encodeURIComponent(
        `שלום יניב,\n\nנשלחה בקשה חדשה מאת ${userName} (${userEmail}):\n\n` +
        `סוג הפנייה: ${typeLabel}\n` +
        `נושא / תנוחה: ${title.trim()}\n\n` +
        `פירוט הבקשה:\n${details.trim() || 'אין פירוט נוסף'}\n\n` +
        `תאריך ושעה: ${new Date().toLocaleString('he-IL')}\n`
      );

      // Trigger mailto link
      window.open(`mailto:${RECIPIENT_EMAIL}?subject=${mailSubject}&body=${mailBody}`, '_blank');

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setTitle('');
        setDetails('');
        onClose();
      }, 3000);
    } catch (err) {
      console.error('Error submitting request:', err);
      setErrorMsg('אירעה שגיאה בשליחה. נסה שוב.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setErrorMsg('');
    setIsSuccess(false);
    onClose();
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn"
      dir="rtl"
    >
      <div 
        className="absolute inset-0" 
        onClick={handleClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-[#E5D9C8] shadow-2xl overflow-hidden z-10 animate-fadeIn text-right">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#E5D9C8] flex items-center justify-between bg-cream-50/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-terracotta-light text-terracotta flex items-center justify-center shadow-xs">
              <MessageSquarePlus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-charcoal">בקשת תנוחה או פיצ׳ר חדש</h3>
              <p className="text-[11px] text-charcoal-muted">הבקשה תועבר ישירות ליניב לעבודה ושדרוג האתר</p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white border border-[#E5D9C8] hover:bg-cream-100 flex items-center justify-center text-charcoal-muted hover:text-charcoal transition-colors cursor-pointer"
            title="סגור"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl shadow-xs animate-bounceShort">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-charcoal">הבקשה נשלחה בהצלחה!</h4>
            <p className="text-sm text-charcoal-muted max-w-xs mx-auto leading-relaxed">
              הפרטים נשמרו במערכת ונפתחה הודעת אימייל מיועדת ליניב ({RECIPIENT_EMAIL}). תודה על עזרתך בשיפור האתר!
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 rounded-full bg-terracotta hover:bg-terracotta-dark text-white font-bold text-xs shadow-xs transition-all"
            >
              סגור
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            {/* User identification badge */}
            <div className="bg-cream-50/90 border border-[#E5D9C8] rounded-2xl p-3 flex items-center justify-between text-xs">
              <span className="text-charcoal-muted">שולח הבקשה:</span>
              <div className="font-bold text-charcoal flex items-center gap-1.5">
                <span>{currentUser?.displayName || 'מתרגל רשום'}</span>
                <span className="text-[11px] text-charcoal-muted font-normal">({currentUser?.email})</span>
              </div>
            </div>

            {/* Request Type Selector */}
            <div>
              <label className="block text-xs font-bold text-charcoal mb-2">
                מה תרצה להציע או לבקש?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {typeOptions.map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setRequestType(opt.id)}
                    className={`p-2.5 rounded-xl border text-right text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                      requestType === opt.id
                        ? 'bg-cream-100 border-terracotta text-charcoal shadow-xs'
                        : 'bg-white border-[#E5D9C8] text-charcoal-muted hover:border-cream-300'
                    }`}
                  >
                    <span className="text-base">{opt.emoji}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Title / Pose Name Input */}
            <div>
              <label htmlFor="req-title" className="block text-xs font-bold text-charcoal mb-1.5">
                {requestType === 'pose' 
                  ? 'שם התנוחה (בעברית או בסנסקריט):' 
                  : requestType === 'sequence' 
                    ? 'שם רצף התרגול המבוקש:' 
                    : 'כותרת הרעיון או הפיצ׳ר:'}
                <span className="text-rose-500 mr-1">*</span>
              </label>
              <input
                id="req-title"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={
                  requestType === 'pose' 
                    ? 'לדוגמה: שירשאסאנה עם כיסא, קרנדוואסאנה...' 
                    : requestType === 'sequence'
                      ? 'לדוגמה: רצף לפתיחת בית חזה לנשימה עמוקה...'
                      : 'לדוגמה: מצב כהה (Dark Mode), טיימר קולי לשהייה...'
                }
                className="w-full px-4 py-2.5 rounded-xl border border-[#E5D9C8] bg-cream-50/50 text-charcoal text-sm focus:outline-none focus:border-terracotta focus:bg-white transition-colors"
              />
            </div>

            {/* Details Textarea */}
            <div>
              <label htmlFor="req-details" className="block text-xs font-bold text-charcoal mb-1.5">
                פירוט והסבר (אופציונלי):
              </label>
              <textarea
                id="req-details"
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="ספר קצת על הבקשה, למה כדאי להוסיף אותה, איך תרצה שזה יעבוד, או טיפים לביצוע..."
                className="w-full px-4 py-2.5 rounded-xl border border-[#E5D9C8] bg-cream-50/50 text-charcoal text-sm focus:outline-none focus:border-terracotta focus:bg-white transition-colors resize-none"
              />
            </div>

            {errorMsg && (
              <div className="flex items-center gap-1.5 text-xs text-rose-600 bg-rose-50 p-2.5 rounded-xl border border-rose-200">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Submit & Cancel Buttons */}
            <div className="pt-2 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2.5 rounded-xl border border-[#E5D9C8] hover:bg-cream-100 text-charcoal text-xs font-semibold transition-all cursor-pointer"
              >
                ביטול
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl bg-terracotta hover:bg-terracotta-dark disabled:opacity-50 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'שולח...' : 'שליחת בקשה'}</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>,
    document.body
  );
};

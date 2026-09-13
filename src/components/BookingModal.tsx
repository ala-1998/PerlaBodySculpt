import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Video, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Lock,
  ArrowRight,
  MessageCircle,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';
import { Language, ConsultationFormData } from '../types';
import { translations } from '../data/translations';
import { proceduresData } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  preselectedProcedure?: string;
  clinicPhone?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  preselectedProcedure = '',
  clinicPhone = '21626723876'
}) => {
  const t = (key: string) => translations[key]?.[currentLang] || key;

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    procedure: preselectedProcedure || proceduresData[0].titleKey,
    consultationType: 'clinic',
    preferredDate: '',
    preferredTime: '17:00 - 17:45',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedProcedure) {
      setFormData((prev) => ({ ...prev, procedure: preselectedProcedure }));
    }
  }, [preselectedProcedure]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Formate le message générique structuré avec toutes les données saisies par le patient
  const generateWhatsAppMessage = (data: ConsultationFormData, ref: string): string => {
    const typeLabel = data.consultationType === 'clinic' 
      ? 'Au cabinet (Les Berges du Lac 2, Tunis)' 
      : 'Téléconsultation à distance (Visio)';

    const dateStr = data.preferredDate ? data.preferredDate : 'Dès que possible';
    const notesStr = data.message?.trim() ? data.message.trim() : 'Aucune remarque particulière.';

    if (currentLang === 'ar') {
      return `✨ *طلب استشارة طبية - عيادة بيرلا* ✨
الدكتور طاهر جمال • ضفاف البحيرة 2، تونس

📋 *رقم الملف المرجعي :* ${ref}
👤 *اسم المريض(ة) :* ${data.fullName}
📞 *رقم الهاتف / واتساب :* ${data.phone}
📧 *البريد الإلكتروني :* ${data.email}
🏥 *العملية المطلوبة :* ${data.procedure}
📍 *نوع الاستشارة :* ${typeLabel}
📅 *التاريخ المفضل :* ${dateStr}
⏰ *التوقيت المفضل :* ${data.preferredTime}

💬 *ملاحظات واستفسار المريض :*
"${notesStr}"

---
_تم إرسال هذا الطلب عبر الموقع الرسمي Perla Body Sculpt_`;
    }

    return `✨ *NOUVELLE DEMANDE DE CONSULTATION* ✨
*Perla Body Sculpt • Consultation Privée*
Les Berges du Lac 2, Tunis

📋 *Réf. Dossier :* ${ref}
👤 *Patient(e) :* ${data.fullName}
📞 *Téléphone :* ${data.phone}
📧 *Email :* ${data.email}
🏥 *Intervention :* ${data.procedure}
📍 *Format :* ${typeLabel}
📅 *Date souhaitée :* ${dateStr}
⏰ *Créneau horaire :* ${data.preferredTime}

💬 *Message / Remarques :*
"${notesStr}"

---
_Demande transmise via le formulaire officiel de perlabodysculpt.com_`;
  };

  const currentWhatsAppMessage = generateWhatsAppMessage(formData, referenceId);
  const whatsappUrl = `https://wa.me/${clinicPhone}?text=${encodeURIComponent(currentWhatsAppMessage)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `PRL-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setIsSubmitted(true);

    // Envoi automatique vers WhatsApp avec toutes les données remplies
    const message = generateWhatsAppMessage(formData, ref);
    const targetUrl = `https://wa.me/${clinicPhone}?text=${encodeURIComponent(message)}`;
    try {
      window.open(targetUrl, '_blank');
    } catch (err) {
      console.warn('Popup blocked, available via button', err);
    }
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(currentWhatsAppMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div 
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#2D0C13]/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div 
        id="booking-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-[2.5rem] bg-white border border-[#D8C4BA]/50 shadow-2xl overflow-hidden text-[#43141C]"
      >
        {/* Modal Top Header */}
        <div className="bg-[#2D0C13] text-[#FAF4F0] p-6 sm:p-8 flex items-start justify-between border-b border-[#D8C4BA]/30">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#D8C4BA] font-bold">
              <ShieldCheck size={14} className="text-[#C9A6A5]" />
              <span>Perla Body Sculpt · Dr. Taher Jamel · Tunis</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold mt-1 text-white">
              {t('booking_modal_title')}
            </h2>
            <p className="text-xs text-[#FAF4F0]/80 mt-1">
              {t('booking_modal_sub')}
            </p>
          </div>

          <button
            id="close-booking-modal-btn"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-xl border border-[#D8C4BA]/40 bg-[#43141C] grid place-items-center text-[#FAF4F0] hover:text-[#D8C4BA] hover:border-[#D8C4BA] transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content / Form */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div 
              id="booking-confirmation-state"
              className="py-4 text-center space-y-5"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] grid place-items-center mx-auto shadow-lg shadow-[#25D366]/20">
                <MessageCircle size={36} />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#43141C]/5 text-[#43141C] rounded-full text-xs font-mono font-bold tracking-wider mb-2 border border-[#D8C4BA]/50">
                  <span>RÉFÉRENCE : {referenceId}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#43141C] mt-1 font-semibold">
                  {currentLang === 'ar' ? 'تم تجهيز طلبك عبر واتساب !' : 'Votre demande est prête sur WhatsApp !'}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#6E2432] max-w-lg mx-auto">
                  {currentLang === 'ar'
                    ? 'تم إعداد الرسالة الرسمية المرفقة بجميع بياناتكم. إذا لم يفتح واتساب تلقائياً، اضغط على الزر الأخضر أدناه لإرسالها مباشرة.'
                    : 'Le message officiel avec toutes vos coordonnées a été généré. Si l’application WhatsApp ne s’est pas ouverte automatiquement, cliquez sur le bouton ci-dessous.'}
                </p>
              </div>

              {/* Bouton Principal WhatsApp */}
              <div className="max-w-md mx-auto space-y-2.5">
                <a
                  id="whatsapp-direct-send-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-[#2D0C13] font-bold text-xs uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2.5 transition duration-300 shadow-xl shadow-[#25D366]/30 hover:scale-[1.02]"
                >
                  <MessageCircle size={18} />
                  <span>
                    {currentLang === 'ar'
                      ? 'إرسال الرسالة عبر واتساب (+216 26 723 876)'
                      : 'Envoyer sur WhatsApp (+216 26 723 876)'}
                  </span>
                  <ExternalLink size={14} />
                </a>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="w-full py-2.5 px-4 bg-[#FAF4F0] hover:bg-white border border-[#D8C4BA]/50 text-[#43141C] text-xs rounded-xl flex items-center justify-center gap-2 transition"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-[#C9A6A5]" />
                      <span className="text-[#43141C] font-semibold">Texte copié dans le presse-papier !</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copier le texte récapitulatif</span>
                    </>
                  )}
                </button>
              </div>

              {/* Récapitulatif des données saisies */}
              <div className="p-5 rounded-2xl bg-[#FAF4F0] border border-[#D8C4BA]/40 text-xs text-left max-w-md mx-auto space-y-2">
                <div className="flex justify-between border-b border-[#D8C4BA]/30 pb-2">
                  <span className="text-[#6E2432]">Patient(e) :</span>
                  <span className="font-semibold text-[#43141C]">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-[#D8C4BA]/30 pb-2">
                  <span className="text-[#6E2432]">Téléphone :</span>
                  <span className="font-semibold text-[#43141C]">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-[#D8C4BA]/30 pb-2">
                  <span className="text-[#6E2432]">Email :</span>
                  <span className="font-semibold text-[#43141C]">{formData.email}</span>
                </div>
                <div className="flex justify-between border-b border-[#D8C4BA]/30 pb-2">
                  <span className="text-[#6E2432]">Intervention :</span>
                  <span className="font-semibold text-[#C9A6A5]">{formData.procedure}</span>
                </div>
                <div className="flex justify-between border-b border-[#D8C4BA]/30 pb-2">
                  <span className="text-[#6E2432]">Format :</span>
                  <span className="font-semibold text-[#43141C]">
                    {formData.consultationType === 'clinic' ? 'Au cabinet (Tunis)' : 'Téléconsultation'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#D8C4BA]/30 pb-2">
                  <span className="text-[#6E2432]">Date & Heure :</span>
                  <span className="font-semibold text-[#43141C]">
                    {formData.preferredDate || 'Dès que possible'} · {formData.preferredTime}
                  </span>
                </div>
                {formData.message && (
                  <div className="pt-1">
                    <span className="text-[#6E2432] block mb-1">Remarques :</span>
                    <p className="text-[#43141C] italic text-[11px] bg-white p-2.5 rounded-lg border border-[#D8C4BA]/40">
                      "{formData.message}"
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <button
                  id="booking-modal-done-btn"
                  onClick={handleReset}
                  className="px-8 py-3 bg-[#43141C] hover:bg-[#5A1C28] border border-[#D8C4BA]/50 text-[#FAF4F0] text-xs font-semibold tracking-wider uppercase rounded-2xl transition"
                >
                  Fermer
                </button>
              </div>
            </div>
          ) : (
            <form 
              id="consultation-booking-form"
              onSubmit={handleSubmit} 
              className="space-y-5"
            >
              {/* Consultation Type Selector */}
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider font-bold text-[#6E2432] mb-2">
                  Format de Consultation
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    id="type-clinic-btn"
                    onClick={() => setFormData({ ...formData, consultationType: 'clinic' })}
                    className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition ${
                      formData.consultationType === 'clinic'
                        ? 'border-[#C9A6A5] bg-[#43141C]/5 text-[#43141C] ring-1 ring-[#C9A6A5]'
                        : 'border-[#D8C4BA]/40 bg-[#FAF4F0] hover:border-[#43141C]'
                    }`}
                  >
                    <MapPin size={16} className="text-[#C9A6A5] shrink-0" />
                    <div className="text-xs">
                      <div className="font-semibold text-[#43141C]">{t('form_type_clinic')}</div>
                      <div className="text-[10px] text-[#6E2432]">Les Berges du Lac 2, Tunis</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    id="type-virtual-btn"
                    onClick={() => setFormData({ ...formData, consultationType: 'virtual' })}
                    className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition ${
                      formData.consultationType === 'virtual'
                        ? 'border-[#C9A6A5] bg-[#43141C]/5 text-[#43141C] ring-1 ring-[#C9A6A5]'
                        : 'border-[#D8C4BA]/40 bg-[#FAF4F0] hover:border-[#43141C]'
                    }`}
                  >
                    <Video size={16} className="text-[#C9A6A5] shrink-0" />
                    <div className="text-xs">
                      <div className="font-semibold text-[#43141C]">{t('form_type_virtual')}</div>
                      <div className="text-[10px] text-[#6E2432]">Visio sécurisée (Zoom / WhatsApp)</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="input-fullname" className="block text-xs uppercase font-mono tracking-wider font-bold text-[#6E2432] mb-1.5">
                    {t('form_fullname')} *
                  </label>
                  <input
                    id="input-fullname"
                    type="text"
                    required
                    placeholder="ex. Sophie Trabelsi"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D8C4BA]/50 bg-[#FAF4F0] text-xs text-[#43141C] placeholder-[#6E2432]/60 focus:outline-none focus:border-[#43141C]"
                  />
                </div>

                <div>
                  <label htmlFor="input-phone" className="block text-xs uppercase font-mono tracking-wider font-bold text-[#6E2432] mb-1.5">
                    {t('form_phone')} *
                  </label>
                  <input
                    id="input-phone"
                    type="tel"
                    required
                    placeholder="+216 ... ou +33 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D8C4BA]/50 bg-[#FAF4F0] text-xs text-[#43141C] placeholder-[#6E2432]/60 focus:outline-none focus:border-[#43141C]"
                  />
                </div>
              </div>

              {/* Email & Procedure */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="input-email" className="block text-xs uppercase font-mono tracking-wider font-bold text-[#6E2432] mb-1.5">
                    {t('form_email')} *
                  </label>
                  <input
                    id="input-email"
                    type="email"
                    required
                    placeholder="contact@exemple.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D8C4BA]/50 bg-[#FAF4F0] text-xs text-[#43141C] placeholder-[#6E2432]/60 focus:outline-none focus:border-[#43141C]"
                  />
                </div>

                <div>
                  <label htmlFor="select-procedure" className="block text-xs uppercase font-mono tracking-wider font-bold text-[#6E2432] mb-1.5">
                    {t('form_procedure')}
                  </label>
                  <select
                    id="select-procedure"
                    value={formData.procedure}
                    onChange={(e) => setFormData({ ...formData, procedure: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D8C4BA]/50 bg-[#FAF4F0] text-xs text-[#43141C] focus:outline-none focus:border-[#43141C]"
                  >
                    {proceduresData.map((p) => (
                      <option key={p.id} value={p.titleKey} className="bg-white text-[#43141C]">
                        {p.titleKey}
                      </option>
                    ))}
                    <option value="Autre demande esthétique" className="bg-white text-[#43141C]">
                      Autre demande / Bilan global
                    </option>
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time slot */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="input-date" className="block text-xs uppercase font-mono tracking-wider font-bold text-[#6E2432] mb-1.5">
                    {t('form_date')}
                  </label>
                  <input
                    id="input-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D8C4BA]/50 bg-[#FAF4F0] text-xs text-[#43141C] focus:outline-none focus:border-[#43141C]"
                  />
                </div>

                <div>
                  <label htmlFor="select-time" className="block text-xs uppercase font-mono tracking-wider font-bold text-[#6E2432] mb-1.5">
                    {t('form_time')} (Lun, Mer, Ven)
                  </label>
                  <select
                    id="select-time"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D8C4BA]/50 bg-[#FAF4F0] text-xs text-[#43141C] focus:outline-none focus:border-[#43141C]"
                  >
                    <option value="17:00 - 17:45" className="bg-white text-[#43141C]">17h00 – 17h45</option>
                    <option value="17:45 - 18:30" className="bg-white text-[#43141C]">17h45 – 18h30</option>
                    <option value="18:30 - 19:15" className="bg-white text-[#43141C]">18h30 – 19h15</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="input-message" className="block text-xs uppercase font-mono tracking-wider font-bold text-[#6E2432] mb-1.5">
                  {t('form_notes')}
                </label>
                <textarea
                  id="input-message"
                  rows={3}
                  placeholder="Précisez votre demande, vos antécédents éventuels ou vos disponibilités..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#D8C4BA]/50 bg-[#FAF4F0] text-xs text-[#43141C] placeholder-[#6E2432]/60 focus:outline-none focus:border-[#43141C]"
                />
              </div>

              {/* Submit & privacy reassurance */}
              <div className="pt-2">
                <button
                  id="submit-booking-form-btn"
                  type="submit"
                  className="w-full py-4 bg-[#43141C] hover:bg-[#5A1C28] text-[#FAF4F0] text-xs font-bold tracking-wider uppercase rounded-2xl transition duration-300 shadow-xl shadow-[#43141C]/20 border border-[#D8C4BA]/50 flex items-center justify-center gap-2.5 group"
                >
                  <MessageCircle size={16} className="text-[#C9A6A5]" />
                  <span>
                    {currentLang === 'ar' 
                      ? 'إرسال الطلب وحجز الموعد عبر واتساب' 
                      : 'Transmettre ma Demande sur WhatsApp'}
                  </span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
                <div className="flex items-center justify-center gap-1.5 text-xs text-[#6E2432] mt-3 font-mono">
                  <Lock size={12} className="text-[#C9A6A5]" />
                  <span>Vos données sont transmises directement et en toute confidentialité sur le WhatsApp officiel.</span>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

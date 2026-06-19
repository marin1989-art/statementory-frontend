'use client';

export default function CookieSettingsLink() {
  function resetConsent() {
    localStorage.removeItem('cookie_consent');
    window.location.reload();
  }

  return (
    <button
      onClick={resetConsent}
      className="hover:text-zinc-400 transition-colors"
    >
      Cookie-Einstellungen
    </button>
  );
}

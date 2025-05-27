import React from 'react';

export default function QuizResult({ bestMatch, onRetake }) {
  const {
    name,
    city,
    state,
    size,
    admission_rate,
    graduation_rate,
    url,
    tuition_in,
    carnegie_desc,
    locale_desc,
    net_price,
    campus_type,
    career_focus,
  } = bestMatch;

  return (
    <div className="w-full max-w-md text-center">
      {/* College Card */}
      <div className="mb-8 bg-surfaceContain dark:bg-surfaceContain-dark rounded-2xl p-6 border border-border dark:border-border-dark shadow-md">
        <div className="text-4xl mb-2">🎓</div>
        <div className="text-2xl font-bold text-onSurface dark:text-onSurface-dark">{name}</div>
        <div className="text-sm text-secondary dark:text-secondary-dark mb-2">
          {city}, {state}
        </div>

        {/* College Quick Stats */}
        <div className="grid grid-cols-2 gap-4 my-5 text-sm text-onSurface dark:text-onSurface-dark">
          <div className="text-left">
            <div className="font-semibold">Size</div>
            <div>{size?.toLocaleString() || '—'} students</div>
          </div>
          <div className="text-left">
            <div className="font-semibold">Selectivity</div>
            <div>{admission_rate ? `${Math.round(admission_rate * 100)}%` : '—'} acceptance</div>
          </div>
          <div className="text-left">
            <div className="font-semibold">Grad Rate</div>
            <div>{graduation_rate ? `${Math.round(graduation_rate * 100)}%` : '—'} 6yr</div>
          </div>
          <div className="text-left">
            <div className="font-semibold">Net Price</div>
            <div>{net_price ? `$${Math.round(net_price).toLocaleString()}` : '—'} / yr</div>
          </div>
        </div>

        {/* Carnegie and Locale */}
        <div className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">
          {carnegie_desc} — {locale_desc}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {campus_type && (
            <div className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-border text-sm text-onSurface dark:text-onSurface-dark">
              {campus_type} setting
            </div>
          )}
          <div className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-border text-sm text-onSurface dark:text-onSurface-dark">
            {career_focus ? "Career Focused" : "Liberal Arts"}
          </div>
          {tuition_in && (
            <div className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-border text-sm text-onSurface dark:text-onSurface-dark">
              ${Math.round(tuition_in).toLocaleString()} in-state tuition
            </div>
          )}
        </div>

        {/* Link to Website */}
        {url && (
          <div className="mt-5">
            <a
              href={url.startsWith('http') ? url : `https://${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary dark:text-primary-dark underline hover:text-primary-dark"
            >
              Visit School Website →
            </a>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row flex-wrap gap-3 justify-center">
        <button
          onClick={() => {
            navigator.share?.({
              title: 'FindU College Quiz',
              text: `I found my college match on FindU! My best match was ${name}. Take the quiz to find yours!`,
              url: window.location.href
            })
          }}
          className="px-6 py-3 rounded-full bg-surfaceContain dark:bg-surfaceContain-dark border border-border dark:border-border-dark text-onSurface dark:text-onSurface-dark font-semibold shadow transition text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          Share Results
        </button>
        <button
          onClick={() => window.open('https://apple.co/3EDhKPd', '_blank')}
          className="px-6 py-3 rounded-full bg-onSurface dark:bg-onSurface-dark text-surface dark:text-surface-dark font-semibold shadow transition text-sm hover:bg-gray-900"
        >
          Download App
        </button>
        <button
          onClick={onRetake}
          className="px-6 py-3 rounded-full text-secondary dark:text-secondary-dark font-medium transition text-sm hover:text-onSurface dark:hover:text-onSurface-dark"
        >
          Take Quiz Again
        </button>
      </div>
    </div>
  );
}
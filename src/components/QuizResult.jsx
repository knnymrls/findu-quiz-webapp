import React from 'react';

export default function QuizResult({ bestMatch, onRetake }) {
  return (
    <div className="w-full max-w-md text-center">
      {/* College Card */}
      <div className="mb-8 bg-surfaceContain dark:bg-surfaceContain-dark rounded-2xl p-6 border border-border dark:border-border-dark">
        <div className="text-4xl mb-4 text-onSurface dark:text-onSurface-dark">🎓</div>
        <div className="text-2xl font-semibold mb-2 text-onSurface dark:text-onSurface-dark">{bestMatch.name}</div>
        <div className="text-sm text-secondary dark:text-secondary-dark mb-4">{bestMatch.location}</div>
        <div className="text-sm text-secondary dark:text-secondary-dark mb-6">
          {bestMatch.description}
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <div className="px-3 py-1.5 rounded-full bg-surfaceContain dark:bg-surfaceContain-dark border border-border dark:border-border-dark text-onSurface dark:text-onSurface-dark text-sm">
            {bestMatch.size} campus
          </div>
          <div className="px-3 py-1.5 rounded-full bg-surfaceContain dark:bg-surfaceContain-dark border border-border dark:border-border-dark text-onSurface dark:text-onSurface-dark text-sm">
            {bestMatch.campus_type} setting
          </div>
          <div className="px-3 py-1.5 rounded-full bg-surfaceContain dark:bg-surfaceContain-dark border border-border dark:border-border-dark text-onSurface dark:text-onSurface-dark text-sm">
            {bestMatch.career_focus ? "Career focused" : "Liberal arts"}
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-row flex-wrap gap-3 justify-center">
        <button
          onClick={() => {
            navigator.share({
              title: 'FindU College Quiz',
              text: `I found my college match on FindU! My best match was ${bestMatch.name}. Take the quiz to find yours!`,
              url: window.location.href
            }).catch(() => {
              navigator.clipboard.writeText(window.location.href);
              alert('Link copied to clipboard!');
            });
          }}
          className="px-6 py-3 rounded-full bg-surfaceContain dark:bg-surfaceContain-dark border border-border dark:border-border-dark text-onSurface dark:text-onSurface-dark font-semibold shadow transition text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          Share Results
        </button>
        <button
          onClick={() => {
            window.open('https://findu.app/download', '_blank');
          }}
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
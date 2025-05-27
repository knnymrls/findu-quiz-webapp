import React from 'react';

export default function QuizQuestion({ question, selected, setSelected }) {
  if (question.type === 'slider') {
    return (
      <div className="mb-6">
        <input
          type="range"
          min={question.min}
          max={question.max}
          step={question.step}
          value={selected ?? question.min}
          onChange={e => setSelected(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm mt-2">
          <span>{question.labels?.[0]}</span>
          <span>{question.labels?.[1]}</span>
        </div>
      </div>
    );
  }
  // Default: multiple choice
  return (
    <div className="flex flex-col gap-4 mb-6">
      {question.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => setSelected(i)}
          className={`w-full py-4 px-4 hover:scale-105 rounded-2xl font-medium transition text-left flex items-center gap-2
            ${selected === i 
              ? "bg-primary/20 border font-sans border-primary text-primary " 
              : "text-onSurface font-sans border bg-surfaceContain dark:bg-surfaceContain-dark border-border dark:border-border-dark dark:text-onSurface-dark"}
          `}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
} 
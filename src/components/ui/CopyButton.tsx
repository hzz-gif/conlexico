'use client';

import { useState } from 'react';

interface CopyButtonProps {
  text: string;
  className?: string;
  title?: string;
  showOnHover?: boolean;
}

export default function CopyButton({ 
  text, 
  className = "", 
  title = "Copiar", 
  showOnHover = true 
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const baseClasses = "p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-200";
  const hoverClasses = showOnHover ? "opacity-0 group-hover:opacity-100" : "";
  const finalClasses = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <button
      onClick={handleCopy}
      className={finalClasses}
      title={title}
      aria-label={title}
    >
      {copied ? (
        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
}

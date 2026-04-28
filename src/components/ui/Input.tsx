"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

export function Input({ label, id, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="label-accent text-muted"
      >
        {label}
      </label>
      <input
        id={id}
        className={`w-full py-3 text-text bg-transparent border-b border-border focus:border-gold transition-colors duration-300 outline-none text-sm ${className}`}
        {...props}
      />
    </div>
  );
}

export function TextArea({
  label,
  id,
  className = "",
  ...props
}: TextAreaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="label-accent text-muted"
      >
        {label}
      </label>
      <textarea
        id={id}
        className={`w-full py-3 text-text bg-transparent border-b border-border focus:border-gold transition-colors duration-300 outline-none resize-none text-sm min-h-[120px] ${className}`}
        {...props}
      />
    </div>
  );
}

export function Select({
  label,
  id,
  options,
  className = "",
  ...props
}: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="label-accent text-muted"
      >
        {label}
      </label>
      <select
        id={id}
        className={`w-full py-3 text-text bg-transparent border-b border-border focus:border-gold transition-colors duration-300 outline-none text-sm cursor-pointer ${className}`}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

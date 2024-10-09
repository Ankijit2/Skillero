'use client';

import React, { useState, KeyboardEvent, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { Input, Button } from '@nextui-org/react';
import { motion, AnimatePresence } from 'framer-motion';

interface MultiInputProps {
  label: string;
  placeholder?: string;
  maxItems?: number;
  onChange?: (value: string[]) => void;
  value?: string[];
}

export default function MultiInput({
  label,
  placeholder = 'Type and press Enter',
  maxItems = Infinity,
  value = [],
  onChange,
}: MultiInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const addItem = () => {
    if (inputValue.trim() !== '' && value.length < maxItems) {
      const newItems = [...value, inputValue];
      if (onChange) {
        onChange(newItems);
      }
      setInputValue('');
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addItem();
    }
  };

  const removeItem = (index: number) => {
    const newItems = value.filter((_, i) => i !== index);
    if (onChange) {
      onChange(newItems);
    }
  };

  const isMaxItemsReached = value.length >= maxItems;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <Input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          label={label}
          placeholder={!isMaxItemsReached ? placeholder : 'Max items reached'}
          isDisabled={isMaxItemsReached}
        />
        <Button
          color="primary"
          onClick={addItem}
          disabled={isMaxItemsReached || inputValue.trim() === ''}
          variant="flat"
          size="sm"
        >
          Add
        </Button>
      </div>
      <AnimatePresence>
        {value.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 flex flex-wrap gap-2"
          >
            {value.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <span className="inline-flex items-center rounded-md bg-primary-100 px-3 py-2 text-xs font-medium text-primary-800">
                  {item}
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="ml-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-primary-400 hover:bg-primary-200 hover:text-primary-500 focus:bg-primary-500 focus:text-white focus:outline-none"
                  >
                    <span className="sr-only">Remove {item}</span>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
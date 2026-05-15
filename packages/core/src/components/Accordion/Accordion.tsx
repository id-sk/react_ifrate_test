import React, { useState } from 'react';

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export interface AccordionProps {
  items: AccordionItemProps[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(() => new Set());

  const toggle = (index: number) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={`idsk-accordion ${className}`} data-idsk="accordion">
      {items.map((item, index) => {
        const itemId = item.id || `accordion-item-${index}`;
        const buttonId = `${itemId}-button`;
        const isExpanded = expandedItems.has(index);
        return (
          <div key={item.id || item.title} className="idsk-accordion__item">
            <button
              id={buttonId}
              className="idsk-accordion__button"
              type="button"
              aria-expanded={isExpanded}
              aria-controls={itemId}
              onClick={() => toggle(index)}
            >
              {item.title}
              <span className="idsk-accordion__icon" aria-hidden="true"></span>
            </button>
            <div
              id={itemId}
              className="idsk-accordion__content"
              aria-labelledby={buttonId}
              hidden={!isExpanded}
            >
              <div className="idsk-accordion__inner">{item.children}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

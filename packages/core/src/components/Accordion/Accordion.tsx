import React, { useState } from 'react';
import KeyboardArrowDownIcon from '../../assets/icons/KeyboardArrowDownIcon';

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  disabled?: boolean;
  defaultOpen?: boolean;
  hint?: string;
  /** Prepared for Tag components — not yet rendered, reserved for future use */
  tags?: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItemProps[];
  className?: string;
  singleOpen?: boolean;
  showToggleAll?: boolean;
  /** Controlled mode: pass current expanded set from parent */
  expandedItems?: Set<number>;
  /** Controlled mode: called when expanded set changes */
  onExpandedChange?: (items: Set<number>) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  className = '',
  singleOpen = false,
  showToggleAll = false,
  expandedItems: controlledExpanded,
  onExpandedChange,
}) => {
  const isControlled = controlledExpanded !== undefined && onExpandedChange !== undefined;

  const [internalExpanded, setInternalExpanded] = useState<Set<number>>(
    () => new Set(items.flatMap((item, i) => (item.defaultOpen ? [i] : []))),
  );

  const expandedItems = isControlled ? controlledExpanded : internalExpanded;

  const setExpanded = (next: Set<number>) => {
    if (isControlled) {
      onExpandedChange!(next);
    } else {
      setInternalExpanded(next);
    }
  };

  const toggle = (index: number, disabled?: boolean) => {
    if (disabled) return;
    const next = new Set(expandedItems);
    if (next.has(index)) {
      next.delete(index);
    } else {
      if (singleOpen) next.clear();
      next.add(index);
    }
    setExpanded(next);
  };

  const enabledIndices = items.reduce<number[]>(
    (acc, item, i) => (!item.disabled ? [...acc, i] : acc),
    [],
  );
  const allExpanded =
    enabledIndices.length > 0 && enabledIndices.every((i) => expandedItems.has(i));

  const toggleAll = () => {
    setExpanded(allExpanded ? new Set() : new Set(enabledIndices));
  };

  return (
    <div className={`idsk-accordion ${className}`} data-idsk="accordion">
      {showToggleAll && !singleOpen && (
        <div className="idsk-accordion__toggle-row">
          <button type="button" className="idsk-accordion__toggle-all" onClick={toggleAll}>
            {allExpanded ? 'Zavrieť všetky' : 'Otvoriť všetky'}
          </button>
        </div>
      )}
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
              disabled={item.disabled}
              onClick={() => toggle(index, item.disabled)}
            >
              <div className="idsk-accordion__title-row">
                <span className="idsk-accordion__title">{item.title}</span>
                <KeyboardArrowDownIcon
                  size={32}
                  className="idsk-accordion__chevron"
                  aria-hidden="true"
                />
              </div>
              {(item.tags || item.hint) && (
                <div className="idsk-accordion__meta">
                  {item.tags && <div className="idsk-accordion__tags">{item.tags}</div>}
                  {item.hint && <span className="idsk-accordion__hint">{item.hint}</span>}
                </div>
              )}
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

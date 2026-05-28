import React, { useState } from 'react';
import { Accordion } from '../Accordion';
import type { AccordionItemProps } from '../Accordion';
import KeyboardArrowDownIcon from '../../assets/icons/KeyboardArrowDownIcon';

export interface AccordionListProps {
  title: string;
  items: AccordionItemProps[];
  className?: string;
  singleOpen?: boolean;
}

export const AccordionList: React.FC<AccordionListProps> = ({
  title,
  items,
  className = '',
  singleOpen = false,
}) => {
  const enabledIndices = items.reduce<number[]>(
    (acc, item, i) => (!item.disabled ? [...acc, i] : acc),
    [],
  );

  const [expandedItems, setExpandedItems] = useState<Set<number>>(
    () => new Set(items.flatMap((item, i) => (item.defaultOpen ? [i] : []))),
  );

  const allExpanded =
    enabledIndices.length > 0 && enabledIndices.every((i) => expandedItems.has(i));

  const toggleAll = () => {
    setExpandedItems(allExpanded ? new Set() : new Set(enabledIndices));
  };

  return (
    <div className={`idsk-accordion-list${className ? ` ${className}` : ''}`}>
      <div className="idsk-accordion-list__header">
        <p className="idsk-accordion-list__title">{title}</p>
        {!singleOpen && (
          <button
            type="button"
            className="idsk-accordion-list__toggle"
            data-all-expanded={allExpanded ? 'true' : 'false'}
            onClick={toggleAll}
          >
            <span>{allExpanded ? 'Zavrieť všetky' : 'Otvoriť všetky'}</span>
            <KeyboardArrowDownIcon
              size={25}
              className="idsk-accordion-list__toggle-icon"
              aria-hidden="true"
            />
          </button>
        )}
      </div>
      <Accordion
        items={items}
        singleOpen={singleOpen}
        expandedItems={expandedItems}
        onExpandedChange={setExpandedItems}
      />
    </div>
  );
};

'use client'

import Image from 'next/image'
import { DropdownItem } from '@/components/nav/DropdownItem'
import { DropdownSection } from '@/components/nav/DropdownSection'
import type { NavDropdown } from '@/components/nav/types'

export function Dropdown({ item, onNavigate }: { item: NavDropdown; onNavigate?: () => void }) {
  return (
    <div className={`nav-dropdown nav-dropdown-${item.layout}`}>
      <div className="nav-dropdown-panel">
        {item.media ? (
          <div className="nav-dropdown-media">
            <Image
              src={item.media.src}
              alt={item.media.alt}
              fill
              sizes="(max-width: 720px) 50vw, 360px"
              className="nav-dropdown-media-image"
            />
          </div>
        ) : null}
        <div className="nav-dropdown-columns">
          {item.columns.map((column, index) => (
            <DropdownSection key={column.heading || `${item.label}-${index}`} heading={column.heading}>
              {column.links.map((link) => (
                <DropdownItem
                  key={`${link.href}-${link.label}`}
                  appearance={column.appearance}
                  {...link}
                  onClick={onNavigate}
                />
              ))}
            </DropdownSection>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Dropdown as DropdownMenu }

import type { ReactNode } from 'react'

export function DropdownSection({
  heading,
  children,
}: {
  heading?: string
  children: ReactNode
}) {
  return (
    <div className="nav-dropdown-column">
      {heading ? <p className="nav-dropdown-heading">{heading}</p> : null}
      <div className="nav-dropdown-links">{children}</div>
    </div>
  )
}

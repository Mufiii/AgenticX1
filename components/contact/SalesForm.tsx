'use client'

import Link from 'next/link'
import { useState, type FormEvent } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { contactFieldClass, contactPrimaryClass } from '@/components/contact/contact-styles'

const interests = [
  'Campus transformation',
  'Corporate / workforce AI',
  'Community & MSME',
  'Personalized Agents',
  'Agentic Brain',
  'AI Digital Twin',
  'Partnership',
  'Other',
] as const

type FormState = {
  firstName: string
  lastName: string
  email: string
  company: string
  role: string
  interest: string
  message: string
  agreed: boolean
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  role: '',
  interest: '',
  message: '',
  agreed: false,
}

export function SalesForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!form.agreed) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className="flex min-h-[420px] flex-col items-center justify-center rounded-[28px] border border-white/[0.08] bg-[#090c1a]/80 px-8 py-14 text-center backdrop-blur-xl sm:px-12"
        role="status"
        aria-live="polite"
      >
        <span className="grid size-12 place-items-center rounded-full border border-[#8B5CF6]/40 bg-[#7C3AED]/15 text-[#C4B5FD]">
          <Check size={22} strokeWidth={2} aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-[28px] font-medium tracking-[-0.03em] text-white">
          We&apos;ve received your message.
        </h3>
        <p className="mx-auto mt-4 max-w-[36ch] text-[16px] leading-[1.7] text-[#A1A1AA]">
          Our team will review your context and follow up shortly to continue the conversation.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/contact" className={contactPrimaryClass}>
            Back to Contact
          </Link>
          <button
            type="button"
            onClick={() => {
              setForm(initialState)
              setSubmitted(false)
            }}
            className="text-[14px] text-[#A1A1AA] transition-colors hover:text-white"
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-white/[0.08] bg-[#090c1a]/80 p-6 backdrop-blur-xl sm:p-8 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="sales-first-name" label="First name" required>
          <input
            id="sales-first-name"
            name="firstName"
            autoComplete="given-name"
            required
            value={form.firstName}
            onChange={(event) => update('firstName', event.target.value)}
            className={contactFieldClass}
          />
        </Field>
        <Field id="sales-last-name" label="Last name" required>
          <input
            id="sales-last-name"
            name="lastName"
            autoComplete="family-name"
            required
            value={form.lastName}
            onChange={(event) => update('lastName', event.target.value)}
            className={contactFieldClass}
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field id="sales-email" label="Work email" required>
          <input
            id="sales-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) => update('email', event.target.value)}
            placeholder="name@company.com"
            className={contactFieldClass}
          />
        </Field>
        <Field id="sales-company" label="Company or institution" required>
          <input
            id="sales-company"
            name="company"
            autoComplete="organization"
            required
            value={form.company}
            onChange={(event) => update('company', event.target.value)}
            className={contactFieldClass}
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field id="sales-role" label="Role">
          <input
            id="sales-role"
            name="role"
            autoComplete="organization-title"
            value={form.role}
            onChange={(event) => update('role', event.target.value)}
            className={contactFieldClass}
          />
        </Field>
        <Field id="sales-interest" label="How can we help?" required>
          <div className="relative">
            <select
              id="sales-interest"
              name="interest"
              required
              value={form.interest}
              onChange={(event) => update('interest', event.target.value)}
              className={`${contactFieldClass} pr-10`}
            >
              <option value="">Select an option</option>
              {interests.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#A1A1AA]"
              aria-hidden="true"
            />
          </div>
        </Field>
      </div>

      <div className="mt-5">
        <Field id="sales-message" label="Tell us about what you want to build" required>
          <textarea
            id="sales-message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={(event) => update('message', event.target.value)}
            placeholder="Share your context, goals, or the workflows you want to improve."
            className={`${contactFieldClass} min-h-[140px] resize-y`}
          />
        </Field>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-[13px] leading-6 text-[#A1A1AA]">
        <input
          type="checkbox"
          required
          checked={form.agreed}
          onChange={(event) => update('agreed', event.target.checked)}
          className="mt-1 size-4 shrink-0 accent-[#7C3AED]"
        />
        <span>
          I agree to AgenticX&apos;s{' '}
          <Link
            href="/company/trust-center"
            className="text-white/80 underline decoration-white/25 underline-offset-2 transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>{' '}
          and consent to being contacted about this inquiry.
        </span>
      </label>

      <button type="submit" className={`${contactPrimaryClass} mt-8 w-full sm:w-auto`}>
        Send message
      </button>
    </form>
  )
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="grid min-w-0 gap-2">
      <label htmlFor={id} className="text-[12px] font-medium tracking-[0.06em] text-[#A1A1AA]">
        {label}
        {required ? <span className="text-[#8B5CF6]"> *</span> : null}
      </label>
      {children}
    </div>
  )
}

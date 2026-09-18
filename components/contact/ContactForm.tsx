'use client'

import { useState, type FormEvent } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { contactFieldClass, contactPrimaryClass } from '@/components/contact/contact-styles'

const interests = [
  'Campus Transformation',
  'Corporate Transformation',
  'Community Transformation',
  'Product Partnership',
  'Research Collaboration',
] as const

type FormState = {
  name: string
  organization: string
  email: string
  interest: string
  goal: string
}

const initialState: FormState = {
  name: '',
  organization: '',
  email: '',
  interest: '',
  goal: '',
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className="flex min-h-[520px] flex-col items-center justify-center rounded-[28px] border border-white/[0.08] bg-[#090c1a]/80 px-8 py-14 text-center backdrop-blur-xl sm:px-12"
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
          We&apos;ll connect you with the right people across AgenticX and follow up shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState)
            setSubmitted(false)
          }}
          className={`${contactPrimaryClass} mt-8`}
        >
          Start another conversation
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#090c1a]/80 p-6 backdrop-blur-xl sm:p-8 lg:p-10"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#7C3AED]/16 blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative">
        <h2 className="text-[28px] font-medium tracking-[-0.03em] text-white sm:text-[32px]">
          Start a Conversation
        </h2>
        <p className="mt-3 max-w-[42ch] text-[15px] leading-[1.7] text-[#A1A1AA]">
          Tell us a little about yourself and what you want to transform.
        </p>
      </div>

      <div className="relative mt-8 grid gap-5">
        <Field id="contact-name" label="Name">
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            value={form.name}
            onChange={(event) => update('name', event.target.value)}
            placeholder="Your name"
            className={contactFieldClass}
          />
        </Field>

        <Field id="contact-organization" label="Organization">
          <input
            id="contact-organization"
            name="organization"
            autoComplete="organization"
            required
            value={form.organization}
            onChange={(event) => update('organization', event.target.value)}
            placeholder="Organization name"
            className={contactFieldClass}
          />
        </Field>

        <Field id="contact-email" label="Email">
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) => update('email', event.target.value)}
            placeholder="you@organization.com"
            className={contactFieldClass}
          />
        </Field>

        <Field id="contact-interest" label="Area of Interest">
          <div className="relative">
            <select
              id="contact-interest"
              name="interest"
              required
              value={form.interest}
              onChange={(event) => update('interest', event.target.value)}
              className={`${contactFieldClass} cursor-pointer pr-10 ${form.interest ? 'text-white' : 'text-white/30'}`}
            >
              <option value="" disabled>
                Select an area
              </option>
              {interests.map((interest) => (
                <option key={interest} value={interest} className="bg-[#0b0b14] text-white">
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

        <Field id="contact-goal" label="Transformation Goal or Challenge">
          <textarea
            id="contact-goal"
            name="goal"
            required
            rows={5}
            value={form.goal}
            onChange={(event) => update('goal', event.target.value)}
            placeholder="Tell us what human capability, business outcome or societal problem you want to transform with responsible AI and DeepTech."
            className={`${contactFieldClass} min-h-[148px] resize-y`}
          />
        </Field>
      </div>

      <button type="submit" className={`group ${contactPrimaryClass} relative mt-8 w-full`}>
        Start a Conversation
        <span
          className="text-base leading-none transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transform-none"
          aria-hidden="true"
        >
          →
        </span>
      </button>
    </form>
  )
}

function Field({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="grid min-w-0 gap-2">
      <label htmlFor={id} className="text-[12px] font-medium tracking-[0.06em] text-[#A1A1AA]">
        {label}
      </label>
      {children}
    </div>
  )
}

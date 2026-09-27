'use client'

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  type RefObject,
} from 'react'
import { createPortal } from 'react-dom'
import { ArrowRight, Check, ChevronDown, X } from 'lucide-react'

const copyOptions = ['1', '2', '3', '5+'] as const

type FormState = {
  name: string
  email: string
  country: string
  copies: string
  message: string
  consent: boolean
}

const initialForm: FormState = {
  name: '',
  email: '',
  country: '',
  copies: '',
  message: '',
  consent: false,
}

const fieldClass =
  'w-full appearance-none rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-[14px] text-[15px] leading-6 text-white outline-none transition-[border-color,background-color,box-shadow] duration-200 placeholder:text-white/30 focus:border-[#d9b45b]/70 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(217,180,91,0.12)]'

export default function BookPreorderSection() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [form, setForm] = useState<FormState>(initialForm)
  const closeTimer = useRef<number | null>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const successRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    setMounted(true)
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current)
    }
  }, [])

  const closeModal = useCallback(() => {
    setVisible(false)
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    closeTimer.current = window.setTimeout(() => {
      setOpen(false)
      setSubmitted(false)
      setForm(initialForm)
      previouslyFocused.current?.focus()
    }, reduce ? 0 : 280)
  }, [])

  const openModal = useCallback(() => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    previouslyFocused.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    setSubmitted(false)
    setForm(initialForm)
    setOpen(true)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setVisible(true)
      return
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true))
    })
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') closeModal()
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, closeModal])

  useEffect(() => {
    if (!open || !visible) return
    const node = submitted ? successRef.current : titleRef.current
    node?.focus()
  }, [open, visible, submitted])

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.country.trim() || !form.copies || !form.consent) return
    setSubmitted(true)
  }

  function onBackdropMouseDown(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) closeModal()
  }

  return (
    <section className="w-full bg-[#050711] py-16 text-white border-2 border-white/10">
      <div className="mx-auto flex max-w-7xl items-center gap-16 px-6 lg:px-10">

        <div className="flex w-full justify-center lg:w-[38%]">
          <img
            src="/images/particle.png"
            alt="Particles & Patterns"
            className="w-[300px] object-contain"
          />

          <div className="h-[420px] w-[300px]" />
        </div>

        <div className="w-full lg:w-[62%]">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-12 bg-[#d9b45b]" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#d9b45b]">
              The Book
            </span>
          </div>

          <h2 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Particles{' '}
            <span className="text-white/75">& Patterns</span>
          </h2>

          <p className="mt-5 px-2 text-sm uppercase tracking-[0.3em] text-white/60 sm:text-base mb-3">
            Light Intelligence, Photonics & AI
          </p>

          <p className="mt-8 max-w-xl text-lg text-white/55">
            A deeper look at the ideas shaping the intersection of
            intelligence, light and the future.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Early Edition · Limited Availability
            </span>
            <button
              type="button"
              onClick={openModal}
              className="group inline-flex cursor-pointer items-center gap-5 rounded-full border border-[#d9b45b] px-7 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-[#d9b45b] hover:text-black"
            >
              Pre-order Now

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            
          </div>
        </div>

      </div>

      {mounted && open
        ? createPortal(
            <BookPreorderModal
              visible={visible}
              submitted={submitted}
              form={form}
              dialogRef={dialogRef}
              titleRef={titleRef}
              successRef={successRef}
              onBackdropMouseDown={onBackdropMouseDown}
              onClose={closeModal}
              onSubmit={handleSubmit}
              onUpdate={update}
            />,
            document.body,
          )
        : null}
    </section>
  )
}

function BookPreorderModal({
  visible,
  submitted,
  form,
  dialogRef,
  titleRef,
  successRef,
  onBackdropMouseDown,
  onClose,
  onSubmit,
  onUpdate,
}: {
  visible: boolean
  submitted: boolean
  form: FormState
  dialogRef: RefObject<HTMLDivElement | null>
  titleRef: RefObject<HTMLHeadingElement | null>
  successRef: RefObject<HTMLHeadingElement | null>
  onBackdropMouseDown: (event: MouseEvent<HTMLDivElement>) => void
  onClose: () => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  onUpdate: <K extends keyof FormState>(key: K, value: FormState[K]) => void
}) {
  const id = useId()
  const titleId = `${id}-title`
  const descriptionId = `${id}-description`

  function trapFocus(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'Tab') return
    const root = dialogRef.current
    if (!root) return
    const nodes = Array.from(
      root.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
    ).filter((node) => !node.hasAttribute('disabled') && node.tabIndex !== -1)
    if (nodes.length === 0) return
    const first = nodes[0]
    const last = nodes[nodes.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <div
      className={`fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto overscroll-contain p-4 transition-opacity duration-300 ease-out sm:p-6 motion-reduce:transition-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onMouseDown={onBackdropMouseDown}
    >
      <div
        className="absolute inset-0 bg-[#020205]/78 backdrop-blur-[6px]"
        aria-hidden="true"
        onMouseDown={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onMouseDown={(event) => event.stopPropagation()}
        onKeyDown={trapFocus}
        className={`relative my-auto flex max-h-[calc(100dvh-1.5rem)] w-full max-w-[520px] flex-col overflow-hidden rounded-[28px] border border-[#d9b45b]/35 bg-[#090b14]/80 shadow-[0_28px_80px_rgba(0,0,0,0.55),0_0_48px_rgba(217,180,91,0.14)] backdrop-blur-2xl transition duration-300 ease-out motion-reduce:transition-none sm:max-h-[calc(100dvh-3rem)] ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-2 scale-95 opacity-0'
        }`}
      >
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-[#d9b45b]/10 blur-[70px]"
          aria-hidden="true"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid size-9 cursor-pointer place-items-center rounded-full border border-white/10 text-white/55 transition-colors duration-200 hover:border-[#d9b45b]/40 hover:text-white"
        >
          <X size={16} aria-hidden="true" />
        </button>

        {submitted ? (
          <div className="relative flex flex-col items-center px-6 py-14 text-center sm:px-10 sm:py-16">
            <span className="grid size-12 place-items-center rounded-full border border-[#d9b45b]/40 bg-[#d9b45b]/12 text-[#d9b45b]">
              <Check size={22} strokeWidth={2} aria-hidden="true" />
            </span>
            <h2
              id={titleId}
              ref={successRef}
              tabIndex={-1}
              className="mt-6 font-serif text-[32px] leading-tight tracking-tight text-white outline-none sm:text-[36px]"
            >
              You&apos;re on the list.
            </h2>
            <p id={descriptionId} className="mx-auto mt-4 max-w-[32ch] text-[15px] leading-7 text-white/55">
              We&apos;ll contact you when the early edition becomes available.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-full border border-[#d9b45b] px-8 py-3.5 text-[15px] font-medium text-white transition-all duration-300 hover:bg-[#d9b45b] hover:text-black"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="relative flex min-h-0 flex-col">
            <div className="shrink-0 px-6 pb-2 pt-7 pr-14 sm:px-8 sm:pt-8 sm:pr-16">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#d9b45b]">
                Particles & Patterns
              </p>
              <h2
                id={titleId}
                ref={titleRef}
                tabIndex={-1}
                className="mt-3 font-serif text-[30px] leading-[1.1] tracking-tight text-white outline-none sm:text-[34px]"
              >
                Join the Early Access List
              </h2>
              <p id={descriptionId} className="mt-3 max-w-[40ch] text-[15px] leading-7 text-white/55">
                Reserve your interest in the early edition of Particles & Patterns.
              </p>
            </div>

            <div className="min-h-0 overflow-y-auto px-6 pb-7 pt-5 sm:px-8 sm:pb-8">
              <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                <Field id={`${id}-name`} label="Full Name" required>
                  <input
                    id={`${id}-name`}
                    name="name"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={(event) => onUpdate('name', event.target.value)}
                    className={fieldClass}
                  />
                </Field>

                <Field id={`${id}-email`} label="Email Address" required>
                  <input
                    id={`${id}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(event) => onUpdate('email', event.target.value)}
                    className={fieldClass}
                  />
                </Field>

                <Field id={`${id}-country`} label="Country" required>
                  <input
                    id={`${id}-country`}
                    name="country"
                    autoComplete="country-name"
                    required
                    value={form.country}
                    onChange={(event) => onUpdate('country', event.target.value)}
                    className={fieldClass}
                  />
                </Field>

                <Field id={`${id}-copies`} label="Number of Copies" required>
                  <div className="relative">
                    <select
                      id={`${id}-copies`}
                      name="copies"
                      required
                      value={form.copies}
                      onChange={(event) => onUpdate('copies', event.target.value)}
                      className={`${fieldClass} cursor-pointer pr-10 ${form.copies ? 'text-white' : 'text-white/30'}`}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {copyOptions.map((option) => (
                        <option key={option} value={option} className="bg-[#0b0b14] text-white">
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/45"
                      aria-hidden="true"
                    />
                  </div>
                </Field>

                <Field id={`${id}-message`} label="Message" className="col-span-2">
                  <textarea
                    id={`${id}-message`}
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={(event) => onUpdate('message', event.target.value)}
                    className={`${fieldClass} min-h-[96px] resize-y`}
                  />
                </Field>
              </div>

              <label className="mt-5 flex cursor-pointer items-start gap-3 text-[13px] leading-5 text-white/55">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  checked={form.consent}
                  onChange={(event) => onUpdate('consent', event.target.checked)}
                  className="mt-0.5 size-4 shrink-0 cursor-pointer accent-[#d9b45b]"
                />
                <span>I agree to receive updates about the book and its availability.</span>
              </label>

              <button
                type="submit"
                className="group mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#d9b45b] px-6 py-3.5 text-[15px] font-medium text-[#050711] transition-colors duration-300 hover:bg-[#e4c56f]"
              >
                Join the Early Access List
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

function Field({
  id,
  label,
  required,
  className,
  children,
}: {
  id: string
  label: string
  required?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <div className={`grid min-w-0 gap-2 ${className ?? ''}`}>
      <label htmlFor={id} className="text-[12px] font-medium tracking-[0.04em] text-white/55">
        {label}
        {required ? <span className="text-[#d9b45b]"> *</span> : null}
      </label>
      {children}
    </div>
  )
}

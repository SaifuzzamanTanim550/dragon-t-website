import { useState } from 'react'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

/* --------------------------------------------------------------------------
   The form validates and confirms, but does not send anywhere yet — a static
   site cannot receive mail on its own.

   To make it send, sign up for a form service such as Formspree, Getform, or
   Netlify Forms, then replace the body of `handleSubmit` with a fetch to the
   URL they give you. The field names below are already set up for that.
   -------------------------------------------------------------------------- */

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: 'general', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Add your name so we know who we are replying to.'
    if (!form.email.trim()) {
      next.email = 'We need an email address to reply to.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'That email address does not look right. Check it and try again.'
    }
    if (!form.message.trim()) next.message = 'Tell us what you would like to ask.'
    return next
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return
    setSent(true)
  }

  return (
    <div className="page page--parchment">
      <div className="wrap wrap--narrow">
        <header className="page__head">
          <h1 className="page__title">Contact</h1>
          <p className="page__intro">
            Questions about catering, large orders, or the opening date. The fastest
            answer is usually a message on Instagram.
          </p>
        </header>

        <Reveal>
          <div className="contact-direct">
            <a
              className="btn btn--ink"
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
            >
              Message {site.instagram.handle}
            </a>
            {site.email && (
              <a className="btn btn--ghost btn--on-light" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            )}
          </div>
        </Reveal>

        {sent ? (
          <Reveal>
            <div className="form-sent" role="status">
              <h2 className="form-sent__title">Thanks, {form.name.split(' ')[0]}</h2>
              <p>
                Your message is ready to go. Connect a form service to start delivering
                these to your inbox — the setup notes are at the top of{' '}
                <code>src/pages/Contact.jsx</code>.
              </p>
              <button className="btn btn--ink" onClick={() => setSent(false)}>
                Write another message
              </button>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p className="field__error" id="name-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p className="field__error" id="email-error">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="topic">What is this about</label>
                <select id="topic" name="topic" value={form.topic} onChange={update('topic')}>
                  <option value="general">General question</option>
                  <option value="catering">Catering or large order</option>
                  <option value="jobs">Working at the shop</option>
                  <option value="press">Press</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={update('message')}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p className="field__error" id="message-error">
                    {errors.message}
                  </p>
                )}
              </div>

              <button className="btn btn--flame btn--full" type="submit">
                Send message
              </button>
            </form>
          </Reveal>
        )}
      </div>
    </div>
  )
}

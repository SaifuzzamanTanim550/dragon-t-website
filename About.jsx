import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

/* --------------------------------------------------------------------------
   TO DO: the words below are a starting point, not your real story.
   Replace them with how the shop actually came about — who started it, why
   Nostrand Avenue, what you want people to taste. Specific beats polished.
   -------------------------------------------------------------------------- */

export default function About() {
  return (
    <div className="page page--parchment">
      <div className="wrap">
        <header className="page__head">
          <h1 className="page__title">Our story</h1>
          <p className="page__intro">
            A small tea shop on Nostrand Avenue, built around drinks we wanted to
            drink ourselves.
          </p>
        </header>

        <div className="prose">
          <Reveal>
            <p>
              Dragon T started with a simple complaint: good bubble tea in this part of
              Brooklyn meant a train ride. We wanted a place close enough to walk to,
              open late enough to matter, with tea worth the trip anyway.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <Photo
              src="interior.jpg"
              alt="Inside the shop"
              ratio="16 / 9"
              label="interior.jpg"
              tone="light"
              className="prose__photo"
            />
          </Reveal>

          <Reveal>
            <h2 className="prose__heading">How we make it</h2>
            <p>
              Tea is brewed through the day rather than held overnight. Tapioca is cooked
              in small batches so it stays soft. Brown sugar syrup is cooked down in
              house, which is why the stripes in the cup are never quite the same twice.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="prose__heading">The name</h2>
            <p>
              The dragon is for the tea leaf, which curls the same way, and the T is for
              tea and for the lightning in the logo. It is on the wall in neon. You will
              see it before you see the door.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="prose__heading">What is next</h2>
            <p>
              {site.comingSoon
                ? 'We are getting the shop ready now. Opening news goes up on Instagram before anywhere else.'
                : 'New seasonal drinks land through the year. Instagram gets them first.'}
            </p>
            <a
              className="link-underline link-underline--dark"
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
            >
              Follow {site.instagram.handle}
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

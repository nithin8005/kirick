import { useState } from 'react'

import { faqs } from '../data/content'



const INITIAL_VISIBLE = 6



export default function FAQ() {

  const [showAll, setShowAll] = useState(false)

  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_VISIBLE)

  const remaining = faqs.length - INITIAL_VISIBLE



  return (

    <div className="page page--faq">

      <section className="page-hero section section--alt">

        <div className="container page-hero__inner center">

          <p className="eyebrow">Help center</p>

          <h1>Frequently asked questions</h1>

          <p className="page-hero__lead">

            Quick answers about ingredients, orders, and how to enjoy KIRIK Dosa Chips.

          </p>

        </div>

      </section>



      <section className="section faq-section">

        <div className="container faq-page">

          <p className="faq-page__count">

            Showing {visibleFaqs.length} of {faqs.length} questions

          </p>



          <div className="faq-accordion" role="list">

            {visibleFaqs.map((f) => (

              <details key={f.question} className="faq-item faq-item--pro" role="listitem">

                <summary>{f.question}</summary>

                <div className="faq-item__answer">

                  <p>{f.answer}</p>

                </div>

              </details>

            ))}

          </div>



          {remaining > 0 && (

            <div className="faq-page__actions">

              <button

                type="button"

                className="btn btn--outline faq-page__toggle"

                onClick={() => setShowAll((open) => !open)}

                aria-expanded={showAll}

              >

                {showAll

                  ? 'Show fewer questions'

                  : `Show ${remaining} more questions`}

              </button>

            </div>

          )}



          <div className="faq-page__contact">

            <h2 className="faq-page__contact-title">Still have questions?</h2>

            <p>

              Reach us at{' '}

              <a href="mailto:info@kirikdosachips.in">info@kirikdosachips.in</a>

              {' '}or call{' '}

              <a href="tel:+918792970795">+91 87929 70795</a>.

            </p>

          </div>

        </div>

      </section>

    </div>

  )

}



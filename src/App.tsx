import { useMemo, useState } from 'react'
import './App.css'

const amounts = [10, 25, 50, 100]

function App() {
  const [amount, setAmount] = useState(25)
  const [customAmount, setCustomAmount] = useState('')

  const selectedAmount = useMemo(() => {
    const parsed = Number(customAmount)
    return customAmount && Number.isFinite(parsed) && parsed > 0 ? parsed : amount
  }, [amount, customAmount])

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Geek home">
          <span className="brand-mark" aria-hidden="true">G</span>
          <span>Geek 😂</span>
        </a>

        <button className="share-button" type="button" aria-label="Share fundraiser">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4m0 0L8 8m4-4 4 4M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" /></svg>
          Share
        </button>
      </header>

      <section className="hero" aria-labelledby="fundraiser-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" />Geek fund</div>
          <h1 id="fundraiser-title">help smolgeek to pay his fees and keep balling</h1>
          <div className="identity-row" aria-label="Fundraiser organizer">
            <div className="avatar" aria-hidden="true">SG</div>
            <div><strong>smolgeek</strong><span>Organizer</span></div>
          </div>
        </div>

        <aside className="donation-card" aria-label="Donation panel">
          <div className="card-topline">
            <span>Support smolgeek</span>
            <span className="secure-pill">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 10V7a4 4 0 0 1 8 0v3m-9 0h10a1 1 0 0 1 1 1v8H6v-8a1 1 0 0 1 1-1Z" /></svg>
              Secure
            </span>
          </div>

          <div className="amount-display"><span>$</span><strong>{selectedAmount.toLocaleString()}</strong></div>

          <div className="amount-grid" aria-label="Choose donation amount">
            {amounts.map((value) => (
              <button
                className={amount === value && !customAmount ? 'amount-option active' : 'amount-option'}
                type="button"
                key={value}
                onClick={() => { setAmount(value); setCustomAmount('') }}
              >
                ${value}
              </button>
            ))}
          </div>

          <label className="custom-amount">
            <span>$</span>
            <input
              inputMode="decimal"
              min="1"
              type="number"
              value={customAmount}
              onChange={(event) => setCustomAmount(event.target.value)}
              placeholder="Other amount"
              aria-label="Custom donation amount"
            />
          </label>

          <button className="donate-button" type="button">
            Donate ${selectedAmount.toLocaleString()}
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" /></svg>
          </button>
        </aside>
      </section>
    </main>
  )
}

export default App

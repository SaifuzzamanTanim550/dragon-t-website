import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page page--ink page--center">
      <div className="wrap wrap--narrow">
        <h1 className="page__title">That page is not on the menu</h1>
        <p className="page__intro">
          The link may be old, or the address may have a typo in it. The menu and the
          shop details are both a click away.
        </p>
        <div className="hero__actions">
          <Link className="btn btn--flame" to="/menu">
            See the menu
          </Link>
          <Link className="btn btn--ghost" to="/">
            Back to the home page
          </Link>
        </div>
      </div>
    </div>
  )
}

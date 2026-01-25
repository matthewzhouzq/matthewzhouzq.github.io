import { useNavigate } from 'react-router-dom'

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <div className="buttons back">
      <button
        onClick={() => navigate(-1)}
        onMouseEnter={() => (window.__UI_HOVERING__ = true)}
        onMouseLeave={() => (window.__UI_HOVERING__ = false)}
      >
        Back
      </button>
    </div>
  )
}
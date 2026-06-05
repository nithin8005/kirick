export default function DosaBabuAvatar({ size = 'md', className = '' }) {
  return (
    <span
      className={`dosa-babu-dosa dosa-babu-dosa--${size} ${className}`.trim()}
      aria-hidden="true"
    >
      <span className="dosa-babu-dosa__steam" />
      <span className="dosa-babu-dosa__tawa" />
      <span className="dosa-babu-dosa__crisp">
        <span className="dosa-babu-dosa__face">
          <span className="dosa-babu-dosa__eye" />
          <span className="dosa-babu-dosa__eye" />
          <span className="dosa-babu-dosa__smile" />
        </span>
      </span>
    </span>
  )
}

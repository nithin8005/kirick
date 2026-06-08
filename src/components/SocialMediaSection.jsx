import ImagePlaceholder from './ImagePlaceholder'

const socialPosts = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  label: `Social post ${i + 1} — Instagram / feed`,
}))

export default function SocialMediaSection() {
  return (
    <section className="social-wire section section--warm">
      <div className="container">
        <h2 className="wire-title wire-title--center">Social Media</h2>
        <div className="social-wire__feed">
          {socialPosts.map((post) => (
            <div key={post.id} className="social-wire__post">
              <ImagePlaceholder
                label={post.label}
                aspect="3/4"
                variant="banner"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

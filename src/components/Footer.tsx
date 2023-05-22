export function Footer() {
  return (
    <footer className="flex items-center justify-center gap-8 w-full h-24 border-t border-gray-800">
      <img src="/images/logo-developers.webp" alt="InfoJobs logo" className="w-24 h-auto" />
      <div className="flex gap-4">
        <a href="/" rel="nofollow noreferrer" target="_blank">Politica de privacidad</a>
        <span>·</span>
        <a href="/" rel="nofollow noreferrer" target="_blank">Condiciones de uso</a>
        <span>·</span>
        <a href="/" rel="nofollow noreferrer" target="_blank">Sobre tus datos</a>
      </div>
    </footer>
  )
}
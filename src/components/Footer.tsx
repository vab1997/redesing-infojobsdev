export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 md:gap-8 w-full py-10 border-t border-gray-800 md:flex-row">
      <img src="/images/logo-developers.webp" alt="InfoJobs logo" className="w-24 h-auto" />
      <div className="flex flex-col items-center leading-[8px] gap-4 md:flex-row">
        <a href="/" rel="nofollow noreferrer" target="_blank">Politica de privacidad</a>
        <span className="hidden md:block">·</span>
        <a href="/" rel="nofollow noreferrer" target="_blank">Condiciones de uso</a>
        <span className="hidden md:block">·</span>
        <a href="/" rel="nofollow noreferrer" target="_blank">Sobre tus datos</a>
      </div>
    </footer>
  )
}
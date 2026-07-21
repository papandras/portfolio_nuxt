import AOS from "aos"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", () => {
    AOS.init({
      once: true,
      disable: () => window.innerWidth < 768,
    })
  })

  // Refresh AOS on page navigation instead of re-initializing to prevent memory leaks
  nuxtApp.hook("page:finish", () => {
    if (window.innerWidth < 768) {
      document.querySelectorAll('[data-aos]').forEach(el => {
        el.removeAttribute('data-aos')
      })
    } else {
      AOS.refresh()
    }
  })
})

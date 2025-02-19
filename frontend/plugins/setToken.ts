import { useCookie } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const tokenCookie = useCookie('_aw_CKT0K3N_')

  if (!tokenCookie.value) {
    const newToken = self.crypto.randomUUID()
    tokenCookie.value = newToken
  }
})

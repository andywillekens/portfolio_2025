export default defineEventHandler((event) => {
  const requestUrl = getRequestURL(event).pathname

  // If the request path starts with /api, we check if the token in the URL matches the token in the cookie
  if (requestUrl.startsWith('/api')) {
    const query = getQuery(event)
    const cookies = parseCookies(event)

    const urlToken = query.token
    const cookieToken = cookies._aw_CKT0K3N_

    if (!urlToken || !cookieToken || urlToken !== cookieToken) {
      return {
        status: 401,
        data: {
          message: 'Unauthorized'
        }
      }
    }
  }
})

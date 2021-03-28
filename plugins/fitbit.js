import nuxtConfig from '~/nuxt.config'

function connectFitBit () {
  window.location = `${nuxtConfig.fitbit.authUri}?response_type=token&client_id=${nuxtConfig.fitbit.clientId}&redirect_uri=${nuxtConfig.fitbit.redirectUri}&expires_in=2592000&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight`
}

export default (_, inject) => {
  inject('connectFitbit', connectFitBit)
}

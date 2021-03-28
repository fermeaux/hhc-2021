<template>
  <div>
    <h1>{{ state == 'error' ? 'Une erreur est survenue' : 'Patientez un instant, nous prenons en charge votre connexion FitBit' }}</h1>
  </div>
</template>

<script>
function parseHash () {
  const hash = window.location.hash.substr(1)
  return hash.split('&').reduce(function (result, item) {
    const parts = item.split('=')
    result[parts[0]] = parts[1]
    return result
  }, {})
}

export default {
  data () {
    return { state: 'loading' }
  },
  mounted () {
    const token = parseHash().access_token
    if (token == null || token.length === 0) {
      this.state = 'error'
      return
    }
    localStorage.setItem('fitbit-token', token)
    this.$router.push({ path: '/health' })
  }
}
</script>

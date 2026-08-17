// Git Gateway pa den har sajten kraver rollen "admin" (Identity > Services > Git Gateway).
// Saknar den inloggade anvandaren rollen svarar Decap CMS med
// "You don't have sufficient permissions to access Decap CMS".
//
// Registrering ar stangd pa sajten (invite only), sa bara personer som agaren
// bjuder in kan fa ett Identity-konto. Darfor far varje inbjuden anvandare
// rollen "admin" automatiskt, i stallet for att den ska sattas manuellt i Netlify.
//
// Vill du styra rollerna manuellt i stallet: ta bort den har filen och satt
// rollen pa varje anvandare under Identity > Users i Netlify.

const REQUIRED_ROLE = 'admin'

function withRequiredRole(user) {
  // Funktionen kors vid varje inloggning. Ett fel har skulle blockera inloggningen,
  // sa vi lamnar anvandaren orord om nagot saknas i eventet.
  if (!user) {
    return undefined
  }

  const appMetadata = user.appMetadata || {}
  const roles = Array.isArray(appMetadata.roles) ? appMetadata.roles : []

  // Redan ratt roll - lamna anvandaren orord sa vi inte skriver over annan metadata.
  if (roles.includes(REQUIRED_ROLE)) {
    return undefined
  }

  return {
    user: {
      ...user,
      appMetadata: { ...appMetadata, roles: [...roles, REQUIRED_ROLE] },
    },
  }
}

export default {
  // Nya inbjudna anvandare far rollen nar de accepterar inbjudan och satter losenord.
  userSignup(event) {
    return withRequiredRole(event.user)
  },

  // Befintliga anvandare som redan saknar rollen far den vid nasta inloggning,
  // sa att JWT:n Decap laser innehaller "admin".
  userLogin(event) {
    return withRequiredRole(event.user)
  },
}

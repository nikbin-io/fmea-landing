import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './CookieConsent.module.scss'

type ConsentValue = {
  analytics: boolean
  marketing: boolean
}

type ConsentModeValue = 'granted' | 'denied'

type ConsentModeUpdate = {
  analytics_storage?: ConsentModeValue
  ad_storage?: ConsentModeValue
  ad_user_data?: ConsentModeValue
  ad_personalization?: ConsentModeValue
  personalization_storage?: ConsentModeValue
  functionality_storage?: ConsentModeValue
  security_storage?: ConsentModeValue
}

type CookieConsentProps = {
  storageKey?: string
  privacyPolicyUrl?: string
  className?: string
  onConsentChange?: (value: ConsentValue) => void
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const DEFAULT_STORAGE_KEY = 'cookie_consent_v1'

const getCookie = (name: string) => {
  if (typeof document === 'undefined') return null

  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${encodeURIComponent(name)}=`))
  if (!match) return null

  const [, value] = match.split('=')
  return value ? decodeURIComponent(value) : null
}

const setCookie = (name: string, value: string, maxAgeDays = 365) => {
  if (typeof document === 'undefined') return

  const maxAgeSeconds = Math.floor(maxAgeDays * 24 * 60 * 60)
  const secure =
    typeof location !== 'undefined' && location.protocol === 'https:'
  const securePart = secure ? '; Secure' : ''

  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax${securePart}`
}

const parseStoredValue = (raw: string | null): ConsentValue | null => {
  if (!raw) return null

  try {
    const parsed: unknown = JSON.parse(raw)
    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      'analytics' in parsed &&
      'marketing' in parsed &&
      typeof (parsed as Record<string, unknown>).analytics === 'boolean' &&
      typeof (parsed as Record<string, unknown>).marketing === 'boolean'
    ) {
      return {
        analytics: (parsed as Record<string, boolean>).analytics,
        marketing: (parsed as Record<string, boolean>).marketing
      }
    }
    return null
  } catch {
    return null
  }
}

const toConsentModeUpdate = (value: ConsentValue): ConsentModeUpdate => {
  const analytics: ConsentModeValue = value.analytics ? 'granted' : 'denied'
  const marketing: ConsentModeValue = value.marketing ? 'granted' : 'denied'

  return {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
    personalization_storage: marketing,
    functionality_storage: 'granted',
    security_storage: 'granted'
  }
}

const applyConsentModeUpdate = (update: ConsentModeUpdate) => {
  if (typeof window === 'undefined') return

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', update)
    return
  }

  if (!Array.isArray(window.dataLayer)) {
    window.dataLayer = []
  }

  if (typeof window.gtag !== 'function') {
    window.gtag = function () {
      window.dataLayer?.push(arguments as unknown as unknown[])
    }
  }

  window.gtag('consent', 'update', update)
}

const PREFERENCE_OPTIONS = [
  {
    id: 'necessary',
    title: 'Necessary',
    description:
      'These are essential for the site to work. They handle key tasks like keeping you logged in, managing your privacy settings, and ensuring security. They cannot be switched off.',
    required: true
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description:
      'Help us improve. These cookies let us see how you move around the site so we can fix bugs, spot popular pages, and make your overall experience smoother.',
    required: false
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description:
      'Keep it relevant. Instead of seeing random ads, enabling these allows us to show you offers and content that actually match your interests and needs.',
    required: false
  }
]

const CookieConsent = ({
  storageKey = DEFAULT_STORAGE_KEY,
  onConsentChange
}: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false)
  const [draft, setDraft] = useState<ConsentValue>({
    analytics: false,
    marketing: false
  })

  const persistAndApply = (value: ConsentValue) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(storageKey, JSON.stringify(value))
    }

    setCookie(storageKey, JSON.stringify(value))

    applyConsentModeUpdate(toConsentModeUpdate(value))
    onConsentChange?.(value)
    setIsVisible(false)
    setIsPreferencesOpen(false)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const stored =
      parseStoredValue(getCookie(storageKey)) ||
      parseStoredValue(window.localStorage.getItem(storageKey))

    if (stored) {
      setDraft(stored)
      window.localStorage.setItem(storageKey, JSON.stringify(stored))
      applyConsentModeUpdate(toConsentModeUpdate(stored))
      setIsVisible(false)
      return
    }

    applyConsentModeUpdate(
      toConsentModeUpdate({ analytics: false, marketing: false })
    )
    setIsVisible(true)
  }, [storageKey])

  if (!isVisible) return null

  return (
    <div className={styles.wrapper} data-cookie-consent>
      <div className={styles.content}>
        <div>
          <div className={styles.title}>We value your privacy</div>

          <div className={styles.description}>
            We use cookies to enhance your experience and to analyze traffic.
            You can accept all cookies, reject non-essential cookies, or manage
            your preferences.
            <Link href="/privacy-policy" rel="noreferrer" target="_blank">
              {' '}
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={`${styles.button} ${styles.buttonSecondary}`}
            type="button"
            onClick={() => setIsPreferencesOpen(true)}>
            Manage Cookies
          </button>

          <button
            className={`${styles.button} ${styles.buttonPrimary}`}
            type="button"
            onClick={() =>
              persistAndApply({ analytics: true, marketing: true })
            }>
            Accept all
          </button>
        </div>
      </div>

      {isPreferencesOpen ? (
        <div
          aria-modal="true"
          className={styles.overlay}
          role="dialog"
          onClick={() => setIsPreferencesOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle}>Cookie preferences</div>
            </div>

            <div className={styles.modalBody}>
              {PREFERENCE_OPTIONS.map((item) => {
                const Wrapper = item.required ? 'div' : 'label'

                return (
                  <Wrapper className={styles.preferenceRow} key={item.id}>
                    <div className={styles.preferenceTitle}>
                      <p>{item.title}</p>

                      {item.required ? (
                        <div className={styles.badge}>Always on</div>
                      ) : (
                        <input
                          checked={draft[item.id as keyof ConsentValue]}
                          className={styles.toggle}
                          type="checkbox"
                          onChange={(e) =>
                            setDraft((prev) => ({
                              ...prev,
                              [item.id]: e.target.checked
                            }))
                          }
                        />
                      )}
                    </div>

                    <div className={styles.preferenceDesc}>
                      {item.description}
                    </div>
                  </Wrapper>
                )
              })}
            </div>

            <div className={styles.modalActions}>
              <button
                className={`${styles.button} ${styles.buttonSecondary}`}
                type="button"
                onClick={() =>
                  persistAndApply({ analytics: false, marketing: false })
                }>
                Necessary Only{' '}
              </button>

              <button
                className={`${styles.button} ${styles.buttonPrimary}`}
                type="button"
                onClick={() => persistAndApply(draft)}>
                Save My Choices
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default CookieConsent

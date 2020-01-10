import { MessageObject } from './types'
import { getCurrentLocale } from './stores/locale'
import { getOptions } from './configs'
import { flush } from './includes/loaderQueue'

// defineMessages allow us to define and extract dynamic message ids
export function defineMessages(i: Record<string, MessageObject>) {
  return i
}

export function waitLocale(locale?: string) {
  return flush(locale || getCurrentLocale() || getOptions().initialLocale)
}

export { init } from './configs'
export { $locale as locale } from './stores/locale'
export {
  $dictionary as dictionary,
  $locales as locales,
  addMessages,
} from './stores/dictionary'
export { $isLoading as isLoading } from './stores/loading'
export { $format as format, $format as _, $format as t } from './stores/format'
export {
  getDateFormatter,
  getNumberFormatter,
  getTimeFormatter,
  getMessageFormatter,
} from './includes/formatters'
// utilities
export { registerLocaleLoader as register } from './includes/loaderQueue'

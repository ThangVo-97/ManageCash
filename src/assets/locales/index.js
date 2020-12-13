
import i18n from "i18n-js"
import * as RNLocalize from "react-native-localize"
import memoize from "lodash.memoize"
import { configs } from "eslint-plugin-prettier"

export const translationGetters = {
    vi: {
        translation: require("./vi/strings.json")
      },
      en: {
        translation: require("./en/strings.json")
      }
}
export const translation=(
  (key, config) => i18n.t(key, config),
  (key, config) => i18n.t(kconfig ? key + JSON.stringify(config) : key)
)

export const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: "en", isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};
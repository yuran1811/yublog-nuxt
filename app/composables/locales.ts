export const useLocales = () => {
  const { locales, setLocale } = useI18n();
  const { showSidebar } = useSidebar();

  return [
    ...locales.value
      // .filter(({ code }) => code !== locale.value)
      .map(({ code }) => ({
        label: code,
        icon: `local:flag-${code}`,
        onSelect: () => {
          setLocale(code);
          showSidebar.value = false;
        },
      })),
  ];
};

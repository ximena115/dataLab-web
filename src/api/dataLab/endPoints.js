const Settings = {
    main: process.env.NODE_ENV === "development" ? "https://dev-api.oneterminal.co/api/" : "https://dev-api.oneterminal.co/api/",
    login: "auth/login",
};

export function formatApiUrl(...args) {
    let s = arguments[0];
    for (let i = 0; i < arguments.length - 1; i += 1) {
      const reg = new RegExp("\\{" + i + "\\}", "gm");
      s = s.replace(reg, arguments[i + 1]);
    }
    return s;
  }

export function parseApiUrl(endpoint, ...args) {
    const localEnd = formatApiUrl(Settings[endpoint], ...args);
    return Settings.main + localEnd;
  }

export const getToken = () => {
    if (localStorage.getItem('Auth') != null) {
        const auth = JSON.parse(localStorage.getItem('Auth'));
        const Expiration = new Date(auth.Expiration);
        return Expiration >= new Date() ? auth.Token : '';
    }
    return '';
};

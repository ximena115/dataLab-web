export const STORAGE_VERSION = "0.1";

export const loadState = () => {
  try {
    if (localStorage.getItem("storage_version") !== STORAGE_VERSION) {
      localStorage.setItem("storage_version", STORAGE_VERSION);
      return {};
    }

    if (tokenIsExpired()) window.location.href="/login";

    const serializedData = atob(localStorage.getItem("state"));
    if (serializedData === null) {
      return {};
    }
   
    return JSON.parse(serializedData);
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const tokenIsExpired = () => {
  if (localStorage.getItem("Auth") != null) {
    const auth = JSON.parse(localStorage.getItem("Auth"));
    const Expiration = new Date(auth.Expiration);
    if (Expiration < new Date()){
      localStorage.removeItem("Auth");
      localStorage.setItem("state", {});
      return true;
    } 
    return false;
  }
  return false;
};

export const saveState = state => {
  try {
    const saveModules = [
      "authReducer",
    ];
    const dataToSave = {};

    Object.keys(state).map(function(key, index) {
      if (saveModules.includes(key)) {
        dataToSave[key] = state[key];
      }
    });
    const serializedData = JSON.stringify(dataToSave);

    localStorage.setItem("state", btoa(serializedData));
  } catch (error) {
    console.log(error);
  }
};

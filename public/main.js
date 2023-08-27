const getCodeYoutube = (url) => {
  const regex = /[?&]v=([^&]+)/;
  const match = url.match(regex);
  if (match) {
    return match[1];
  } else {
    return null;
  }
};

const convertLink = (url, kind, device = "DESKTOP") => {
  const afterDomain = url.split(".com")[1];
  if (device === "DESKTOP") {
    return url;
  }
  if (kind === "INSTAGRAM") {
    return `instagram://user?username=${afterDomain}`;
  }
  if (kind === "FACEBOOK") {
    return `fb://profile${afterDomain}`;
  }
  if (kind === "YOUTUBE") {
    const newDomain = getCodeYoutube(url);
    if (device === "ANDROID") {
      return `vnd.youtube:${newDomain}`;
    } else {
      return `youtube:${newDomain}`;
    }
  }
};

const getDevices = () => {
  const userAgent = window.navigator.userAgent;
  if (userAgent.match(/Android/i)) {
    return "ANDROID";
  } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
    return "IOS";
  } else if (userAgent.match(/Mac OS/i)) {
    return "DESKTOP";
  } else if (userAgent.match(/Windows/i)) {
    return "DESKTOP";
  } else {
    return "DESKTOP";
  }
};

const getKind = (url) => {
  const kind = url.toLowerCase();
  if (kind.match(/youtube/i)) {
    return "YOUTUBE";
  }
  if (kind.match(/facebook/i)) {
    return "FACEBOOK";
  }
  if (kind.match(/instagram/i)) {
    return "INSTAGRAM";
  }
  return undefined;
};

/**
 * Main function that redirects to a specific link based on the provided device and URL.
 *
 * @param {string} url - The URL to be used for generating the link.
 * @returns {void}
 */
const main = (url) => {
  const device = getDevices();
  const kind = getKind(url);
  const link = convertLink(url, kind, device);

  if (device === "IOS") {
    window.location = link;
  } else {
    window.open(link);
  }
};

export default main;

// const url = "https://www.youtube.com/watch?v=ApXoWvfEYVU&ab_channel=PostMaloneVEVO";
// const url = "https://www.instagram.com/hideo_kojima/";
// const url = "https://www.facebook.com/eminem";
// const url = "https://www.facebook.com/100044534585203";

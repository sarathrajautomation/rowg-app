const url = (url: String) => {
  const target = "/media";
  const index = url.indexOf("media/") + "media/".length;

  return url.slice(0, index) + "crop/600/600" + url.slice(index);
};

export default url;

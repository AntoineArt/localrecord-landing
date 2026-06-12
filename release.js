(function () {
  const REPO = "AntoineArt/localrecord";
  const ASSET_NAME = "localrecord.exe";
  const FALLBACK_DOWNLOAD =
    "https://github.com/" + REPO + "/releases/latest/download/" + ASSET_NAME;
  const FALLBACK_RELEASE = "https://github.com/" + REPO + "/releases/latest";

  const versionEl = document.getElementById("release-version");
  const downloadLinks = document.querySelectorAll("[data-download-link]");

  function setDownloadLinks(url) {
    for (const link of downloadLinks) {
      link.href = url;
    }
  }

  function setVersion(tag) {
    if (versionEl) {
      versionEl.textContent = tag.replace(/^v/, "");
    }
  }

  setDownloadLinks(FALLBACK_DOWNLOAD);
  setVersion("…");

  fetch("https://api.github.com/repos/" + REPO + "/releases/latest", {
    headers: { Accept: "application/vnd.github+json" },
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("GitHub API " + response.status);
      }
      return response.json();
    })
    .then(function (release) {
      setVersion(release.tag_name || "latest");

      const asset = (release.assets || []).find(function (a) {
        return a.name === ASSET_NAME;
      });

      if (asset && asset.browser_download_url) {
        setDownloadLinks(asset.browser_download_url);
      } else {
        setDownloadLinks(FALLBACK_DOWNLOAD);
      }

      if (versionEl && release.html_url) {
        versionEl.closest("p")?.querySelector("[data-releases-link]")?.setAttribute("href", release.html_url);
      }
    })
    .catch(function () {
      setVersion("latest");
      setDownloadLinks(FALLBACK_DOWNLOAD);
    });
})();

export function addCustomStyling(content: string) {
  content = content.replace(/<pre>/g, '<pre class="custom-styling">');
  content = content.replace(
    /<blockquote>/g,
    '<blockquote class="block-styling"><div class="quote-styling"><img src="/icons/icon-quotes.svg" alt="" class="quote-img" /></div>'
  );

  content = content.replace(
    /<ol[^>]*>([\s\S]*?)<\/ol>/g,
    function (match, innerHTML) {
      const listContent = innerHTML.trim();
      // Replace the <li> tags with <div> tags
      const modifiedContent = listContent.replace(
        /<li(?:\s+[^>]*)*>([\s\S]*?)<\/li>/g,
        "<div>$1</div>"
      );

      // Wrap the modified content in a grid container
      const gridContent = `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; justify-items: center">${modifiedContent}</div>`;

      return gridContent;
    }
  );

  content = content.replace(
    /<a\s+(?=[^>]*class="iframe")[^>]*href="([^"]*)"[^>]*>.*?<\/a>/g,
    function (match, href) {
      var src = getHrefFromAnchor(match);
      var youtubelinks = transformYouTubeLink(src);
      var googledrivelink = transformToPreviewLink(youtubelinks);
      return (
        '<div class="i-frame-div"><iframe class="iframe-video" allowfullscreen width="420" height="315" src=" ' +
        googledrivelink +
        ' "></iframe></div>'
      );
    }
  );
  //   console.log(content);
  return content;
}
const getHrefFromAnchor = (anchorTagString: any) => {
  const regex = /href="(.*?)"/g;
  const match = regex.exec(anchorTagString);
  if (match) {
    return match[1];
  } else {
    return anchorTagString;
  }
};
const transformYouTubeLink = (link: any) => {
  var regExp =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})(?:.+)?$/;
  if (regExp.test(link)) {
    var match = link.match(regExp);
    if (match && match[1]) {
      var videoId = match[1];
      return "https://www.youtube.com/embed/" + videoId;
    } else {
      return link;
    }
  } else {
    return link;
  }
};
const transformToPreviewLink = (driveLink: any) => {
  const regex = /^https:\/\/drive\.google\.com\/file\/d\//;
  if (regex.test(driveLink)) {
    const match = driveLink.match(/\/d\/([^/]+)/);
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  } else {
    return driveLink;
  }
};

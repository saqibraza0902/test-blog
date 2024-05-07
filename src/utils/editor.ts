export const config = {
  readonly: false,
  spellcheck: true,
  iframe: true,
  toolbarSticky: false,
  allowScritp: true,
  enableDragAndDropFileToEditor: true,
  uploader: {
    insertImageAsBase64URI: true,
    url: "/uploadImage",
    format: "json",
    filesVariableName: "file",
    withCredentials: false,
    prepareData: (formData: any) => {
      return formData;
    },
    isSuccess: (response: any) => {
      return response && response.url;
    },
    getMessage: (response: any) => {
      return response.url;
    },
  },
};

declare const UpSignOn: {
  addButtonContent: (
    buttonContainer: HTMLElement,
    protocolURI: string,
    uiConfig: {
      logoWidth?: number | undefined;
      padding?: string | undefined;
      spaceBetween?: string | undefined;
      borderRadius?: string | undefined;
    }
  ) => void;
  changeText: (
    buttonContainer: HTMLElement,
    innerHTML: HTMLElement,
    removeFallbackWebsiteLink: boolean
  ) => void;
  getProtocolURI: (request: { url: string; buttonId: string; connectionToken?: string }) => string;
  getSVGLogo: (width: number) => string;
  getButtonText: () => string;
  color: string;
};

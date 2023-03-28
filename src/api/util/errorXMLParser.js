export const errorXMLParser = (xmlString) => {
  const parser = new DOMParser();
  const errorXML = parser.parseFromString(xmlString, "text/xml");

  const errorMsg = errorXML.querySelector("errMsg").textContent;
  const authMsg = errorXML.querySelector("returnAuthMsg").textContent;
  const errorCode = errorXML.querySelector("returnReasonCode").textContent;

  return {
    errorMsg,
    authMsg,
    errorCode,
  };
};

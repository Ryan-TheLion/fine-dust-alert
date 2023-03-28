import React from "react";
import {
  API_ACCESS_DENIED_ERROR_MESSAGE,
  API_APP_ERROR_MESSAGE,
  API_ERROR_TYPE,
  API_EXCEEDS_ERROR_MESSAGE,
  API_EXPIERED_ERROR_MESSAGE,
  API_HTTP_ERROR_MESSAGE,
  API_KEY_IS_NOT_REGISTERED_ERROR_MESSAGE,
  API_NO_OPENAPI_SERVICE_ERROR_MESSAGE,
  API_UNREGISTERED_IP_ERROR_MESSAGE,
} from "../../api/errors/constansts";
import * as Styled from "./style";

function ErrorContent({ error, resetErrorBoundary }) {
  const renderContent = (error) => {
    if (error.name === API_ERROR_TYPE) {
      switch (error.message) {
        case API_EXCEEDS_ERROR_MESSAGE:
          return `일일 사용량이 초과되어 사이트를 이용할 수 없습니다.\n익일 다시 시도해주세요`;
        case API_NO_OPENAPI_SERVICE_ERROR_MESSAGE:
        case API_EXPIERED_ERROR_MESSAGE:
          return `사이트가 만료되어 서비스를 제공할 수 없습니다.`;
        case API_KEY_IS_NOT_REGISTERED_ERROR_MESSAGE:
        case API_ACCESS_DENIED_ERROR_MESSAGE:
        case API_UNREGISTERED_IP_ERROR_MESSAGE:
        case API_HTTP_ERROR_MESSAGE:
        case API_APP_ERROR_MESSAGE:
          return `사이트 에러로 지금 서비스를 제공해드리기 어렵습니다\n최대한 빠른 시일내에 조치하도록 노력하겠습니다`;
        default:
          return `일시적인 장애가 발생하였습니다.\n잠시뒤에 다시 시도해주세요`;
      }
    }

    return `일시적인 장애가 발생하였습니다.\n잠시뒤에 다시 시도해주세요`;
  };

  return (
    <Styled.ErrorContent>
      <Styled.RefreshIcon
        onClick={(e) => resetErrorBoundary()}
        title="새로고침"
      />
      {renderContent(error)}
    </Styled.ErrorContent>
  );
}

function ErrorPage({ error, resetErrorBoundary }) {
  return (
    <Styled.ErrorPage>
      <Styled.ErrorHeader>
        <Styled.ErrorIcon />
        이용에 불편을 드려 죄송합니다
      </Styled.ErrorHeader>
      <ErrorContent error={error} resetErrorBoundary={resetErrorBoundary} />
    </Styled.ErrorPage>
  );
}

export default ErrorPage;

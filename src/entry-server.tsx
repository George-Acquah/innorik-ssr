import { StrictMode } from "react";
import {
  type RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppRouter from "./router";
import ExtendedError, { ExtendedErrorProps } from "./components/extended-error";
import { ConfiguratorProvider } from "./utils";
import ModalProvider from "./utils/contexts/modal.context";

interface _IRenderProps extends ExtendedErrorProps {
  path: string;
  statusCode?: number;
}

export function render(
  _url: string,
  _ssrManifest?: string,
  options?: RenderToPipeableStreamOptions,
  renderProps?: _IRenderProps
) {
  const { statusCode } = renderProps || {};

  if (statusCode) {
    return renderToPipeableStream(<ExtendedError statusCode={statusCode} />);
  }

  return renderToPipeableStream(
    <StrictMode>
      <StaticRouter location={_url}>
        <ConfiguratorProvider>
          <ModalProvider>
            <AppRouter />
          </ModalProvider>
        </ConfiguratorProvider>
      </StaticRouter>
    </StrictMode>,
    options
  );
}

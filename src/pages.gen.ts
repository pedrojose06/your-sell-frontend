// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as About_getConfig } from './pages/about';
// prettier-ignore
import type { getConfig as Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as Products_getConfig } from './pages/products';
// prettier-ignore
import type { getConfig as UsersFeedback_getConfig } from './pages/users-feedback';

// prettier-ignore
type Page =
| ({ path: '/about' } & GetConfigResponse<typeof About_getConfig>)
| ({ path: '/' } & GetConfigResponse<typeof Index_getConfig>)
| ({ path: '/products' } & GetConfigResponse<typeof Products_getConfig>)
| ({ path: '/users-feedback' } & GetConfigResponse<typeof UsersFeedback_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
  
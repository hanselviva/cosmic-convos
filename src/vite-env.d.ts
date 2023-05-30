interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  VITE_OPENAI_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

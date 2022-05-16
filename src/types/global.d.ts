declare namespace NodeJS {
  interface Process {
    readonly browser: boolean;
  }

  interface ProcessEnv {
    readonly APP_ENV: 'development' | 'production' | 'local';
  }
}

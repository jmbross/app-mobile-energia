export interface ILoginViewProps {
  /**
   * 로그인 상태
   */
  isAuthenticated: boolean;

  /**
   * Register 프로세스를 진행한다
   */
  onStarted: () => void;

  /**
   * Login 프로세스를 진행한다
   */
  onSignIn: () => void;

  /**
   * 로그인 상태에서 재로그인 프로세스를 진행한다
   */
  onContinue: () => void;

  /**
   * Logout 프로세르를 진행한다
   */
  onLogout: () => void;
}

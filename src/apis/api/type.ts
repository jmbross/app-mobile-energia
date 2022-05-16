export interface ApiProps {
  url: string;
  headers?: object;
  payload?: object;
  useParams?: boolean;
}

export interface ApiRequestProps extends ApiProps {
  method: 'get' | 'post' | 'patch' | 'put' | 'delete';
}

export interface RequestProps {
  payload: { [k: string]: string | number };
}

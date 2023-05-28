export interface DataBody {
  name?: string
  code?: string
  description: string
}

export interface FormOperationProps {
  endpoint: string;
  method: string;
}

export interface PrevProps {
  endpoint: string;
  method: string;
}

export interface PrevUrl {
  prev: string;
}
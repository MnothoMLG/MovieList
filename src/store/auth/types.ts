import { BillingType, IOrderType } from '@constants/types';
import { DiscoveryDocument } from 'expo-auth-session';

export interface AuthDataState {
  authenticated: boolean;
  discoveryDoc?: DiscoveryDocument;
  user?: UserDataInterface;
  orderType?: IOrderType;
  billingType?: BillingType;
}

export interface UserDataInterface {
  id: string;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginDataInterface {
  identifier: string;
  password: string;
}

export interface TokenFetchPayload {
  code: string;
  code_verifier: string;
}

export interface TokenRevocationPayload {
  revocationEndpoint: string;
}

export interface AuthenticateUserResponse {
  jwt: string;
  user: UserDataInterface;
}


export type UserRole = 'owner' | 'admin' | 'staff';

export interface User {
  id: string;
  email: string;
  avatar_url?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo_url?: string;
  owner_id: string;
}

export interface BrandMember {
  id: string;
  brand_id: string;
  user_id: string;
  role: UserRole;
}

export interface AuthState {
  user: User | null;
  brand: Brand | null;
  loading: boolean;
}

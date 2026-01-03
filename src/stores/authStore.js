import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  walletAddress: null,
  did: null,
  
  login: (userData) => set({ 
    isAuthenticated: true, 
    user: userData,
    walletAddress: userData.walletAddress,
    did: userData.did
  }),
  
  logout: () => set({ 
    isAuthenticated: false, 
    user: null,
    walletAddress: null,
    did: null
  }),
  
  updateUser: (userData) => set((state) => ({ 
    user: { ...state.user, ...userData } 
  })),
}));

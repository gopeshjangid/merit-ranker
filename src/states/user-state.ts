import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { AuthUser } from 'aws-amplify/auth'

export interface User {
  userId: string
  username: string
  email?: string
  name?: string
  profilePicture?: string
  createdAt?: string
  lastLoginAt?: string
}

interface UserState {
  // User data
  user: User | null
  isLoading: boolean
  
  // Actions
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  updateUser: (updates: Partial<User>) => void
  clearUser: () => void
  
  // Auth user mapping
  setFromAuthUser: (authUser: AuthUser) => void
  
  // Getters
  getUserId: () => string | null
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      isLoading: false,
      
      // Actions
      setUser: (user) => set({ user }),
      setLoading: (loading) => set({ isLoading: loading }),
      
      updateUser: (updates) => set((state) => ({
        user: state.user ? { ...state.user, ...updates } : null
      })),
      
      clearUser: () => set({ 
        user: null, 
        isLoading: false 
      }),
      
      setFromAuthUser: (authUser) => {
        const user: User = {
          userId: authUser.userId || '',
          username: authUser.username || '',
          lastLoginAt: new Date().toISOString()
        }
        set({ user })
      },
      
      // Getters
      getUserId: () => {
        const state = get()
        return state.user?.userId || null
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ user: state.user }), // Only persist user, not loading state
    }
  )
)
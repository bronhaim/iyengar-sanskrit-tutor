import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  auth, 
  db, 
  googleProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  updateProfile,
  sendPasswordResetEmail,
  onAuthStateChanged,
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  arrayUnion, 
  arrayRemove 
} from '../services/firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(() => ({
    favorites: JSON.parse(localStorage.getItem('guest_favorites') || '[]'),
    sensitivities: JSON.parse(localStorage.getItem('guest_sensitivities') || '[]'),
    experienceLevel: localStorage.getItem('guest_experience') || 'beginner',
    customSequences: []
  }));
  const [loading, setLoading] = useState(true);

  // Sync profile from Firestore when user changes
  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    try {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (!isMounted) return;
        setCurrentUser(user);

        if (user && db) {
          try {
            const userDocRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(userDocRef);
            
            if (docSnap.exists() && isMounted) {
              setUserProfile(docSnap.data());
            } else if (isMounted) {
              // New user initial profile, merge with any local guest favorites
              const initialProfile = {
                email: user.email,
                displayName: user.displayName || user.email.split('@')[0],
                photoURL: user.photoURL || null,
                favorites: JSON.parse(localStorage.getItem('guest_favorites') || '[]'),
                sensitivities: JSON.parse(localStorage.getItem('guest_sensitivities') || '[]'),
                experienceLevel: localStorage.getItem('guest_experience') || 'beginner',
                customSequences: [],
                createdAt: new Date().toISOString()
              };
              await setDoc(userDocRef, initialProfile);
              setUserProfile(initialProfile);
            }
          } catch (error) {
            console.warn('Could not fetch user document from Firestore (offline or creating):', error);
          }
        } else if (isMounted) {
          // Fallback to local storage for guest
          setUserProfile({
            favorites: JSON.parse(localStorage.getItem('guest_favorites') || '[]'),
            sensitivities: JSON.parse(localStorage.getItem('guest_sensitivities') || '[]'),
            experienceLevel: localStorage.getItem('guest_experience') || 'beginner',
            customSequences: []
          });
        }
        
        if (isMounted) {
          setLoading(false);
        }
      });

      return () => {
        isMounted = false;
        unsubscribe();
      };
    } catch (err) {
      console.warn('Auth state subscription warning:', err);
      setLoading(false);
    }
  }, []);

  // Login with Google
  const loginWithGoogle = async () => {
    if (!auth || !googleProvider) throw new Error('אימות אינו מופעל כעת');
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  };

  // Login with Email & Password
  const loginWithEmail = async (email, password) => {
    if (!auth) throw new Error('אימות אינו מופעל כעת');
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  };

  // Register with Email & Password
  const registerWithEmail = async (email, password, displayName) => {
    if (!auth) throw new Error('אימות אינו מופעל כעת');
    const result = await createUserWithEmailAndPassword(auth, email, password);
    if (displayName) {
      await updateProfile(result.user, { displayName });
    }
    // Create initial firestore profile if db is ready
    if (db) {
      try {
        const userDocRef = doc(db, 'users', result.user.uid);
        const initialProfile = {
          email,
          displayName: displayName || email.split('@')[0],
          favorites: JSON.parse(localStorage.getItem('guest_favorites') || '[]'),
          sensitivities: JSON.parse(localStorage.getItem('guest_sensitivities') || '[]'),
          experienceLevel: 'beginner',
          customSequences: [],
          createdAt: new Date().toISOString()
        };
        await setDoc(userDocRef, initialProfile);
        setUserProfile(initialProfile);
      } catch (e) {
        console.warn('Firestore initial doc error:', e);
      }
    }
    return result.user;
  };

  // Logout
  const logout = async () => {
    if (auth) {
      await signOut(auth);
    }
  };

  // Password Reset Email
  const resetPassword = async (email) => {
    if (auth) {
      await sendPasswordResetEmail(auth, email);
    }
  };

  // Toggle Favorite Pose
  const toggleFavoritePose = async (poseId) => {
    const isCurrentlyFav = userProfile.favorites?.includes(poseId);
    const newFavorites = isCurrentlyFav
      ? (userProfile.favorites || []).filter(id => id !== poseId)
      : [...(userProfile.favorites || []), poseId];

    // Immediate state update
    setUserProfile(prev => ({ ...prev, favorites: newFavorites }));

    if (currentUser && db) {
      try {
        const userDocRef = doc(db, 'users', currentUser.uid);
        await updateDoc(userDocRef, {
          favorites: isCurrentlyFav ? arrayRemove(poseId) : arrayUnion(poseId)
        });
      } catch (err) {
        console.warn('Failed to sync favorite to cloud (saved locally):', err);
      }
    } else {
      localStorage.setItem('guest_favorites', JSON.stringify(newFavorites));
    }
  };

  const isFavorite = (poseId) => {
    return userProfile.favorites?.includes(poseId) || false;
  };

  // Update Body Sensitivities (e.g. knees, lower-back)
  const updateSensitivities = async (sensitivities) => {
    setUserProfile(prev => ({ ...prev, sensitivities }));
    if (currentUser && db) {
      try {
        const userDocRef = doc(db, 'users', currentUser.uid);
        await updateDoc(userDocRef, { sensitivities });
      } catch (err) {
        console.warn('Failed to sync sensitivities (saved locally):', err);
      }
    } else {
      localStorage.setItem('guest_sensitivities', JSON.stringify(sensitivities));
    }
  };

  // Update Experience Level
  const updateExperienceLevel = async (experienceLevel) => {
    setUserProfile(prev => ({ ...prev, experienceLevel }));
    if (currentUser && db) {
      try {
        const userDocRef = doc(db, 'users', currentUser.uid);
        await updateDoc(userDocRef, { experienceLevel });
      } catch (err) {
        console.warn('Failed to sync experience:', err);
      }
    } else {
      localStorage.setItem('guest_experience', experienceLevel);
    }
  };

  const value = {
    currentUser,
    userProfile,
    loading,
    loginWithGoogle,
    loginWithEmail,
    registerWithEmail,
    logout,
    resetPassword,
    toggleFavoritePose,
    isFavorite,
    updateSensitivities,
    updateExperienceLevel
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

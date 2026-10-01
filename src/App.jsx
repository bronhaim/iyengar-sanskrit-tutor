import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { StartScreen } from './components/StartScreen';
import { QuizScreen } from './components/QuizScreen';
import { RootsExplorer } from './components/RootsExplorer';
import { PoseCatalog } from './components/PoseCatalog';
import { SequencesScreen } from './components/SequencesScreen';
import { EndScreen } from './components/EndScreen';
import { ImageModal } from './components/ImageModal';
import { AuthModal } from './components/AuthModal';
import { POSE_DATABASE } from './data/posesData';

export function App() {
  const [currentView, setCurrentView] = useState('home');
  const [quizPool, setQuizPool] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [zoomedPose, setZoomedPose] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [catalogCategory, setCatalogCategory] = useState('all');

  // Helper to shuffle array for non-repetitive quiz session
  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const startQuiz = () => {
    const shuffled = shuffleArray(POSE_DATABASE);
    setQuizPool(shuffled);
    setQuizIndex(0);
    setUserAnswers({});
    setScore(0);
    setCurrentView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Safe fallback: if view is 'quiz' but pool is empty, initialize immediately
  useEffect(() => {
    if (currentView === 'quiz' && quizPool.length === 0) {
      startQuiz();
    }
  }, [currentView, quizPool.length]);

  const handleSelectOption = (optionIndex) => {
    // Stored temporarily when clicking on an option
  };

  const handleCheckAnswer = (selectedIndex) => {
    if (userAnswers[quizIndex] !== undefined) return;
    const currentQuestion = quizPool[quizIndex];
    if (!currentQuestion) return;
    const isCorrect = selectedIndex === currentQuestion.correctIndex;

    setUserAnswers(prev => ({
      ...prev,
      [quizIndex]: { selectedIndex, isCorrect }
    }));

    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (quizIndex < quizPool.length - 1) {
      setQuizIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('end');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevQuestion = () => {
    if (quizIndex > 0) {
      setQuizIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentQuestion = quizPool[quizIndex] || POSE_DATABASE[0];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2D2D] font-assistant flex flex-col selection:bg-terracotta selection:text-white">
      
      {/* 1. Sticky Glassmorphism Header */}
      <Header 
        currentView={currentView} 
        setCurrentView={(view) => {
          if (view === 'quiz') {
            startQuiz();
          } else {
            setCurrentView(view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }} 
        onStartQuiz={startQuiz}
        score={score} 
        totalQuestions={quizPool.length || POSE_DATABASE.length} 
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onSelectCategory={(cat) => {
          setCatalogCategory(cat);
          setCurrentView('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 2. Main Content Container (Full Width & Spacious) */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex flex-col">
        
        {currentView === 'home' && (
          <StartScreen 
            onStartQuiz={startQuiz}
            onOpenRoots={() => {
              setCurrentView('roots');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenCatalog={() => {
              setCatalogCategory('all');
              setCurrentView('catalog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenSequences={() => {
              setCurrentView('sequences');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            totalPoses={POSE_DATABASE.length}
          />
        )}

        {currentView === 'quiz' && (
          <QuizScreen 
            question={currentQuestion}
            questionIndex={quizIndex}
            totalQuestions={quizPool.length || POSE_DATABASE.length}
            answerState={userAnswers[quizIndex] || null}
            onSelectOption={handleSelectOption}
            onCheckAnswer={handleCheckAnswer}
            onNextQuestion={handleNextQuestion}
            onPrevQuestion={handlePrevQuestion}
            onExit={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenZoomModal={(p) => setZoomedPose(p)}
            canGoPrev={quizIndex > 0}
          />
        )}

        {currentView === 'roots' && (
          <RootsExplorer 
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'catalog' && (
          <PoseCatalog 
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenZoomModal={(p) => setZoomedPose(p)}
            initialCategory={catalogCategory}
          />
        )}

        {currentView === 'sequences' && (
          <SequencesScreen 
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenZoomModal={(p) => setZoomedPose(p)}
          />
        )}

        {currentView === 'end' && (
          <EndScreen 
            score={score}
            totalQuestions={quizPool.length || POSE_DATABASE.length}
            onRestart={startQuiz}
            onGoHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

      </main>

      {/* 3. Footer */}
      <footer className="w-full bg-white border-t border-[#E5D9C8] py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
          
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-base text-charcoal">
              <span>🕉️</span>
              <span>יוגה איינגר לתרגול ביתי</span>
            </div>
            <p className="text-xs text-charcoal-muted">
              מרחב אישי לתרגול יוגה איינגר ולימוד שמות התנוחות
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-charcoal-light">
            <button onClick={() => { setCurrentView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-soft-green transition-colors">
              דף הבית
            </button>
            <button onClick={() => { setCurrentView('catalog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-soft-green transition-colors">
              קטלוג תנוחות
            </button>
            <button onClick={() => { setCurrentView('sequences'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-800 transition-colors">
              רצפי תרגולים
            </button>
            <button onClick={startQuiz} className="hover:text-terracotta transition-colors">
              חידון
            </button>
            <button onClick={() => { setCurrentView('roots'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-soft-green transition-colors">
              מילון סנסקריט
            </button>
          </div>

          <div className="text-[11px] text-charcoal-muted">
            מסורת יוגה איינגר • דיוק, יציבה והעמקה
          </div>

        </div>
      </footer>

      {/* Modals */}
      {zoomedPose && (
        <ImageModal 
          pose={zoomedPose} 
          onClose={() => setZoomedPose(null)} 
        />
      )}

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />

    </div>
  );
}

export default App;

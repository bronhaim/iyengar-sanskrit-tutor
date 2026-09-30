import React, { useState } from 'react';
import { Header } from './components/Header';
import { StartScreen } from './components/StartScreen';
import { QuizScreen } from './components/QuizScreen';
import { RootsExplorer } from './components/RootsExplorer';
import { PoseCatalog } from './components/PoseCatalog';
import { EndScreen } from './components/EndScreen';
import { ImageModal } from './components/ImageModal';
import { POSE_DATABASE } from './data/posesData';

export function App() {
  const [currentView, setCurrentView] = useState('home');
  const [quizPool, setQuizPool] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [zoomedPose, setZoomedPose] = useState(null);

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
  };

  const handleSelectOption = (optionIndex) => {
    // Stored temporarily when clicking on an option
  };

  const handleCheckAnswer = (selectedIndex) => {
    if (userAnswers[quizIndex] !== undefined) return;
    const currentQuestion = quizPool[quizIndex];
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
    } else {
      setCurrentView('end');
    }
  };

  const handlePrevQuestion = () => {
    if (quizIndex > 0) {
      setQuizIndex(prev => prev - 1);
    }
  };

  const currentQuestion = quizPool[quizIndex];

  return (
    <div className="min-h-screen bg-[#EDE8E1] flex justify-center items-center p-0 sm:p-4 text-[#383330]">
      
      {/* App Container Frame */}
      <main className="w-full max-w-[500px] h-[100dvh] sm:h-[92vh] sm:max-h-[880px] bg-[#FAF5EE] sm:rounded-3xl sm:shadow-2xl sm:border sm:border-cream-300 relative overflow-hidden flex flex-col">
        
        {/* Header */}
        <Header 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
          score={score} 
          totalQuestions={quizPool.length} 
        />

        {/* View Switcher */}
        <div className="flex-1 overflow-hidden relative">
          
          {currentView === 'home' && (
            <StartScreen 
              onStartQuiz={startQuiz}
              onOpenRoots={() => setCurrentView('roots')}
              onOpenCatalog={() => setCurrentView('catalog')}
              totalPoses={POSE_DATABASE.length}
            />
          )}

          {currentView === 'quiz' && currentQuestion && (
            <QuizScreen 
              question={currentQuestion}
              questionIndex={quizIndex}
              totalQuestions={quizPool.length}
              answerState={userAnswers[quizIndex] || null}
              onSelectOption={handleSelectOption}
              onCheckAnswer={handleCheckAnswer}
              onNextQuestion={handleNextQuestion}
              onPrevQuestion={handlePrevQuestion}
              onExit={() => setCurrentView('home')}
              onOpenZoomModal={(p) => setZoomedPose(p)}
              canGoPrev={quizIndex > 0}
            />
          )}

          {currentView === 'roots' && (
            <RootsExplorer 
              onBackToHome={() => setCurrentView('home')}
            />
          )}

          {currentView === 'catalog' && (
            <PoseCatalog 
              onBackToHome={() => setCurrentView('home')}
              onOpenZoomModal={(p) => setZoomedPose(p)}
            />
          )}

          {currentView === 'end' && (
            <EndScreen 
              score={score}
              totalQuestions={quizPool.length}
              onRestart={startQuiz}
              onGoHome={() => setCurrentView('home')}
            />
          )}

        </div>

        {/* Zoom Modal */}
        {zoomedPose && (
          <ImageModal 
            pose={zoomedPose} 
            onClose={() => setZoomedPose(null)} 
          />
        )}

      </main>

    </div>
  );
}

export default App;

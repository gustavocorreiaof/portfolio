import React from "react";
import DecryptedText from "../external/decryptedText.tsx";
import "./bookCard.css";

export interface BookCardProps {
  title: string;
  description: string;
  coverImage: string;
  pagesRead: number;
  totalPages: number;
  analysisUrl?: string;
  translations?: {
    progress: string;
    readAnalysis: string;
  };
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  description,
  coverImage,
  pagesRead,
  totalPages,
  analysisUrl,
  translations = {
    progress: "Progresso de Leitura",
    readAnalysis: "Ler Análise",
  },
}) => {
  const progressPercentage = Math.min((pagesRead / totalPages) * 100, 100);
  const isComplete = progressPercentage >= 100;
  const hasAnalysis = !!analysisUrl;
  const canReadAnalysis = isComplete && hasAnalysis;

  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={coverImage} alt={`Capa do livro ${title}`} />
      </div>

      <div className="book-content">
        <h3 className="book-title">
          <DecryptedText
            text={title}
            animateOn="view"
            revealDirection="center"
          />
        </h3>

        <p className="book-description">
          <DecryptedText
            text={description}
            animateOn="view"
            revealDirection="center"
          />
        </p>

        <div className="book-progress-container">
          <div className="book-progress-header">
            <span className="book-progress-label">
              <DecryptedText
                text={translations.progress}
                animateOn="view"
                revealDirection="center"
              />
            </span>
            <span className="book-progress-pages">
              {pagesRead}/{totalPages}
            </span>
          </div>
          <div className="book-progress-bar">
            <div
              className="book-progress-fill"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="book-actions">
          {canReadAnalysis ? (
            <a
              href={analysisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="book-button"
            >
              <DecryptedText
                text={translations.readAnalysis}
                animateOn="view"
                revealDirection="center"
              />
            </a>
          ) : (
            <button
              className="book-button book-button-disabled"
              disabled
              title={!isComplete ? "Análise em breve" : ""}
            >
              <DecryptedText
                text={translations.readAnalysis}
                animateOn="view"
                revealDirection="center"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;

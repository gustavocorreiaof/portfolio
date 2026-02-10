import React from "react";
import { useOutletContext } from "react-router-dom";
import AnimatedContent from "../../components/external/animatedContent";
import BookCard from "../../components/BookCard";
import "./books.css";

type Language = "en" | "pt";

type LangContextType = {
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
};

function useLang() {
  return useOutletContext<LangContextType>();
}

interface Book {
  id: string;
  title: string;
  description: {
    pt: string;
    en: string;
  };
  coverImage: string;
  pagesRead: number;
  totalPages: number;
  analysisUrl?: string;
}

const books: Book[] = [
  {
    id: "pragmatic-programmer",
    title: "O Programador Pragmático",
    description: {
      pt: "Um clássico atemporal da literatura de desenvolvimento de software. Este livro aborda práticas essenciais para programadores que desejam evoluir em suas carreiras, desde a importância de escrever código limpo e manutenível até técnicas de resolução de problemas e comunicação eficaz em equipes de desenvolvimento. Uma leitura obrigatória para qualquer desenvolvedor que busca excelência profissional.",
      en: "A timeless classic in software development literature. This book covers essential practices for programmers who want to evolve in their careers, from the importance of writing clean and maintainable code to problem-solving techniques and effective communication in development teams. A must-read for any developer seeking professional excellence.",
    },
    coverImage: "/img/books/pragmatic-programmer.jpg",
    pagesRead: 88,
    totalPages: 348,
    analysisUrl: undefined,
  },
];

const Books: React.FC = () => {
  const { lang } = useLang();

  const translations = {
    pt: {
      title: "Livros",
      subtitle: "Acompanhe meu progresso de leitura e análises",
      progress: "Progresso de Leitura",
      readAnalysis: "Ler Análise",
    },
    en: {
      title: "Books",
      subtitle: "Follow my reading progress and reviews",
      progress: "Reading Progress",
      readAnalysis: "Read Analysis",
    },
  };

  return (
    <div className="page">
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={1}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}
      >
        <div className="books-page">
          <header className="books-header">
            <h1 className="books-title">{translations[lang].title}</h1>
            <p className="books-subtitle">{translations[lang].subtitle}</p>
          </header>

          <div className="books-list">
            {books.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                description={book.description[lang]}
                coverImage={book.coverImage}
                pagesRead={book.pagesRead}
                totalPages={book.totalPages}
                analysisUrl={book.analysisUrl}
                translations={{
                  progress: translations[lang].progress,
                  readAnalysis: translations[lang].readAnalysis,
                }}
              />
            ))}
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default Books;

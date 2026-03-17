import React from "react";
import { useOutletContext } from "react-router-dom";
import AnimatedContent from "../../components/external/animatedContent";
import DecryptedText from "../../components/external/decryptedText.tsx";
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
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  coverImage: string;
  pagesRead: number;
  totalPages: number;
}

const books: Book[] = [
  {
    id: "pragmatic-programmer",
    title: {
      pt: "O Programador Pragmático",
      en: "The Pragmatic Programmer",
    },
    description: {
      pt: "Em progresso de leitura, em breve será disponibilizado a análise!",
      en: "Reading in progress, the review will be available soon!",
    },
    coverImage: "/img/books/pragmatic-programmer.jpg",
    pagesRead: 88,
    totalPages: 348,
  },
  {
    id: "grokking-algorithms",
    title: {
      pt: "Entendendo Algoritmos",
      en: "Grokking Algorithms",
    },
    description: {
      pt: "O autor não mente ao afirmar que o livro é útil tanto para quem é da área de programação quanto para quem é apenas curioso. A forma como o conteúdo é abordado é extremamente simples e intuitiva, o que facilita bastante a compreensão.\n\nÉ um livro excelente, principalmente para quem está nas fases iniciais da faculdade. No meu caso, ele não foi aproveitado em sua totalidade, pois cerca de 60% do conteúdo eu já conhecia, adquirido em disciplinas como Estrutura de Dados e Estrutura de Dados Avançada. Ainda assim, acredito que, se eu tivesse lido esse livro durante esse período, teria sido de grande ajuda para consolidar esses conhecimentos.\n\nO livro aborda as principais estruturas de dados, algoritmos de ordenação e seleção, notação Big O — que é essencial para quem pretende participar de processos seletivos em grandes empresas de tecnologia — além de diversos algoritmos de ordenação e busca. Um exemplo que aprendi durante a leitura foi o algoritmo de Dijkstra. Inclusive, implementei esse algoritmo e disponibilizei o código em meu GitHub, em um repositório na linguagem Python. Também são tratados temas como recursão, entre outros.\n\nPara quem for ler, deixo o mesmo conselho que o autor dá e que eu também costumava dar aos meus colegas durante a disciplina de Estrutura de Dados: desenhe. A visualização facilita muito o entendimento do que está acontecendo. Além disso, recomendo resolver os exercícios propostos pelo autor; ao final do livro há as resoluções, permitindo verificar o próprio entendimento.\n\nNo geral, é um livro muito bom, de leitura simples e acessível. Recomendo para qualquer pessoa interessada no tema.",
      en: "The author does not lie when claiming that the book is useful for both those in the programming field and those who are simply curious. The way the content is approached is extremely simple and intuitive, which greatly facilitates comprehension.\n\nIt is an excellent book, especially for those in the early stages of college. In my case, it was not fully leveraged, as about 60% of the content I already knew, acquired through courses such as Data Structures and Advanced Data Structures. Even so, I believe that if I had read this book during that period, it would have been of great help in consolidating that knowledge.\n\nThe book covers the main data structures, sorting and selection algorithms, Big O notation — which is essential for anyone planning to participate in selection processes at major tech companies — as well as various sorting and search algorithms. One example I learned during reading was Dijkstra's algorithm. I even implemented this algorithm and made the code available on my GitHub, in a Python repository. Topics such as recursion, among others, are also covered.\n\nFor those about to read it, I offer the same advice the author gives, and that I also used to give to my colleagues during the Data Structures course: draw. Visualization greatly facilitates understanding what is happening. Additionally, I recommend solving the exercises proposed by the author; at the end of the book, the solutions are provided, allowing you to verify your own understanding.\n\nOverall, it is a very good book, with simple and accessible reading. I recommend it to anyone interested in the topic.",
    },
    coverImage: "/img/books/grokking algorithms_.jpg",
    pagesRead: 263,
    totalPages: 263,
  },
];

const Books: React.FC = () => {
  const { lang } = useLang();

  const translations = {
    pt: {
      title: "Livros",
      subtitle: "Acompanhe meu progresso de leitura e análises",
      progress: "Progresso de Leitura",
      coursesTitle: "Cursos",
      coursesMessage:
        "A fim de não extender tanto essa página com tantos certificados, segue o link com todos os meus certificados validados no LinkedIn:",
      coursesLink: "Ver certificados no LinkedIn",
    },
    en: {
      title: "Books",
      subtitle: "Follow my reading progress and reviews",
      progress: "Reading Progress",
      coursesTitle: "Courses",
      coursesMessage:
        "To avoid extending this page with so many certificates, here is the link with all my validated certificates on LinkedIn:",
      coursesLink: "View certificates on LinkedIn",
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
            <h1 className="books-title">
              <DecryptedText
                text={translations[lang].title}
                animateOn="view"
                revealDirection="center"
              />
            </h1>
            <p className="books-subtitle">
              <DecryptedText
                text={translations[lang].subtitle}
                animateOn="view"
                revealDirection="center"
              />
            </p>
          </header>

          <div className="books-list">
            {books.map((book) => (
              <BookCard
                key={book.id}
                title={book.title[lang]}
                description={book.description[lang]}
                coverImage={book.coverImage}
                pagesRead={book.pagesRead}
                totalPages={book.totalPages}
                translations={{
                  progress: translations[lang].progress,
                }}
              />
            ))}
          </div>

          <hr className="books-divider" />

          <section className="courses-section">
            <h2 className="courses-title">
              <DecryptedText
                text={translations[lang].coursesTitle}
                animateOn="view"
                revealDirection="center"
              />
            </h2>
            <p className="courses-message">{translations[lang].coursesMessage}</p>
            <a
              className="courses-link"
              href="https://www.linkedin.com/in/gustavo-correia-dev/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {translations[lang].coursesLink}
            </a>
          </section>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default Books;

export interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export interface SideBarProps {
  genres: GenreResponseProps[];
  selected: number;
  handleClick: (id: number) => void;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export interface ContentProps {
  movies: MovieProps[];
  title: string;
}

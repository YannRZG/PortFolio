import { GithubIcon } from './GithubIcon'; 


export default function App() {
  return (
    <a href="https://github.com/YannRZG" target="_blank" rel="noopener noreferrer" className="no-brackets">
      <button className="flex gap-4 items-center">
        <GithubIcon />
      </button>
    </a>
  );
}
export const GithubIcon = ({
  fill = 'currentColor',
  filled,
  size = 24,
  height = 40,
  width = 40,
  label,
  isdarkMode, // Ajoutez la prop isdarkMode
  ...props
}) => {
  // Utilisez une condition ternaire pour sélectionner l'URL en fonction de isdarkMode
  const iconSrc = isdarkMode
    ? "https://img.icons8.com/glyph-neue/30/F9010F/github.png"
    : "https://img.icons8.com/glyph-neue/30/FFFFFF/github.png";

  return (
    <img
      src={iconSrc}
      alt="github"
      width={width}
      height={height}
      {...props}
    />
  );
};

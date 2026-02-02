import { useTheme } from '../../../shared/layouts/lib/theme/ThemeContext';
import Button from '../../../shared/layouts/ui/Button/Button';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      Переключить тему ({theme})
    </Button>
  );
};

export default ThemeSwitcher;
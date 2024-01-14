import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { HiMoon, HiSun } from "react-icons/hi";

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      defaultSelected
      size="md"
      color="primary"
      onChange={() => setTheme(theme == "dark" ? "light" : "dark")}
      thumbIcon={({ isSelected, className }) => (isSelected ? <HiSun className={className} /> : <HiMoon className={className} />)}
    />
  );
};

export default SwitchTheme;

import ThemeToggle from "../atoms/ThemeToggle"

const Header = () => {
  return(
    <div className="flex justify-between">
      <h1>Sleep Detector</h1>
      <ThemeToggle />
    </div>
  )
}

export default Header
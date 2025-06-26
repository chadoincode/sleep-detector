import ThemeToggle from "../atoms/ThemeToggle"

const Header = () => {
  return(
    <div className="flex justify-center p-5 w-full h-fit">
      <h1 className="font-bold text-3xl text-primary">Sleep Detector</h1>
      {/* <ThemeToggle /> */}
    </div>
  )
}

export default Header
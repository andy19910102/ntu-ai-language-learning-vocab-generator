import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons"

export default function GeneratorButton() {
    return (
        <button type="submit" className="relative bg-gradient-to-r from-pink-500 to-purple-500 text-white h-[52px] font-semibold rounded-lg w-full transition-opacity duration-200 hover:opacity-80 active:opacity-60 p-[2px] overflow-hidden">
            <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-pink-400 to-purple-400 z-0"></span>
            <span className="relative flex items-center justify-center w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg">
                <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-2" />
                Generate
            </span>
        </button>
    )
}
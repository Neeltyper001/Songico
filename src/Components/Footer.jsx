import { getYear } from "../utils/timeUtils";

export default function Footer(){
    return(
        <footer className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-screen-xl">
            <p className="text-center">
              {`Copyright &copy; ${getYear()}. All rights reserved.`}
            </p>
          </div>
        </div>
      </footer>
    )
}
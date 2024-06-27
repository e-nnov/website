'use client'

import { faPrint } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const PrintButton = () => {

    const handlePrint = () => window.print()

    return (
        <div className="hidden fixed xl:block top-1/4 right-14">
            <div className="tooltip tooltip-left" data-tip="Imprimer">
                <button className="w-8 h-8 flex justify-end items-end" onClick={handlePrint}>
                    <FontAwesomeIcon className="w-8 h-8 opacity-60 text-devblue hover:opacity-100 animate-bounce hover:animate-none" icon={faPrint} />
                </button>
            </div>
        </div>
    )
}

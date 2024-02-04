import { Note } from '../../types'
import { normalizeNoteName } from '../../util'

type FretProps = {
    fretNumber: number
    stringNumber: number
    note: Note
}

export const Fret = ({ fretNumber, stringNumber, note }: FretProps) => {
    const noteName = normalizeNoteName(note)
    return (
        <td
            headers={`string_${stringNumber} fret_${fretNumber}`}
            className="note"
            data-name={noteName}
        >
            <span className="name hidden" aria-labelledby={`string_${stringNumber} fret_${fretNumber}`}>{noteName}</span>
        </td>
    )
}

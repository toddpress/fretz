import String from './String'
import { Note } from '../../types'
import { getNotes } from '../../util'

type FretboardProps = {
    fretCount?: number
    tuning?: Note[]
}
const STANDARD: Note[] = ['E', 'A', 'D', 'G', 'B', 'E']

export const Fretboard = ({ tuning = STANDARD, fretCount = 24 }: FretboardProps) => {

    const frets = Array.from({ length: fretCount }, (_, index) => index + 1)
    const notesForTuning: Note[][] = tuning.map((note) => {
        return getNotes(note, fretCount)
    })

    return (
        <table className="neck">
            <thead>
                <tr>
                    <th scope="col" role="presentation"></th>
                    {frets.map((fret) => {
                        const id = `fret_${fret}`
                        const fretName = `Fret ${fret}`
                        return (
                            <th
                                key={id}
                                id={id}
                                scope="col"
                                role="presentation"
                            >
                                <span>{fretName}</span>
                            </th>
                        )
                    })}
                </tr>
            </thead>

            <tbody className="fretboard">
                {notesForTuning.map((notes, index) => (
                    <String
                        key={index}
                        stringNumber={index + 1}
                        notes={notes}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Fretboard


import { For } from '../common/For'
import { Fret } from './Fret'
import { ccc } from '../../util/ccc'

import { Note } from '../../types'

import styles from './Fretboard.module.scss'

type StringProps = {
    stringNumber: number
    notes: Note[]
}

const String = ({ stringNumber, notes }: StringProps) => {
    const [openNote, ...frets] = notes
    return (
        <tr className={styles.string} style={{ display: 'flex' }}>
            <th id={`string_${stringNumber}`} className="sr-only" scope="row">
                <span>String {stringNumber}</span>
            </th>

            <Fret
                fretNumber={0}
                stringNumber={stringNumber}
                note={openNote}
                classNames={ccc(styles.nut, `fret_0`)}
            />

            <For in={frets}>
                {(note: Note, index: number) => (
                    <Fret
                        fretNumber={index + 1}
                        stringNumber={stringNumber}
                        note={note}
                    />
                )}
            </For>
        </tr>
    )
}

export default String
